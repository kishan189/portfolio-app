import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Button,
  Input,
  VStack,
  HStack,
  Text,
  IconButton,
  useColorModeValue,
  Flex,
  Spacer,
  Divider,
  useBreakpointValue,
  CloseButton,
  Spinner,
  Alert,
  AlertIcon,
  useMediaQuery,
  Tooltip,
  keyframes,
} from '@chakra-ui/react';
import { ChatIcon, ArrowForwardIcon, CloseIcon } from '@chakra-ui/icons';
import { FaMagic } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { askQuestion } from '../services/api';
import MarkdownRenderer from './MarkdownRenderer';

// Typing animation component
const TypingAnimation = () => {
  const bounce = keyframes`
    0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
    30% { transform: translateY(-3px); opacity: 1; }
  `;

  const glow = keyframes`
    0%, 100% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.15); opacity: 1; }
  `;

  return (
    <HStack spacing={3} align="center" py={2} px={1}>
      <Box
        as={FaMagic}
        size="13px"
        color="blue.500"
        animation={`${glow} 1.8s infinite ease-in-out`}
      />
      <HStack spacing={1.5}>
        <Box
          w="5px"
          h="5px"
          bg="gray.600"
          borderRadius="50%"
          animation={`${bounce} 1.2s infinite ease-in-out`}
        />
        <Box
          w="5px"
          h="5px"
          bg="gray.600"
          borderRadius="50%"
          animation={`${bounce} 1.2s infinite ease-in-out 0.15s`}
        />
        <Box
          w="5px"
          h="5px"
          bg="gray.600"
          borderRadius="50%"
          animation={`${bounce} 1.2s infinite ease-in-out 0.3s`}
        />
      </HStack>
    </HStack>
  );
};

const FloatingChatbot = () => {
  // All state hooks first
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcomePrompt, setShowWelcomePrompt] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Shrihari's Assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // All ref hooks
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatPanelRef = useRef(null);
  const floatingButtonRef = useRef(null);
  
  // All other hooks
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const buttonBg = useColorModeValue('blue.500', 'blue.600');
  const buttonHover = useColorModeValue('blue.600', 'blue.700');

  // Wave animation for the hand emoji
  const wave = keyframes`
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  `;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Small delay to ensure the chat panel is fully rendered
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Welcome prompt animation - show periodically every 15 seconds
  useEffect(() => {
    if (!isOpen) {
      const welcomeTimer = setTimeout(() => {
        setShowWelcomePrompt(true);
        
        // Hide the prompt after 4 seconds
        const hideTimer = setTimeout(() => {
          setShowWelcomePrompt(false);
        }, 4000);

        return () => clearTimeout(hideTimer);
      }, 3000);

      // Repeat every 15 seconds if chat is still closed
      const repeatTimer = setInterval(() => {
        if (!isOpen) {
          setShowWelcomePrompt(true);
          setTimeout(() => {
            setShowWelcomePrompt(false);
          }, 4000);
        }
      }, 15000);

      return () => {
        clearTimeout(welcomeTimer);
        clearInterval(repeatTimer);
      };
    }
  }, [isOpen]);

  // Handle outside click to close chat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && 
          chatPanelRef.current && 
          !chatPanelRef.current.contains(event.target) &&
          (!floatingButtonRef.current || !floatingButtonRef.current.contains(event.target))) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);


  const handleSendMessage = async () => {
    if (inputMessage.trim() && !isLoading) {
      const userMessage = {
        id: Date.now(),
        text: inputMessage,
        isBot: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, userMessage]);
      const currentMessage = inputMessage;
      setInputMessage('');
      setIsLoading(true);
      setError(null);

      // Add typing indicator message
      const typingMessage = {
        id: Date.now() + 0.5,
        text: '',
        isBot: true,
        isTyping: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, typingMessage]);

      try {
        // Get the last 2 question-answer pairs for context
        const conversationHistory = getConversationHistory();
        
        console.log('Making API call with:', { 
          question: currentMessage,
          context: conversationHistory
        });
        
        const response = await askQuestion(currentMessage, conversationHistory);
        
        console.log('API Response:', response);
        
        if (response.success) {
          const botMessage = {
            id: Date.now() + 1,
            text: response.data,
            isBot: true,
            timestamp: new Date(),
          };
          // Remove typing message and add bot response
          setMessages(prev => prev.filter(msg => !msg.isTyping).concat(botMessage));
        } else {
          throw new Error(response.error || 'Failed to get response from AI');
        }
      } catch (error) {
        console.error('Error calling API:', error);
        setError('Sorry, I encountered an error. Please try again.');
        
        const errorMessage = {
          id: Date.now() + 1,
          text: 'Sorry, I encountered an error. Please try again.',
          isBot: true,
          timestamp: new Date(),
        };
        // Remove typing message and add error message
        setMessages(prev => prev.filter(msg => !msg.isTyping).concat(errorMessage));
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Helper function to get the last 2 question-answer pairs
  const getConversationHistory = () => {
    const history = [];
    const botMessages = messages.filter(msg => msg.isBot);
    const userMessages = messages.filter(msg => !msg.isBot);
    
    // Get the last 2 pairs (excluding the initial greeting message)
    const recentBotMessages = botMessages.slice(-2);
    const recentUserMessages = userMessages.slice(-2);
    
    // Pair them up
    for (let i = 0; i < Math.min(recentBotMessages.length, recentUserMessages.length); i++) {
      history.push({
        question: recentUserMessages[i].text,
        answer: recentBotMessages[i].text
      });
    }
    
    return history;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      
      {/* Floating Button - Hide on mobile when chat is open */}
      <AnimatePresence>
        {!(isMobile && isOpen) && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.3 }}
          >
        <Tooltip
          label="Chat with Shrihari's Assistant"
          placement="left"
          hasArrow
          bg="gray.700"
          color="white"
          fontSize="sm"
          borderRadius="md"
          px={3}
          py={2}
        >
          <Button
            ref={floatingButtonRef}
            position="fixed"
            bottom="40px"
            right={isMobile ? "20px" : "30px"}
            left={isMobile ? "auto" : "auto"}
            zIndex={1000}
            size="lg"
            bg={buttonBg}
            color="white"
            borderRadius="50%"
            width="60px"
            height="60px"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"
            _hover={{
              bg: buttonHover,
              transform: 'translateY(-2px) scale(1.05)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            }}
            _active={{
              transform: 'translateY(0px) scale(0.95)',
            }}
            onClick={() => {
              setIsOpen(true);
              setShowWelcomePrompt(false);
            }}
            transition="all 0.2s ease-in-out"
          >
            <ChatIcon boxSize={6} />
          </Button>
        </Tooltip>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Welcome Prompt */}
      <AnimatePresence>
        {showWelcomePrompt && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              position: 'fixed',
              bottom: isMobile ? '110px' : '110px',
              right: isMobile ? '30px' : '45px',
              left: isMobile ? 'auto' : 'auto',
              transform: isMobile ? 'none' : 'none',
              zIndex: 1001,
            }}
          >
            <Box
              bg="#B9C9EB"
              color="black"
              px={4}
              py={3}
              borderRadius="lg"
              boxShadow="0 8px 25px rgba(0, 0, 0, 0.15)"
              border="1px solid"
              borderColor="gray.300"
              maxW="250px"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                right: isMobile ? '8px' : '8px',
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid #B9C9EB',
              }}
            >
              <HStack spacing={2} align="center">
                <Text 
                  fontSize="24px" 
                  animation={`${wave} 2s ease-in-out infinite`}
                  transformOrigin="70% 70%"
                >
                  👋
                </Text>
                <Text fontSize="sm" fontWeight="medium">
                  Hey! How can I help you?
                </Text>
              </HStack>
              <Text fontSize="xs" color="gray.700" mt={1}>
                Ask me about Shrihari's experience
              </Text>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 30,
              duration: 0.25
            }}
            style={{
              position: 'fixed',
              bottom: isMobile ? '20px' : '110px',
              right: isMobile ? '20px' : '20px',
              zIndex: 999,
              width: isMobile ? 'calc(100vw - 40px)' : '400px',
              maxWidth: isMobile ? 'none' : '400px',
              height: isMobile ? '80vh' : '70vh',
              maxHeight: isMobile ? '80vh' : '70vh',
            }}
          >
            <Box
              ref={chatPanelRef}
              bg={bgColor}
              borderRadius="xl"
              boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              border="1px solid"
              borderColor={borderColor}
              height="100%"
              display="flex"
              flexDirection="column"
            >
              {/* Header */}
              <Flex
                align="center"
                p={4}
                borderBottom="1px solid"
                borderColor={borderColor}
                borderRadius="xl xl 0 0"
              >
                <ChatIcon mr={2} color="blue.500" />
                <HStack spacing={2} align="center">
                  <Text fontSize="lg" fontWeight="semibold">
                    Shrihari's Assistant
                  </Text>
                  <Text 
                    fontSize="lg" 
                    animation={`${wave} 2s ease-in-out infinite`}
                    transformOrigin="70% 70%"
                  >
                    👋
                  </Text>
                </HStack>
                <Spacer />
                <CloseButton onClick={() => setIsOpen(false)} />
              </Flex>

              {/* Chat Messages Area */}
              <Box
                flex="1"
                overflowY="auto"
                p={4}
                width="100%"
                minHeight="0"
              >
                <VStack spacing={0} align="stretch">
                  {messages.map((message) => (
                    <Flex
                      key={message.id}
                      justify={message.isBot ? 'flex-start' : 'flex-end'}
                      mb={3}
                    >
        <Box
          maxW={isMobile ? "90%" : "80%"}
          minW={isMobile ? "60%" : "auto"}
          bg={message.isBot ? '#B9C9EB' : 'blue.300'}
          color={message.isBot ? 'black' : 'gray.800'}
          px={message.isTyping ? 2 : 4}
          py={message.isTyping ? 1 : 2}
          borderRadius={message.isBot ? "4px 18px 18px 18px" : "18px 4px 18px 18px"}
          fontSize="sm"
          wordBreak="break-word"
          minH={message.isTyping ? "40px" : "auto"}
          display="flex"
          alignItems="center"
        >
                        {message.isBot ? (
                          message.isTyping ? (
                            <TypingAnimation />
                          ) : (
                            <MarkdownRenderer content={message.text} />
                          )
                        ) : (
                          <Text>{message.text}</Text>
                        )}
                      </Box>
                    </Flex>
                  ))}
                  
                  
                  <div ref={messagesEndRef} />
                </VStack>
              </Box>

              <Divider />

              {/* Input Area */}
              <Box p={4} width="100%" flexShrink={0}>
                <HStack spacing={2}>
                  <Input
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message..."
                    size="md"
                    borderRadius="full"
                    borderColor={borderColor}
                    _focus={{
                      borderColor: 'blue.500',
                      boxShadow: '0 0 0 1px #3182ce',
                    }}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                  <IconButton
                    aria-label="Send message"
                    icon={<ArrowForwardIcon />}
                    onClick={handleSendMessage}
                    colorScheme="blue"
                    borderRadius="full"
                    size="md"
                    isDisabled={!inputMessage.trim() || isLoading}
                    opacity={isLoading ? 0.6 : 1}
                  />
                </HStack>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatbot;