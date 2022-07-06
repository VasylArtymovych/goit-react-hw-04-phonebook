import {Item, Button} from './ContactListItem.styled';
import PropTypes from 'prop-types';

const ContactListItem = ({contacts, onDelete}) => (contacts.map(({id, name, number}) => (
    <Item key={id}>
        {name}: {number}
        <Button 
            onClick={()=>{
                onDelete(id);
            }}
        >
            Delete
        </Button>
    </Item>
)))

ContactListItem.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}


export default ContactListItem;

