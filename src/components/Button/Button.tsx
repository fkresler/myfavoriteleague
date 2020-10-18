import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  /** Variation of the button */
  variant: 'default' | 'brand' | 'success' | 'warning' | 'error' | 'disabled';
  /** Indicates whether the button is rounded or not */
  isRounded?: boolean;
  /** Indicates whether the button is full widht or not */
  isFullWidth?: boolean;
  /** Function that is called when clicking on the button */
  onClick?: () => void;
}

const BaseButton = styled.button<{
  isFullWidth?: boolean;
  isRounded?: boolean;
}>`
  display: block;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};
  padding: 0.5rem;
  cursor: pointer;
  border-radius: ${({ isRounded }) => (isRounded ? '100%' : '3px')};
  background-color: ${({ theme }) => theme.colors.base.default};
  color: ${({ theme }) => theme.colors.base.text};
  outline: 0;
`;

const BrandButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.brand.default};
  color: ${({ theme }) => theme.colors.brand.text};
`;

const SuccessButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.success.default};
  color: ${({ theme }) => theme.colors.success.text};
`;

const WarningButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.warning.default};
  color: ${({ theme }) => theme.colors.warning.text};
`;

const ErrorButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.error.default};
  color: ${({ theme }) => theme.colors.error.text};
`;

const DisabledButton = styled(BaseButton)`
  cursor: default;
  background-color: ${({ theme }) => theme.colors.greyLight.default};
  color: ${({ theme }) => theme.colors.greyLight.text};
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  isRounded = false,
  isFullWidth = true,
  onClick,
}) => {
  switch (variant) {
    case 'brand':
      return (
        <BrandButton isFullWidth={isFullWidth} isRounded={isRounded} onClick={onClick}>
          {children}
        </BrandButton>
      );
    case 'success':
      return (
        <SuccessButton isFullWidth={isFullWidth} isRounded={isRounded} onClick={onClick}>
          {children}
        </SuccessButton>
      );
    case 'warning':
      return (
        <WarningButton isFullWidth={isFullWidth} isRounded={isRounded} onClick={onClick}>
          {children}
        </WarningButton>
      );
    case 'error':
      return (
        <ErrorButton isFullWidth={isFullWidth} isRounded={isRounded} onClick={onClick}>
          {children}
        </ErrorButton>
      );
    case 'disabled':
      return (
        <DisabledButton isFullWidth={isFullWidth} isRounded={isRounded}>
          {children}
        </DisabledButton>
      );
    default:
      return (
        <BaseButton isFullWidth={isFullWidth} isRounded={isRounded} onClick={onClick}>
          {children}
        </BaseButton>
      );
  }
};

export default Button;
