import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Content from './Content';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Content/>, div);
});
