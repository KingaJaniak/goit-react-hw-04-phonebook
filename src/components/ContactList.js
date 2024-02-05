import React, { useState, useEffect} from 'react';
import { List, DeleteBtn, Title } from './Form.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, onDelete }) => {
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [contacts, filter]);

  const handleDeleteContact = contactId => {
    onDelete(contactId);

    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <>
      <Title>Contacts</Title>
      <List>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <DeleteBtn onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </DeleteBtn>
          </li>
        ))}
      </List>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
