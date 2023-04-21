import React from 'react';

const Filter = ({
  UpHandleFilterChange,
  UphandleDelete,
  UpfilteredContacts,
  Upfilter,
}) => (
  <div>
    <h2>Contacts</h2>
    <label>
      Find contacts by name
      <input type="text" value={Upfilter} onChange={UpHandleFilterChange} />
    </label>
    <ul>
      {UpfilteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => UphandleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Filter;
