import { Item, Button } from './ContactListItem.styled';
import { useContacts } from 'components/ContextProvider';

const ContactListItem = () => {
  const { contacts, onDelete } = useContacts();
  return contacts.map(({ id, name, number }) => (
    <Item key={id}>
      {name}: {number}
      <Button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </Button>
    </Item>
  ));
};

export default ContactListItem;
