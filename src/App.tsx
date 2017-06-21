import * as React from 'react';
import './App.css';

import View from './components/View';
import Master from './components/Master';
import Detail from './components/Detail';
import Button from './components/Button';
import Toolbar from './components/Toolbar';

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <View>
        <Master focus={false}>
          <Toolbar title="Contacts" action={{ icon: "add" }}/>
        </Master>
        <Detail>
          <Toolbar title="Test" back={{icon: "chevron_left", label:"Contacts"}}/>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          <div>
            <Button style="default">Test</Button>
            <Button style="primary">Learn More</Button>
            <Button style="danger">Delete</Button>
          </div>
        </Detail>
      </View>
    );
  }
}

export default App;
