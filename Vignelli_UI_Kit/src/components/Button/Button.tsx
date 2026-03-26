import React, { ReactNode } from 'react';
import '../../index.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'Primary' | 'Secondary' | 'Destructive' | 'Ghost';
  children: ReactNode;
}

export const Button = ({
  variant = 'Primary',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const getVariantClass = () => {
    switch(variant) {
      case 'Primary': return 'btn-p';
      case 'Secondary': return 'btn-s';
      case 'Destructive': return 'btn-d';
      case 'Ghost': return 'btn-g';
      default: return 'btn-p';
    }
  };
  
  return (
    <button className={`btn ${getVariantClass()} ${className}`} {...props}>
      {children}
    </button>
  );
};
