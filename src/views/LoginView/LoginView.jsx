import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import s from './LoginView.module.css';

const useStyles = makeStyles(() => ({
  root: {
    width: '30ch',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
}));

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector(authSelectors.getErrorLogin);

  const classes = useStyles();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <p className={s.title}>Sign in to Phonebook</p>
      {error && <p className={s.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <div className={s.textfield}>
          <TextField
            id="email"
            variant="outlined"
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
            className={classes.root}
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            value={password}
            onChange={handleChange}
            className={classes.root}
          />
        </div>
        <Button variant="contained" color="secondary" type="submit">
          Sign in
        </Button>
      </form>
    </div>
  );
}
