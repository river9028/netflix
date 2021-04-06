import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const histotry = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddres, setEmailAddres] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddres === '';

  const handleSignUp = (event) => {
    event.preventDefault();

    // do firebase stuff
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddres, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            histotry.push(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setEmailAddres('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email addres"
              value={emailAddres}
              onChange={({ target }) => setEmailAddres(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Text>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
