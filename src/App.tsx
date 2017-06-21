import * as React from 'react';
import './App.css';

import View from './components/View';
import Master from './components/Master';
import Detail from './components/Detail';
import Toolbar from './components/Toolbar';
import Content from './components/Content';
import ContactList from './components/ContactList';

import ContactView from './views/ContactView';
class App extends React.Component<{}, null> {
  render() {
    return (
      <View>
        <Master focus={false}>
          <Toolbar title="Contacts" action={{ icon: 'add' }}/>
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
                  email: 'joe@test.com',
                  name: {
                    given: 'Joe',
                    family: 'Blogs'
                  },
                  phone: '+447123456789',
                  address: {
                    postcode: 'ABC 123',
                    line1: '1 Test Way',
                    city: 'Test City',
                    county: 'Test County',
                    country: 'Test Country'
                  }
                },
                {
                  email: 'jane@test.com',
                  name: {
                    given: 'Jane',
                    family: 'Doe'
                  },
                  phone: '+447123456789',
                  address: {
                    postcode: 'ABC 123',
                    line1: '1 Test Way',
                    city: 'Test City',
                    county: 'Test County',
                    country: 'Test Country'
                  }
                },
                {
                  email: 'bob@test.com',
                  name: {
                    given: 'Bob',
                    family: 'Blogs'
                  },
                  phone: '+447123456789',
                  address: {
                    postcode: 'ABC 123',
                    line1: '1 Test Way',
                    city: 'Test City',
                    county: 'Test County',
                    country: 'Test Country'
                  }
                }
              ]}
            />
          </Content>
        </Master>
        <Detail>
          <ContactView
            contact={{
              email: 'jane@test.com',
              name: {
                given: 'Jane',
                family: 'Doe'
              },
              phone: '+447123456789',
              address: {
                postcode: 'PE2 8JP',
                line1: '1 Test Way',
                city: 'Test City',
                county: 'Test County',
                country: 'Test Country'
              }
            }}
          />
        </Detail>
      </View>
    );
  }
}

export default App;
