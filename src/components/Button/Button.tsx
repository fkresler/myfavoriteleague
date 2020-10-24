import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  /** Variation of the button */
  variant?: 'base' | 'brand' | 'constructive' | 'warning' | 'destructive' | 'disabled';
  /** Indicates whether the button is rounded or not */
  icon?: React.ReactNode;
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

const ConstructiveButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.success.default};
  color: ${({ theme }) => theme.colors.success.text};
`;

const WarningButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.warning.default};
  color: ${({ theme }) => theme.colors.warning.text};
`;

const DestructiveButton = styled(BaseButton)`
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
  variant = 'base',
  icon,
  isFullWidth = false,
  onClick,
}) => {
  const isRounded = !!icon;
  switch (variant) {
    case 'brand':
      return (
        <BrandButton isFullWidth={isFullWidth} isRounded={isRounded} onClick={onClick}>
          {icon || children}
        </BrandButton>
      );
    case 'constructive':
      return (
        <ConstructiveButton isFullWidth={isFullWidth} isRounded={isRounded} onClick={onClick}>
          {icon || children}
        </ConstructiveButton>
      );
    case 'warning':
      return (
        <WarningButton isFullWidth={isFullWidth} isRounded={isRounded} onClick={onClick}>
          {icon || children}
        </WarningButton>
      );
    case 'destructive':
      return (
        <DestructiveButton isFullWidth={isFullWidth} isRounded={isRounded} onClick={onClick}>
          {icon || children}
        </DestructiveButton>
      );
    case 'disabled':
      return (
        <DisabledButton isFullWidth={isFullWidth} isRounded={isRounded}>
          {icon || children}
        </DisabledButton>
      );
    default:
      return (
        <BaseButton isFullWidth={isFullWidth} isRounded={isRounded} onClick={onClick}>
          {icon || children}
        </BaseButton>
      );
  }
};

export default Button;
