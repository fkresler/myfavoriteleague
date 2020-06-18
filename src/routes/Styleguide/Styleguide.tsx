import React from 'react';
import styled, { ThemeContext, MyFavoriteLeagueTheme } from 'styled-components';

const DebugColorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  & > * {
    margin-left: 1rem;
    margin-right: 1rem;
    min-width: 10rem;
  }
`;

const StyledThemeColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledThemeColorBlock = styled.div<{ bgColor: string }>`
  display: block;
  width: 3rem;
  height: 3rem;
  background-color: ${({ bgColor }) => bgColor};
`;

const ThemeColor: React.FC<{ text: string; color: string }> = ({ text, color }) => {
  return (
    <StyledThemeColorWrapper>
      <StyledThemeColorBlock bgColor={color} />
      <div>{text}</div>
    </StyledThemeColorWrapper>
  );
};

const Styleguide: React.FC = () => {
  const theme: MyFavoriteLeagueTheme = React.useContext(ThemeContext);
  return (
    <>
      <h2>Brand Colors</h2>
      <DebugColorWrapper>
        <ThemeColor text="Main" color={theme.colors.brand.main} />
        <ThemeColor text="Dark" color={theme.colors.brand.dark} />
        <ThemeColor text="Light" color={theme.colors.brand.light} />
      </DebugColorWrapper>
      <h2>Background Colors</h2>
      <DebugColorWrapper>
        <ThemeColor text="Main" color={theme.colors.background.main} />
        <ThemeColor text="Secondary" color={theme.colors.background.secondary} />
        <ThemeColor text="Highlight" color={theme.colors.background.highlight} />
        <ThemeColor text="Disabled" color={theme.colors.background.disabled} />
      </DebugColorWrapper>
      <h2>Text Colors</h2>
      <DebugColorWrapper>
        <ThemeColor text="Light" color={theme.colors.text.light} />
        <ThemeColor text="Dark" color={theme.colors.text.dark} />
      </DebugColorWrapper>
      <h2>Action Colors</h2>
      <DebugColorWrapper>
        <ThemeColor text="Main" color={theme.colors.action.main} />
        <ThemeColor text="Active" color={theme.colors.action.active} />
        <ThemeColor text="Hover" color={theme.colors.action.hover} />
        <ThemeColor text="Disabled" color={theme.colors.action.disabled} />
      </DebugColorWrapper>
      <h2>Border Colors</h2>
      <DebugColorWrapper>
        <ThemeColor text="Main" color={theme.colors.border.main} />
        <ThemeColor text="Divider" color={theme.colors.border.divider} />
        <ThemeColor text="Disabled" color={theme.colors.border.disabled} />
      </DebugColorWrapper>
      <h2>Feedback Colors</h2>
      <DebugColorWrapper>
        <ThemeColor text="colorPositive" color={theme.colors.success.main} />
        <ThemeColor text="colorNegative" color={theme.colors.error.main} />
        <ThemeColor text="colorWarning" color={theme.colors.warning.main} />
      </DebugColorWrapper>
    </>
  );
};

export default Styleguide;
