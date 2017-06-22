import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';

import View from './components/View';
import Master from './components/Master';
import Detail from './components/Detail';
import Toolbar from './components/Toolbar';
import Content from './components/Content';
import ContactList from './components/ContactList';

import ContactView from './views/ContactView';

import { State } from './store';

export default connect<{state: State}, {}, {}>(state => ({state}))((props) =>
  <View>
    <Master focus={false}>
      <Toolbar title="Contacts" action={{ icon: 'add', onClick: () => { props.dispatch({ type: 'ADD_CONTACT', payload: {
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
        } }) } }}/>
      <Content>
        <ContactList 
          filter={contacts => contacts.sort(
            (a, b) =>
              a.name.family < b.name.family ? -1 :
              a.name.family > b.name.family ? 1 :
              0
          )}
          contacts={props.state.contacts}
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
