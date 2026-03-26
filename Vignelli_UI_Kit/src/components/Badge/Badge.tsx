import React, { ReactNode } from 'react';
import '../../index.css';

export interface BadgeProps {
  type?: 'Featured' | 'New' | 'Sale' | 'Sold Out' | 'Active' | 'Draft';
  state?: 'Default' | 'Disabled';
  children?: ReactNode;
}

export const Badge = ({ type = 'Featured', state = 'Default', children }: BadgeProps) => {
  const getTypeClass = () => {
    if (state === 'Disabled') return 'bdg-dis';
    switch(type) {
      case 'Featured': return 'bdg-ft';
      case 'New': return 'bdg-nw';
      case 'Sale': return 'bdg-sl';
      case 'Sold Out': return 'bdg-so';
      case 'Active': return 'bdg-ac';
      case 'Draft': return 'bdg-dr';
      default: return 'bdg-ft';
    }
  };
  
  const defaultLabel = type.toUpperCase();
  
  return (
    <span className={`bdg ${getTypeClass()}`}>
      {children || defaultLabel}
    </span>
  );
};
