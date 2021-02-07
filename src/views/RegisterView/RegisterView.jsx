import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { authSelectors } from '../../redux/auth';
import s from './RegisterView.module.css';

const useStyles = makeStyles(() => ({
  root: {
    width: '30ch',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
}));

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector(authSelectors.getErrorRegister);

  const classes = useStyles();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <p className={s.title}>Create your account</p>
      {error && <p className={s.star}>{error}</p>}
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <div className={s.textfield}>
          <TextField
            id="name"
            variant="outlined"
            label="Name"
            value={name}
            name="name"
            onChange={handleChange}
            className={classes.root}
          />
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
          Create account
        </Button>
      </form>
    </div>
  );
}
