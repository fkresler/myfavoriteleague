import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { Input, Button } from 'react-rainbow-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 1rem;
  }
`;

const ResetPasswordPage: React.FC = () => {
  const { Firebase } = useContext(FirebaseContext);
  const [passwordResetEmail, setPasswordResetEmail] = useState<string>('');
  const [passwordResetError, setPasswordResetError] = useState<string | null>(null);

  const isDataValid = !!passwordResetEmail;

  const onInputChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    setPasswordResetError(null);
    const eventTarget = event.target as HTMLInputElement;
    setPasswordResetEmail(eventTarget.value);
  };

  const onPasswordResetSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (isDataValid) {
      Firebase.doPasswordReset(passwordResetEmail)
        .then(() => setPasswordResetEmail(''))
        .catch(() => setPasswordResetError('Could not submit your request! Try again sometimes later ...'));
    } else {
      setPasswordResetError('Please enter a valid email address!');
    }
  };

  return (
    <StyledForm onSubmit={(event) => onPasswordResetSubmit(event)}>
      <Input
        name="reset-email"
        type="email"
        placeholder="Your email"
        value={passwordResetEmail}
        onChange={(event) => onInputChange(event)}
      />
      <Button type="submit" variant="success" disabled={!isDataValid}>
        Send me instructions!
      </Button>
      {passwordResetError && <div>{passwordResetError}</div>}
    </StyledForm>
  );
};

export default ResetPasswordPage;
