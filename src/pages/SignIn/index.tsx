import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Routes from '@/types/routes';
import { SignInData } from '@/types/authentication';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import InputField from '@/components/InputField';

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
      <InputField
        name="email"
        type="email"
        placeholder="Your login email"
        value={email}
        onChange={(event) => onInputChange(event)}
      />
      <InputField
        name="password"
        type="password"
        placeholder="Your login password"
        value={password}
        onChange={(event) => onInputChange(event)}
      />
      <button type="submit">Login</button>
      {error && <div>{error.message}</div>}
    </StyledForm>
  );
};

export default SignInPage;
