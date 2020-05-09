import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { SignInData } from '@/types/authentication';
import Routes from '@/types/routes';
import { Input, Button } from 'react-rainbow-components';

const initialSignInData = {
  email: '',
  password: '',
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 1rem;
  }
`;

const SignInPage: React.FC = () => {
  const Firebase = useContext(FirebaseContext);
  const history = useHistory();
  const [signInData, setSignInData] = useState<SignInData>(initialSignInData);
  const { email, password, error } = signInData;
  const onInputChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    const eventTarget = event.target as HTMLInputElement;
    setSignInData({
      ...signInData,
      [eventTarget.name]: eventTarget.value,
    });
  };
  const onSignInSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    Firebase.doSigninWithEmailAndPassword(email, password)
      .then(() => {
        setSignInData(initialSignInData);
        history.push(Routes.HOME);
      })
      .catch((signInError) => {
        setSignInData({
          ...signInData,
          error: signInError,
        });
      });
  };
  return (
    <StyledForm onSubmit={(event) => onSignInSubmit(event)}>
      <Input
        name="email"
        type="email"
        placeholder="Your login email"
        value={email}
        onChange={(event: React.SyntheticEvent<HTMLInputElement>) => onInputChange(event)}
      />
      <Input
        name="password"
        type="password"
        placeholder="Your login password"
        value={password}
        onChange={(event: React.SyntheticEvent<HTMLInputElement>) => onInputChange(event)}
      />
      <Button type="submit" variant="success">
        Login
      </Button>
      {error && <div>{error.message}</div>}
    </StyledForm>
  );
};

export default SignInPage;
