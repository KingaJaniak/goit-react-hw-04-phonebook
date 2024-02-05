import React from 'react';
import { List, DeleteBtn, Title } from './Form.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDeleteContact = contactId => {
    onDelete(contactId);

    //delete contact from localStorage
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };
  return (
    <>
      <Title>Contacts</Title>
      <List>
        {filteredContacts?.map(contact => (
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
