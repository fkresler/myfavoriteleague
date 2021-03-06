import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { IconContext } from 'react-icons';

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
  isIcon?: boolean;
  isFullWidth?: boolean;
}>`
  display: block;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};
  margin: 0 auto;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.base.default};
  color: ${({ theme }) => theme.colors.base.text};
  border: none;
  outline: none;

  ${({ isIcon }) =>
    isIcon &&
    `
      position: relative;
      width: 3rem;
      height: 3rem;
      border-radius: 100%;

      & > * {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
      }
  `}
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
  background-color: ${({ theme }) => theme.colors.disabled.default};
  color: ${({ theme }) => theme.colors.disabled.text};
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'base',
  icon,
  isFullWidth = false,
  onClick,
}) => {
  const theme = React.useContext(ThemeContext);
  switch (variant) {
    case 'brand':
      return (
        <IconContext.Provider value={{ color: theme.colors.brand.text }}>
          <BrandButton isFullWidth={isFullWidth} isIcon={!!icon} onClick={onClick}>
            {icon || children}
          </BrandButton>
        </IconContext.Provider>
      );
    case 'constructive':
      return (
        <IconContext.Provider value={{ color: theme.colors.success.text }}>
          <ConstructiveButton isFullWidth={isFullWidth} isIcon={!!icon} onClick={onClick}>
            {icon || children}
          </ConstructiveButton>
        </IconContext.Provider>
      );
    case 'warning':
      return (
        <IconContext.Provider value={{ color: theme.colors.warning.text }}>
          <WarningButton isFullWidth={isFullWidth} isIcon={!!icon} onClick={onClick}>
            {icon || children}
          </WarningButton>
        </IconContext.Provider>
      );
    case 'destructive':
      return (
        <IconContext.Provider value={{ color: theme.colors.error.text }}>
          <DestructiveButton isFullWidth={isFullWidth} isIcon={!!icon} onClick={onClick}>
            {icon || children}
          </DestructiveButton>
        </IconContext.Provider>
      );
    case 'disabled':
      return (
        <IconContext.Provider value={{ color: theme.colors.disabled.text }}>
          <DisabledButton isFullWidth={isFullWidth} isIcon={!!icon}>
            {icon || children}
          </DisabledButton>
        </IconContext.Provider>
      );
    default:
      return (
        <IconContext.Provider value={{ color: theme.colors.base.text }}>
          <BaseButton isFullWidth={isFullWidth} isIcon={!!icon} onClick={onClick}>
            {icon || children}
          </BaseButton>
        </IconContext.Provider>
      );
  }
};

export default Button;
