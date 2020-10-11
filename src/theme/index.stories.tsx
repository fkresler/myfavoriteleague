import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

const ThemeListing = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ThemeColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1rem;
`;

const ThemeColorBlock = styled.div<{ colorName: keyof DefaultTheme['colors'] }>`
  display: block;
  min-width: 3rem;
  min-height: 3rem;
  padding: 0.5rem;
  background-color: ${({ theme, colorName }) => theme.colors[colorName].default};
  color: ${({ theme, colorName }) => theme.colors[colorName].text};
  border: ${({ theme }) => `1px solid ${theme.colors.greyNormal.default}`};
`;

const ColorGroupExample: React.FC<{ colorName: keyof DefaultTheme['colors'] }> = ({
  colorName,
}) => (
  <ThemeColorWrapper>
    <ThemeColorBlock colorName={colorName}>Text</ThemeColorBlock>
    <div>{colorName}</div>
  </ThemeColorWrapper>
);

export default {
  title: 'Basics',
};

export const Colors = () => (
  <ThemeListing>
    <ColorGroupExample colorName="brand" />
    <ColorGroupExample colorName="base" />
    <ColorGroupExample colorName="primary" />
    <ColorGroupExample colorName="highlight" />
    <ColorGroupExample colorName="disabled" />
    <ColorGroupExample colorName="greyNormal" />
    <ColorGroupExample colorName="greyLight" />
    <ColorGroupExample colorName="greyDark" />
    <ColorGroupExample colorName="success" />
    <ColorGroupExample colorName="error" />
    <ColorGroupExample colorName="warning" />
  </ThemeListing>
);
