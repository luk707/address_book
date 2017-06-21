import * as React from 'react';
import './Content.css';

/**
 * Content view.
 */
class Content extends React.Component<{}, null> {
  render() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }
}

export default Content;
