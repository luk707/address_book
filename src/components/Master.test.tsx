import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Master from './Master';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Master focus={false}/>, div);
});
