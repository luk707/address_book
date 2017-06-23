import * as React from 'react';
import './Detail.css';

/**
 * Detail component subview.
 */
class Detail extends React.Component<{}, null> {
  render() {
    return (
      <div className="detail">
        {this.props.children}
      </div>
    );
  }
}

export default Detail;
