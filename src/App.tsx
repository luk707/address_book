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

let isMobile = (): void => { window.innerWidth < 640 };

let MainView = connect<{state: State}, {}, {selectedContact: number}>(state => ({state}))((props) =>
    <SubView>
      <Master focus={props.selectedContact < 0}>
        <Toolbar title="Contacts" action={{ icon: 'add', onClick: () => { props.dispatch(push('/add')) } }}/>
        <Content>
          <ContactList 
            filter={contacts => contacts.sort(
              (a, b) =>
                a.name.family < b.name.family ? -1 :
                a.name.family > b.name.family ? 1 : 0) }
            contacts={props.state.contacts.contacts}
            onClick={(index) => () => {
              if (isMobile) {
                props.dispatch(replace(`/`));
                props.dispatch(push(`/${index}`))
              } else {
                props.dispatch(replace(`/${index}`))
              }
            }}
          />
        </Content>
      </Master>
      <Detail>
        {
          props.selectedContact >= 0 ?
          <ContactView
            contact={props.state.contacts.contacts.filter(contact => contact.index == props.selectedContact)[0]}
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
    </SubView>
);

let MainViewContainer = (props: any) => { console.log(props); return <MainView selectedContact={props.match.params.contact ? parseInt(props.match.params.contact) : -1}/> }

export default connect<{state: State}, {}, {history: History}>(state => ({state}))((props) =>
  <Router history={props.history}>
    <View>
      <Switch>
        <Route path="/add">
          <Page>
            <Toolbar title="Add Contact" back={{icon:'chevron_left',label:'Contacts',onClick:()=>{ props.dispatch(push('/')) }}}/>
            <Content>
              <AddContactForm onNewContact={(contact) => {
                console.log(contact)
                props.dispatch({type:'ADD_CONTACT', payload:contact})
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
