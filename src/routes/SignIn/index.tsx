import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { SignInData } from '@/types/authentication';
import Routes from '@/types/routes';
import { TextInput } from '@/components/Form';
import { Button } from '@/components/Button';

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
  const { Firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
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
        navigate(Routes.HOME, { replace: true});
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
      <TextInput
        id="email"
        type="email"
        placeholder="Your login email"
        value={email}
        onChange={(event: React.SyntheticEvent<HTMLInputElement>) => onInputChange(event)}
      />
      <TextInput
        id="password"
        type="password"
        placeholder="Your login password"
        value={password}
        onChange={(event: React.SyntheticEvent<HTMLInputElement>) => onInputChange(event)}
      />
      <Button variant="constructive">Login</Button>
      {error && <div>{error.message}</div>}
    </StyledForm>
  );
};

export default SignInPage;
