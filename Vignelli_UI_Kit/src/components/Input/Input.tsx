import React from 'react';
import '../../index.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  inputType?: 'Text' | 'Search' | 'Password';
  state?: 'Default' | 'Focused' | 'Error' | 'Disabled' | 'Filled';
  errorMessage?: string;
}

export const Input = ({ label, inputType = 'Text', state = 'Default', errorMessage, ...props }: InputProps) => {
  const isErr = state === 'Error';
  const isFoc = state === 'Focused';
  const isDis = state === 'Disabled';
  const isFill = state === 'Filled';
  
  let fieldClass = 'inp-field';
  if (isFoc) fieldClass += ' foc';
  if (isErr) fieldClass += ' err';
  if (isDis) fieldClass += ' dis';
  if (isFill) fieldClass += ' fill';
  
  const domType = inputType === 'Password' ? 'password' : 'text';
  
  return (
    <div className="inp-wrap">
      {label && <span className={`inp-lbl ${isFoc ? 'foc' : ''}`} style={isErr ? {color: 'var(--error)'} : {}}>{label}</span>}
      <div className={fieldClass}>
        <input type={domType} disabled={isDis} {...props} />
        {inputType === 'Search' && <div className="inp-icon" />}
        {inputType === 'Password' && <div className="inp-icon eye" />}
      </div>
      {isErr && errorMessage && <span className="inp-err">{errorMessage}</span>}
    </div>
  );
};
