import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Routes from '@/types/routes';
import { SignUpData } from '@/types/authentication';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { Button } from '@/components/Button';
import { TextInput } from '@/components/Form';

const initialSignUpState: SignUpData = {
  email: '',
  password: '',
  passwordRepeat: '',
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 1rem;
  }
`;

const SignUpPage: React.FC = () => {
  const { Firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState<SignUpData>(initialSignUpState);
  const { email, password, passwordRepeat, error } = signUpData;
  const isDataValid: boolean =
    !!email && !!password && !!passwordRepeat && password === passwordRepeat;
  const onInputChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    const eventTarget = event.target as HTMLInputElement;
    setSignUpData({
      ...signUpData,
      [eventTarget.name]: eventTarget.value,
    });
  };
  const onSignUpSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    Firebase.doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        Firebase.doSigninWithEmailAndPassword(email, password);
      })
      .then(() => {
        setSignUpData(initialSignUpState);
        navigate(Routes.HOME, { replace: true });
      })
      .catch((signUpError) => {
        setSignUpData({
          ...signUpData,
          error: signUpError,
        });
      });
  };
  return (
    <StyledForm onSubmit={(event) => onSignUpSubmit(event)}>
      <TextInput
        id="email"
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(event) => onInputChange(event)}
      />
      <TextInput
        id="password"
        type="password"
        placeholder="Your password"
        value={password}
        onChange={(event) => onInputChange(event)}
      />
      <TextInput
        id="passwordRepeat"
        type="password"
        placeholder="Your password (again)"
        value={passwordRepeat}
        onChange={(event) => onInputChange(event)}
      />
      <Button variant={isDataValid ? 'constructive' : 'disabled'}>Register Now!</Button>
      {error && <div>{error.message}</div>}
    </StyledForm>
  );
};

export default SignUpPage;
