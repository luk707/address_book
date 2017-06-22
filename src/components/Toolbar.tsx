import * as React from 'react';
import './Toolbar.css';

export interface ToolbarProps {
    title: string;
    action?: {
        icon: string;
        onClick: () => void;
    };
    back?: {
        icon: string;
        label: string;
        onClick: () => void;
    };
}

/**
 * Toolbar component.
 */
class Toolbar extends React.Component<ToolbarProps, null> {
  render() {
    return (
      <div className="toolbar">
        <div className="title">
          <span>{this.props.title}</span>
        </div>
        {this.props.back ?
          <button className="back" onClick={this.props.back.onClick}>
            <i className="material-icons">{this.props.back.icon}</i>
            <span>{this.props.back.label}</span>
          </button> :
        null}
        {this.props.action ?
          <button className="action" onClick={this.props.action.onClick}>
            <i className="material-icons">{this.props.action.icon}</i>
          </button> :
        null}
      </div>
    );
  }
}

export default Toolbar;
