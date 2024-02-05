import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Btn, Title, FormStyle } from './Form.styled.js';
import PropTypes from "prop-types";


const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = formData;
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and phone number.');
      return;
    }

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    onSubmit(newContact);
    setFormData({ name: '', number: '' }); // Wyczyść formularz po dodaniu kontaktu
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Title>Name</Title>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
        value={formData.name}
        onChange={handleChange}
      />
      <Title>Phone Number</Title>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={formData.number}
        onChange={handleChange}
      />
      <Btn type="submit">Add contact</Btn>
    </FormStyle>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
