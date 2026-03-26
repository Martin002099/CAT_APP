import React from 'react';
import '../../index.css';

export interface AlertProps {
  variant?: 'Notice' | 'Error' | 'Success' | 'Info';
  message: string;
  isDismissed?: boolean;
  onDismiss?: () => void;
}

export const Alert = ({ variant = 'Notice', message, isDismissed = false, onDismiss }: AlertProps) => {
  if (isDismissed) {
    return (
      <div className={`alt alt-${variant.toLowerCase()} dis`}>
        <div className="alt-bar"></div>
        <div className="alt-body">
          <div className="alt-title">{variant}</div>
          <div className="alt-msg">(dismissed)</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`alt alt-${variant.toLowerCase()}`}>
      <div className="alt-bar"></div>
      <div className="alt-body">
        <div className="alt-title">{variant}</div>
        <div className="alt-msg">{message}</div>
      </div>
      {onDismiss && <div className="alt-x" onClick={onDismiss}>✕</div>}
    </div>
  );
};
