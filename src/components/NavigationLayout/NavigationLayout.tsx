import React from 'react';
import styled from 'styled-components';

const GeneralLayout = styled.div`
  display: grid;
`;

const HeaderBar = styled.div`
  grid-area: header;
`;

const SideNavigationBar = styled.div`
  grid-area: header;
`;

const ContentWrapper = styled.div`
  grid-area: content;
`;

const FooterBar = styled.div`
  grid-area: footer;
`;

const NavigationLayout: React.FC = ({
  children
}) => {
  return (
    <GeneralLayout>
      <HeaderBar />
      <SideNavigationBar />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <FooterBar />
    </GeneralLayout>
  );
};

export default NavigationLayout;