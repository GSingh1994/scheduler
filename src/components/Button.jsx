import React from 'react';
import classNames from 'classnames';

import 'components/Button.scss';

export default function Button({ onClick, confirm, danger, disabled, children }) {
  let buttonClass = classNames('button', { 'button--confirm': confirm }, { 'button--danger': danger });

  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {children}
    </button>
  );
}
