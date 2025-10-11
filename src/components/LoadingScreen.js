import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

function LoadingScreen({ onComplete }) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  const fullText = 'Gabriel Esquivel';

  useEffect(() => {
    let currentIndex = 0;

    // Typewriter effect
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Show subtitle after name is typed
        setTimeout(() => {
          setShowSubtitle(true);
          // Hold for a moment then fade out
          setTimeout(() => {
            setIsAnimating(false);
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 1500);
        }, 300);
      }
    }, 100); // Typing speed

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${!isAnimating ? 'fade-out' : ''}`}>
      <div className="typewriter-container">
        <h1 className="typewriter-text">
          {displayedText}
          <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
        </h1>
        {showSubtitle && (
          <p className="typewriter-subtitle">Welcome</p>
        )}
      </div>
    </div>
  );
}

export default LoadingScreen;
