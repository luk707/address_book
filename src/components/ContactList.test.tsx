import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ContactList from './ContactList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactList filter={(contacts) => contacts} contacts={[]} onClick={(index) => ()=> {}}/>, div);
});
