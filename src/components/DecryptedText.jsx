import React, { useState, useEffect, useRef } from 'react'

const DecryptedText = ({ text, className = '', speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState(text) // Start with full text
  const [currentIndex, setCurrentIndex] = useState(text.length) // Start completed
  const [isDecrypting, setIsDecrypting] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef(null)

  const resetAnimation = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    // Reset to start of animation
    setDisplayedText('')
    setCurrentIndex(0)
    setIsDecrypting(true)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    resetAnimation()
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    // Don't reset on mouse leave, let it complete
  }

  useEffect(() => {
    if (isDecrypting && currentIndex < text.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    } else if (currentIndex >= text.length) {
      setIsDecrypting(false)
    }
  }, [currentIndex, text, speed, isDecrypting])

  // Initial load - show full text immediately
  useEffect(() => {
    setDisplayedText(text)
    setCurrentIndex(text.length)
    setIsDecrypting(false)
  }, [text])

  return (
    <span 
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'pointer' }}
    >
      {displayedText}
      {isDecrypting && (
        <span className="decrypt-cursor">|</span>
      )}
    </span>
  )
}

export default DecryptedText