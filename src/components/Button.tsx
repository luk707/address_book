import * as React from 'react';
import './Button.css';

export type ButtonStyle = 'default' | 'primary' | 'danger';

export interface ButtonProps {
    style: ButtonStyle;
}

/**
 * Button component.
 */
class Button extends React.Component<ButtonProps, null> {
  render() {
    return (
      <button
        className={[
            'btn',
            `btn-${this.props.style}`
        ].join(' ')}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
