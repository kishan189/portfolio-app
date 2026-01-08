import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);

        // Clear the previous timeout if it exists
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        // Set a new timeout to hide the button after 3 seconds
        const timeout = setTimeout(() => {
          setShowButton(false);
        }, 1500);

        // Save the timeout ID to state
        setScrollTimeout(timeout);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showButton && (
      <Button
        onClick={handleClick}
        position="fixed"
        bottom={['10px','10px','10px','10px']}
        right={[3,3,8,8]}
        size="sm"
        colorScheme="blue"
        borderRadius="full"
        boxShadow="md"
        zIndex="tooltip"
        transition="opacity 0.3s"
        _hover={{ boxShadow: 'lg' }}
        p={'15px 8px'}
        title="Scroll to Top"
      >
        <ChevronUpIcon boxSize={4} />
      </Button>
    )
  );
};

export default ScrollToTopButton;
