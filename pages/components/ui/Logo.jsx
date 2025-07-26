import React from 'react'

const Logo = ({ isScrolled = false }) => {
  return (
    <div className="w-full h-full">
      <img 
        src={isScrolled ? '/logos/print.svg' : '/logos/print_transparent.svg'} 
        alt="Gita Teknoloji Logo" 
        className={`w-full h-full object-contain transition-all duration-300 ${
          !isScrolled ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
  )
}

export default Logo
