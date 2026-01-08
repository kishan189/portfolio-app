import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box } from '@chakra-ui/react';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ content }) => {
  return (
    <Box
      sx={{
        width: "100%",
        wordBreak: "break-word",
        lineHeight: "1.6",
        
        // Table styles
        '& table': {
          width: '100%',
          borderCollapse: 'collapse',
          margin: '12px 0',
          fontSize: '14px',
        },
        '& th, & td': {
          border: '1px solid #e2e8f0',
          padding: '8px 12px',
          textAlign: 'left',
        },
        '& th': {
          backgroundColor: '#f7fafc',
          fontWeight: '600',
          color: '#2d3748',
        },
        '& tr:nth-child(even)': {
          backgroundColor: '#f9f9f9',
        },
        '& tr:hover': {
          backgroundColor: '#edf2f7',
        },
        
        // Bold text
        '& strong, & b': {
          fontWeight: '600',
          color: '#2d3748',
        },
        
        // Headers
        '& h1, & h2, & h3, & h4, & h5, & h6': {
          margin: '16px 0 8px 0',
          fontWeight: '600',
          color: '#2d3748',
        },
        '& h1': { fontSize: '24px' },
        '& h2': { fontSize: '20px' },
        '& h3': { fontSize: '18px' },
        '& h4': { fontSize: '16px' },
        
        // Lists
        '& ul, & ol': {
          margin: '12px 0',
          paddingLeft: '24px',
        },
        '& li': {
          margin: '6px 0',
          lineHeight: '1.5',
        },
        '& li p': {
          margin: '0',
        },
        
        // Paragraphs
        '& p': {
          margin: '12px 0',
          lineHeight: '1.6',
        },
        '& p:first-child': {
          marginTop: '0',
        },
        '& p:last-child': {
          marginBottom: '0',
        },
        
        // Code blocks
        '& code': {
          backgroundColor: '#f1f5f9',
          padding: '2px 4px',
          borderRadius: '4px',
          fontSize: '13px',
          fontFamily: 'monospace',
        },
        '& pre': {
          backgroundColor: '#f1f5f9',
          padding: '12px',
          borderRadius: '6px',
          overflow: 'auto',
          margin: '12px 0',
        },
        '& pre code': {
          backgroundColor: 'transparent',
          padding: '0',
        },
        
        // Links
        '& a': {
          color: '#3182ce',
          textDecoration: 'underline',
        },
        '& a:hover': {
          color: '#2c5282',
        },
        
        // Blockquotes
        '& blockquote': {
          borderLeft: '4px solid #e2e8f0',
          paddingLeft: '16px',
          margin: '12px 0',
          fontStyle: 'italic',
          color: '#4a5568',
        },
        
        // Horizontal rules
        '& hr': {
          border: 'none',
          borderTop: '1px solid #e2e8f0',
          margin: '16px 0',
        },
      }}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownRenderer;