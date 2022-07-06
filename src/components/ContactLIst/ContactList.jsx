import PropTypes from "prop-types";
import ContactListItem from "components/ContactListItem";
import {List} from './ContactList.styled';

const ContactList = ({contacts, onDelete}) => (
    <List>
        <ContactListItem contacts={contacts} onDelete={onDelete}/>
    </List>
)

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ContactList;

