import React from 'react';
import styled from 'styled-components';

export interface ICard {
  headline?: string;
  subHeadline?: string;
  showHeaderSeparator?: boolean;
  action?: React.ReactNode;
  children?: React.ReactNode;
}

export const CardWrapper = styled.div`
  display: block;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.lightBackgroundColor};
  border: 1px solid ${(props) => props.theme.colors.borderColorDark};
  transition: all 0.3s ease-out;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
`;

export const CardHeadlineWrapper = styled.div`
  flex: 1 1 80%;
`;

export const CardSeperator = styled.div`
  display: block;
  border-top: 1px solid;
  border-color: ${(props) => props.theme.colors.borderColorDark};
`;

export const CardContentWrapper = styled.div`
  display: block;
  padding: 0.5rem;
`;

export const HeadlineElement = styled.div`
  color: ${(props) => props.theme.colors.fontColorDark};
  font-size: 120%;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 1.5px;
`;

export const SubHeadlineElement = styled(HeadlineElement)`
  color: ${(props) => props.theme.colors.fontColorDark};
  font-size: 80%;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 0.3px;
`;

export const DefaultCard: React.FC<ICard> = ({
  headline,
  subHeadline,
  showHeaderSeparator = true,
  action,
  children,
}) => (
  <CardWrapper>
    {(headline || subHeadline || action) && (
      <>
        <CardHeader>
          <CardHeadlineWrapper>
            {headline && <HeadlineElement>{headline}</HeadlineElement>}
            {subHeadline && <SubHeadlineElement>{subHeadline}</SubHeadlineElement>}
          </CardHeadlineWrapper>
          {action}
        </CardHeader>
        {showHeaderSeparator && <CardSeperator />}
      </>
    )}
    <CardContentWrapper>{children}</CardContentWrapper>
  </CardWrapper>
);

export default DefaultCard;
