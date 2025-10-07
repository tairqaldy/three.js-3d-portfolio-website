import React from 'react'

const GradientText = ({ 
  text, 
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"], 
  className = '',
  duration = 3 
}) => {
  return (
    <span 
      className={className}
      style={{
        background: `linear-gradient(45deg, ${colors.join(', ')})`,
        backgroundSize: '400% 400%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: `gradientShift ${duration}s ease-in-out infinite`,
        fontWeight: 'bold'
      }}
    >
      {text}
    </span>
  )
}

export default GradientText