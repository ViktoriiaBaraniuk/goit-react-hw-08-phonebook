import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import IconButton from '../IconButton';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.listItem}>
          <PermIdentitySharpIcon color="primary" />
          <p className={s.itemName}>
            {name}: {number}
          </p>
          <IconButton
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
            aria-label="Delete contact"
          >
            <DeleteForeverSharpIcon color="inherit" fontSize="small" />
          </IconButton>
          {/* <button
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
            className={s.deleteBtn}
          >
            Delete
          </button> */}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
