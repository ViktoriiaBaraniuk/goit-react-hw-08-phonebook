import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import s from './ContactForm.module.css';

const useStyles = makeStyles(() => ({
  root: {
    width: '30ch',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
}));

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const contactCheck = () => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return true;
    }
    if (name === '' || number === '') {
      alert('Please fill in all the fields');
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contactCheck()) {
      reset();
      return;
    }

    dispatch(contactsOperations.addContact(name, number));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        /* placeholder="Enter your name" */
        value={name}
        onChange={handleChange}
        className={classes.root}
      />

      <TextField
        id="outlined-basic"
        label="Number"
        variant="outlined"
        type="text"
        name="number"
        placeholder="Enter your mobile number"
        value={number}
        onChange={handleChange}
        className={classes.root}
      />
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        className={s.button}
      >
        Add contact
      </Button>
    </form>
  );
}
