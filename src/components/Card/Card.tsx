import React from 'react';
import styled from 'styled-components';

export interface ICard {
  headline?: string;
  subHeadline?: string;
  showHeaderSeparator?: boolean;
  action?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.base.default};
  color: ${({ theme }) => theme.colors.base.text};
  border: 1px solid ${({ theme }) => theme.borders.default};
  max-width: 100%;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.default};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const CardMain = styled.div`
  flex: 1 0 auto;
  display: block;
`;

const CardFooter = styled.div`
  flex: 0 0 auto;
  display: block;
`;

export const CardHeadlineWrapper = styled.div`
  flex: 1 1 80%;
`;

export const CardSeperator = styled.div`
  display: block;
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.borders.default};
`;

export const CardContentWrapper = styled.div`
  display: block;
  padding: 0.5rem;
`;

export const HeadlineElement = styled.div`
  font-size: 120%;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 1.5px;
`;

export const SubHeadlineElement = styled(HeadlineElement)`
  font-size: 80%;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 0.3px;
`;

export const Card: React.FC<ICard> = ({
  headline,
  subHeadline,
  showHeaderSeparator = true,
  action,
  children,
  footer,
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
    <CardMain>
      <CardContentWrapper>{children}</CardContentWrapper>
    </CardMain>
    {footer && (
      <CardFooter>
        <CardSeperator />
        <CardContentWrapper>{footer}</CardContentWrapper>
      </CardFooter>
    )}
  </CardWrapper>
);

export default Card;
