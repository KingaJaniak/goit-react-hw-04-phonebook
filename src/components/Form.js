import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { FormWrapper, TitleH1 } from './Form.styled';

const Form = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleSearch = (filterValue) => {
    setFilter(filterValue);
  };

  const handleDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <FormWrapper>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm onSubmit={handleAddContact} />
      <Filter value={filter} onChange={handleSearch} />
      <ContactList contacts={contacts} filter={filter} onDelete={handleDeleteContact} />
    </FormWrapper>
  );
};

export default Form;
