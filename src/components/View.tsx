import * as React from 'react';
import './View.css';

/**
 * View component creates full page view for subview components.
 */
class View extends React.Component<{}, null> {
  render() {
    return (
      <div className="view">
        {this.props.children}
      </div>
    );
  }
}

export default View;
