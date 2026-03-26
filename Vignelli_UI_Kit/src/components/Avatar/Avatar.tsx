import React from 'react';
import '../../index.css';

export interface AvatarProps {
  size?: 'Small' | 'Medium' | 'Large';
  theme?: 'Brand' | 'Dark' | 'Light' | 'Outline';
  initials: string;
}

export const Avatar = ({ size = 'Medium', theme = 'Brand', initials }: AvatarProps) => {
  const sizeMap: Record<string, string> = { Small: 'ava-sm', Medium: 'ava-md', Large: 'ava-lg' };
  const themeMap: Record<string, string> = { Brand: 'ava-brand', Dark: 'ava-dark', Light: 'ava-light', Outline: 'ava-outline' };
  
  return (
    <div className={`ava ${sizeMap[size]} ${themeMap[theme]}`}>
      {initials.slice(0, 2).toUpperCase()}
    </div>
  );
};
