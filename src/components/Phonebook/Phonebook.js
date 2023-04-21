import React from 'react';

const Phonebook = ({ upHandleSubmit, uphandleChange, upName, upNumber }) => (
  <div>
    <h1>Phonebook</h1>
    <form onSubmit={upHandleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={upName}
          onChange={uphandleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={upNumber}
          onChange={uphandleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  </div>
);
export default Phonebook;
