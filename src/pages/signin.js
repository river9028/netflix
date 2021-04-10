import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const histotry = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddres, setEmailAddres] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // cheeck form input elements are valid
  // email & password
  const isInvalid = password === '' || emailAddres === '';
  const handleSignIn = (event) => {
    event.preventDefault();

    // firebase work here!
    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddres, password)
      .then(() => {
        // push to the browse page
        histotry.push(ROUTES.BROWSE);
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
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
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
            <Form.Submit
              data-testid="sign-in"
              disabled={isInvalid}
              type="submit"
            >
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign In Now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
