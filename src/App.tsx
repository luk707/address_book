import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Router, Route } from 'react-router';
import './App.css';
import View, {SubView, Page} from './components/View';
import Master from './components/Master';
import Detail from './components/Detail';
import Toolbar from './components/Toolbar';
import Content from './components/Content';
import ContactList from './components/ContactList';
import ContactView from './views/ContactView';
import { State } from './store';
import { History } from 'history';
import { push, replace } from 'react-router-redux';
import AddContactForm from './forms/AddContact';

// Returns true if the device is mobile.
let isMobile = (): boolean => window.innerWidth < 640;

// The Main view is seperated as it needs to be rendered on the '/' and '/:contactId' route.
let MainView = connect<{state: State}, {}, {selectedContact: number}>(state => ({state}))((props) => {
    // Get the selected contact payload from the store.
    let selected = props.state.contacts.contacts === undefined ? null: props.state.contacts.contacts.filter(contact => contact.index == props.selectedContact)[0] || null;
    // Return the JSX element
    return <SubView>
      <Master focus={props.selectedContact < 0}>
        <Toolbar title="Contacts" action={{ icon: 'add', onClick: () => { props.dispatch(push('/add')) } }}/>
        <Content>
          {props.state.contacts == null ? null :
          <ContactList 
            filter={contacts => contacts === undefined ? contacts : contacts.sort(
              // Sort the contact alphabetically by family name
              (a, b) =>
                a.name.family < b.name.family ? -1 :
                a.name.family > b.name.family ? 1 : 0) }
            contacts={props.state.contacts.contacts}
            onClick={(index) => () => {
              // The befaviour for altering the browser history should be different for
              // devices that see the master and detail view side by side.
              if (isMobile) {
                props.dispatch(replace(`/`));
                props.dispatch(push(`/${index}`))
              } else {
                props.dispatch(replace(`/${index}`))
              }
            }}
          />}
        </Content>
      </Master>
      <Detail>
        {
          // Show the correct contact view or an empty view if no contact has been selected.
          props.selectedContact >= 0 && selected ?
          <ContactView
            contact={selected}
            onBack={() => {props.dispatch(push(`/`))}}
          />
          : <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            backgroundColor: '#222'
          }}>
            <i className="material-icons" style={{
              color: '#111',
              fontSize: 360
            }}>person</i>
          </div>
        }
        
      </Detail>
    </SubView>;
});

// Create an element to wrap around th main view and inject the selected contct from the routing paramaters.
let MainViewContainer = (props: any) => { console.log(props); return <MainView selectedContact={props.match.params.contact ? parseInt(props.match.params.contact) : -1}/> }

// Export the application
export default connect<{state: State}, {}, {history: History}>(state => ({state}))((props) =>
  <Router history={props.history}>
    <View>
      <Switch>
        <Route path="/add">
          <Page>
            <Toolbar title="Add Contact" back={{icon:'chevron_left',label:'Contacts',onClick:()=>{ props.dispatch(push('/')) }}}/>
            <Content>
              <AddContactForm onNewContact={(contact) => {
                props.dispatch({type:'ADD_CONTACT', payload:contact});
                props.dispatch(push('/'));
              }}/>
            </Content>
          </Page>
        </Route>
        <Route path="/:contact" component={MainViewContainer}/>
        <Route path="/" component={MainViewContainer}/>
      </Switch>
    </View>
  </Router>
);
