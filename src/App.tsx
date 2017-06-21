import * as React from 'react';
import './App.css';

import View from './components/View';
import Master from './components/Master';
import Detail from './components/Detail';
import Button from './components/Button';
import Toolbar from './components/Toolbar';
import Content from './components/Content';
import ContactList from './components/ContactList';

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <View>
        <Master focus={true}>
          <Toolbar title="Contacts" action={{ icon: "add" }}/>
          <Content>
            <ContactList 
            filter={contacts => contacts.sort(
              (a, b) =>
                a.name.family < b.name.family ? -1 :
                a.name.family > b.name.family ? 1 :
                0
            )}
            contacts={[
              {
                email: "joe@test.com",
                name: {
                  given: "Joe",
                  family: "Blogs"
                },
                phone: "+447123456789",
                address: {
                  postcode: "ABC 123",
                  line1: "1 Test Way",
                  city: "Test City",
                  county: "Test County",
                  country: "Test Country"
                }
              },
              {
                email: "jane@test.com",
                name: {
                  given: "Jane",
                  family: "Doe"
                },
                phone: "+447123456789",
                address: {
                  postcode: "ABC 123",
                  line1: "1 Test Way",
                  city: "Test City",
                  county: "Test County",
                  country: "Test Country"
                }
              },
              {
                email: "bob@test.com",
                name: {
                  given: "Bob",
                  family: "Blogs"
                },
                phone: "+447123456789",
                address: {
                  postcode: "ABC 123",
                  line1: "1 Test Way",
                  city: "Test City",
                  county: "Test County",
                  country: "Test Country"
                }
              }
            ]}/>
          </Content>
        </Master>
        <Detail>
          <Toolbar title="Test" back={{icon: "chevron_left", label:"Contacts"}}/>
          <Content>
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
          </Content>
        </Detail>
      </View>
    );
  }
}

export default App;
