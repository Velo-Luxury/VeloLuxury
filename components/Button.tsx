import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 font-sans";
  
  // Updated shadow to match #B49B62
  const variants = {
    primary: "bg-gold-500 text-black hover:bg-white hover:text-black shadow-[0_0_15px_rgba(180,155,98,0.3)] hover:shadow-[0_0_20px_rgba(180,155,98,0.5)]",
    outline: "border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black",
    ghost: "text-white hover:text-gold-400"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};