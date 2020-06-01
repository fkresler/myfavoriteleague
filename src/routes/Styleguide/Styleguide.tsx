import React from 'react';
import styled, { ThemeContext, MyFavoriteLeagueTheme } from 'styled-components';

const DebugColorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
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
      <h2>Main Colors</h2>
      <DebugColorWrapper>
        <ThemeColor text="mainColorLighter" color={theme.colors.mainColorLighter} />
        <ThemeColor text="mainColorLight" color={theme.colors.mainColorLight} />
        <ThemeColor text="mainColorNormal" color={theme.colors.mainColorNormal} />
        <ThemeColor text="mainColorDark" color={theme.colors.mainColorDark} />
        <ThemeColor text="mainColorDarker" color={theme.colors.mainColorDarker} />
      </DebugColorWrapper>
      <h2>Background Colors</h2>
      <DebugColorWrapper>
        <ThemeColor text="lightBgColor" color={theme.colors.lightBackgroundColor} />
        <ThemeColor text="darkBgColor" color={theme.colors.darkBackgroundColor} />
      </DebugColorWrapper>
      <h2>Font Colors</h2>
      <DebugColorWrapper>
        <ThemeColor text="fontColorLight" color={theme.colors.fontColorLight} />
        <ThemeColor text="fontColorDark" color={theme.colors.fontColorDark} />
      </DebugColorWrapper>
      <h2>Feedback Colors</h2>
      <DebugColorWrapper>
        <ThemeColor text="colorPositive" color={theme.colors.colorPositive} />
        <ThemeColor text="colorNegative" color={theme.colors.colorNegative} />
        <ThemeColor text="colorWarning" color={theme.colors.colorWarning} />
      </DebugColorWrapper>
    </>
  );
};

export default Styleguide;
