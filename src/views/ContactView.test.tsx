import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ContactView from './ContactView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactView contact={{
    index: 0,
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
  }}
  onBack={() => {}}/>, div);
});
