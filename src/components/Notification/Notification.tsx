import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

export interface INotification {
  variant?: 'success' | 'warning' | 'error' | 'default';
}

const BaseNotification = styled.div`
  display: block;
  padding: 0.75rem;
  border: ${({ theme }) => `2px solid ${darken(0.2, theme.colors.primary.default)}`};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.primary.text};
`;

const SuccessNotification = styled(BaseNotification)`
  border-color: ${({ theme }) => darken(0.2, theme.colors.success.default)};
  background-color: ${({ theme }) => theme.colors.success.default};
  color: ${({ theme }) => theme.colors.success.text};
`;

const WarningNotification = styled(BaseNotification)`
  border-color: ${({ theme }) => darken(0.2, theme.colors.warning.default)};
  background-color: ${({ theme }) => theme.colors.warning.default};
  color: ${({ theme }) => theme.colors.warning.text};
`;

const ErrorNotification = styled(BaseNotification)`
  border-color: ${({ theme }) => darken(0.2, theme.colors.error.default)};
  background-color: ${({ theme }) => theme.colors.error.default};
  color: ${({ theme }) => theme.colors.error.text};
`;

export const Notification: React.FC<INotification> = ({ children, variant }) => {
  switch (variant) {
    case 'success': {
      return <SuccessNotification>{children}</SuccessNotification>;
    }
    case 'warning': {
      return <WarningNotification>{children}</WarningNotification>;
    }
    case 'error': {
      return <ErrorNotification>{children}</ErrorNotification>;
    }
    default:
      return <BaseNotification>{children}</BaseNotification>;
  }
};

export default Notification;
