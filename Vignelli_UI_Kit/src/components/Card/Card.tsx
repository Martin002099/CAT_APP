import React from 'react';
import '../../index.css';

export interface CardProps {
  theme?: 'Light' | 'Dark' | 'Brand';
  type?: 'Feature' | 'Stat' | 'Minimal';
  eyebrow: string;
  title?: string;
  text: string;
  stat?: string;
  ctaLabel?: string;
}

export const Card = ({ theme = 'Light', type = 'Feature', eyebrow, title, text, stat, ctaLabel }: CardProps) => {
  const themeClass = theme.toLowerCase();
  
  return (
    <div className={`card ${themeClass}`}>
      {type === 'Feature' && <div className="card-rule" style={{ background: theme === 'Light' ? 'var(--accent)' : theme === 'Dark' ? 'var(--accent)' : 'rgba(255,255,255,.4)' }}></div>}
      
      <div className="card-body">
        <span className="card-eye">{eyebrow}</span>
        {type === 'Minimal' && <div className="card-div"></div>}
        {type === 'Stat' && stat && <span className="card-stat">{stat}</span>}
        {title && <span className="card-title">{title}</span>}
        <span className="card-text">{text}</span>
        {type === 'Minimal' && <a className="card-lnk">{ctaLabel || 'READ →'}</a>}
      </div>
      
      {type === 'Feature' && <button className="card-cta">{ctaLabel || 'READ MORE'}</button>}
    </div>
  );
};
