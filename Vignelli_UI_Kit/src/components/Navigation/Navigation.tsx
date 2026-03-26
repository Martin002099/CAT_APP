import React from 'react';
import '../../index.css';

export interface NavigationProps {
  theme?: 'Light' | 'Dark';
  brandName?: string;
  links?: { label: string; active?: boolean }[];
  ctaLabel?: string;
}

export const Navigation = ({ theme = 'Dark', brandName = 'BRAND', links = [{label:'Work'}, {label:'About'}, {label:'System', active:true}, {label:'Contact'}], ctaLabel = 'GET IN TOUCH' }: NavigationProps) => {
  return (
    <nav className={`nav ${theme.toLowerCase()}`}>
      <div className="nav-brand">
        <div className="nav-acc"></div>
        <span className="nav-bname">{brandName}</span>
      </div>
      <div className="nav-links">
        {links.map((link, idx) => (
          <span key={idx} className={`nav-link-item ${link.active ? 'active' : ''}`}>{link.label}</span>
        ))}
      </div>
      <button className="nav-cta">{ctaLabel}</button>
    </nav>
  );
};
