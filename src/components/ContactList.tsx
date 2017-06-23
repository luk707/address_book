import * as React from 'react';
import * as Gravatar from 'gravatar';
import './ContactList.css';

import { Contact } from '../models/Contact';

export interface ContactListProps {
  contacts: Contact[];
  filter: (contacts: Contact[]) => Contact[];
  onClick: (index: number) => () => void;
}

/**
 * Toolbar component.
 */
class ContactList extends React.Component<ContactListProps, null> {
  render() {
    return (
      <div className="contact-list">
        {this.props.filter(this.props.contacts).map(contact =>
          <div className="item" onClick={this.props.onClick(contact.index)}>
            <img
              src={Gravatar.url(contact.email, {
                // Using window.devicePixelRatio ensures the image is sized correctly on mobile devices.
                s: Math.round(40 * window.devicePixelRatio).toString(),
                r: 'pg',
                d: 'retro'
              })}
              alt={contact.name.given}
            />
            <div className="text">
              <span><b>{contact.name.family}</b>&nbsp;{contact.name.given}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ContactList;
