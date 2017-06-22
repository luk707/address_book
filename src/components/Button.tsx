import * as React from 'react';
import './Button.css';

export type ButtonStyle = 'default' | 'primary' | 'danger';

export interface ButtonProps {
    style: ButtonStyle;
    onClick: () => void;
}

/**
 * Button component.
 */
class Button extends React.Component<ButtonProps, null> {
  render() {
    return (
      <button
        style={{
          display: 'table-row',
          width: '100%'
        }}
        className={[
            'btn',
            `btn-${this.props.style}`
        ].join(' ')}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
