import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactLIst';
import Filter from 'components/Filter';
import { Container, Title } from './App.styled';
import { Box } from 'components/Box/Box';
import { ContactsContext } from 'components/ContextProvider';

const SAVE_CONTACTS_KEY = 'contacts';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const savedContacts = JSON.parse(
  window.localStorage.getItem(SAVE_CONTACTS_KEY)
);

const App = () => {
  const [contacts, setContacts] = useState(savedContacts ?? initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(SAVE_CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const contactNames = contacts.map(contact => contact.name);

    if (contactNames.includes(newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      setContacts(state => [newContact, ...state]);
    }
  };

  const deleteContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  const handleFilterInput = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContacts = () => {
    if (contacts.length !== 0) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return [];
  };

  const filteredContacts = filterContacts();

  return (
    <ContactsContext.Provider
      value={{ contacts: filteredContacts, onDelete: deleteContact }}
    >
      <Box display="flex" justifyContent="center">
        <Container>
          <Title>Phonebook</Title>
          <ContactForm addContact={addContact} />

          <Title>Contacts</Title>
          <Filter value={filter} onChange={handleFilterInput} />
          <ContactList />
        </Container>
      </Box>
    </ContactsContext.Provider>
  );
};

export default App;
