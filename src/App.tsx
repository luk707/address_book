import * as React from 'react';
import './App.css';

import View from './components/View';
import Master from './components/Master';
import Detail from './components/Detail';

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <View>
        <Master focus={false}>
          <h2>Master View</h2>
        </Master>
        <Detail>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </Detail>
      </View>
    );
  }
}

export default App;
