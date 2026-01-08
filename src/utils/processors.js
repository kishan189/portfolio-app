export const addChakraStyles = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
  
    // Define a mapping of tags to Chakra UI styles
    const tagStyleMapping = {
      h1: "font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;",
      h2: "font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;",
      h3: "font-size: 1.125rem; font-weight: semi-bold; margin-bottom: 0.75rem;",
      h4: "font-size: 1rem; font-weight: medium; margin-bottom: 0.5rem;",
      h5: "font-size: 0.875rem; font-weight: medium; margin-bottom: 0.5rem;",
      h6: "font-size: 0.75rem; font-weight: medium; margin-bottom: 0.25rem;",
  
      p: "font-size: 1rem; line-height: 1.6; margin-bottom: 1rem;",
      strong: "font-weight: bold; color: #2D3748;",
      em: "font-style: italic; color: #4A5568;",
      small: "font-size: 0.875rem; color: #718096;",
      blockquote: "border-left: 4px solid #CBD5E0; padding-left: 1rem; font-style: italic; color: #4A5568; margin-bottom: 1rem;",
  
      ul: "padding-left: 1.25rem; list-style-type: disc;",
      ol: "padding-left: 1.25rem; list-style-type: decimal;",
      li: "margin-bottom: 0.25rem;",
      dl: "margin-bottom: 1rem;",
      dt: "font-weight: bold;",
      dd: "margin-left: 1rem; margin-bottom: 0.5rem;",
  
      a: "color: #3182CE; text-decoration: underline;",
      pre: "background-color: #F7FAFC; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-size: 0.875rem;",
      code: "background-color: #EDF2F7; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-family: monospace;",
  
      table: "width: 100%; border-collapse: collapse; border: 1px solid #CBD5E0; margin-bottom: 1rem;",
      thead: "background-color: #EDF2F7;",
      th: "border: 1px solid #CBD5E0; padding: 0.5rem; text-align: left; font-weight: bold;",
      tr: "border: 1px solid #CBD5E0;",
      td: "border: 1px solid #CBD5E0; padding: 0.5rem;",
  
      img: "max-width: 100%; height: auto; border-radius: 0.5rem; margin-bottom: 1rem;",
      figure: "margin-bottom: 1rem;",
      figcaption: "font-size: 0.875rem; color: #718096;",
  
      input: "border: 1px solid #CBD5E0; border-radius: 0.375rem; padding: 0.5rem; width: 100%; margin-bottom: 0.5rem;",
      textarea: "border: 1px solid #CBD5E0; border-radius: 0.375rem; padding: 0.5rem; width: 100%; margin-bottom: 0.5rem;",
      button: "background-color: #3182CE; color: white; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer;",
      select: "border: 1px solid #CBD5E0; border-radius: 0.375rem; padding: 0.5rem; width: 100%; margin-bottom: 0.5rem;",
  
      hr: "border-top: 1px solid #CBD5E0; margin: 1rem 0;",
      br: "display: block; margin-bottom: 0.5rem;",
      div: "margin-bottom: 0.5rem;",
      span: "",
    };
  
    // Apply styles to matching elements
    Object.keys(tagStyleMapping).forEach((tag) => {
      const elements = doc.querySelectorAll(tag);
      elements.forEach((element) => {
        element.setAttribute("style", tagStyleMapping[tag]);
      });
    });
  
    return doc.body.innerHTML;
  };
  