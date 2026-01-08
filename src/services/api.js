// API Configuration
const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://next-js-portfolio-assistant.vercel.app',
  ENDPOINTS: {
    ASK_WITHOUT_STREAM: '/api/ask',
    ASK_WITH_STREAM: '/ask', // Add streaming endpoint
  },
  TIMEOUT: 30000, // 30 seconds
};

// Generic request function with modern async/await and error handling
const makeRequest = async (endpoint, options = {}) => {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const requestOptions = {
    ...defaultOptions,
    ...options,
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

    const response = await fetch(url, {
      ...requestOptions,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - please try again');
    }
    throw error;
  }
};

// Ask question without streaming - pure function
const askQuestion = async (question, context = []) => {
  try {
    console.log('API Service - Making request to:', `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ASK_WITHOUT_STREAM}`);
    console.log('API Service - Request body:', { question, context });
    
    const response = await makeRequest(API_CONFIG.ENDPOINTS.ASK_WITHOUT_STREAM, {
      body: JSON.stringify({
        question,
        context,
      }),
    });

    console.log('API Service - Raw response:', response);
    
    // Extract the actual message content from the OpenAI-style response
    let messageContent = '';
    if (response && response.choices && response.choices[0] && response.choices[0].message) {
      messageContent = response.choices[0].message.content;
    } else if (response && response.data && response.data.choices && response.data.choices[0] && response.data.choices[0].message) {
      messageContent = response.data.choices[0].message.content;
    } else if (typeof response === 'string') {
      messageContent = response;
    } else {
      messageContent = 'Sorry, I received an unexpected response format.';
    }
    
    return {
      success: true,
      data: messageContent,
    };
  } catch (error) {
    console.error('API Service - Error:', error);
    return {
      success: false,
      error: error.message || 'An unexpected error occurred',
    };
  }
};

// Streaming question function
const askQuestionStream = async (question, onToken) => {
  try {
    console.log('API Service - Making streaming request to:', `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ASK_WITH_STREAM}`);
    console.log('API Service - Request body:', { question });
    
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ASK_WITH_STREAM}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullResponse = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.trim() === '') continue;
          
          // Handle Server-Sent Events format
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') {
              return { success: true, data: fullResponse };
            }
            
            try {
              const parsed = JSON.parse(data);
              if (parsed.choices && parsed.choices[0] && parsed.choices[0].delta && parsed.choices[0].delta.content) {
                const token = parsed.choices[0].delta.content;
                fullResponse += token;
                onToken(token);
              }
            } catch (e) {
              // If not JSON, treat as plain text token
              if (data && data !== '[DONE]') {
                fullResponse += data;
                onToken(data);
              }
            }
          } else {
            // Handle plain text streaming
            fullResponse += line;
            onToken(line);
          }
        }
      }
    } finally {
      reader.releaseLock();
    }

    return { success: true, data: fullResponse };
  } catch (error) {
    console.error('API Service - Streaming Error:', error);
    return {
      success: false,
      error: error.message || 'An unexpected error occurred',
    };
  }
};

// Export functions and configuration
export { askQuestion, askQuestionStream, API_CONFIG };
export default askQuestion;
