import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Routes from '@/types/routes';
import { SignUpData } from '@/types/authentication';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import InputField from '@/components/InputField';

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
  const Firebase = useContext(FirebaseContext);
  const history = useHistory();
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
        history.push(Routes.HOME);
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
      <InputField
        name="email"
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(event) => onInputChange(event)}
      />
      <InputField
        name="password"
        type="password"
        placeholder="Your password"
        value={password}
        onChange={(event) => onInputChange(event)}
      />
      <InputField
        name="passwordRepeat"
        type="password"
        placeholder="Your password (again)"
        value={passwordRepeat}
        onChange={(event) => onInputChange(event)}
      />
      <button type="submit" disabled={!isDataValid}>
        Register Now!
      </button>
      {error && <div>{error.message}</div>}
    </StyledForm>
  );
};

export default SignUpPage;
