import * as React from 'react';
import './Master.css';

export interface MasterProps {
    focus: boolean;
}

/**
 * Master component subview.
 */
class Master extends React.Component<MasterProps, null> {
  render() {
    return (
      <div className={[
          "master",
          this.props.focus ? "focus" : undefined
      ].join(" ")}>
        {this.props.children}
      </div>
    );
  }
}

export default Master;
