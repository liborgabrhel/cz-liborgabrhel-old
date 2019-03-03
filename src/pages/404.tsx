import React from 'react';
import { SEO } from '../containers/seo';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GlobalStyles } from '../components/global-styles';
import { theme } from '../theme';

const NotFoundPage = () => (
  <React.Fragment>
    <GlobalStyles />
    <SEO title={'404'} />
    <ErrorPageLayout>
      <Title>404</Title>
      <Subtitle>Uh-oh, the page was not found!</Subtitle>
      <Note>
        Return to the <NoteLink to={'/'}>main page</NoteLink>.
      </Note>
    </ErrorPageLayout>
  </React.Fragment>
);

export default NotFoundPage;

const ErrorPageLayout = styled('main')`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-row-gap: 20px;
  justify-items: center;
  padding-top: 70px;
`;

const Title = styled('h1')`
  font-size: 56px;
  color: ${theme.color.brand1};
  padding: 0;
  margin: 0;
`;

const Subtitle = styled('p')`
  font-size: 21px;
  color: ${theme.color.dark};
  padding: 0;
  margin: 0;
`;

const Note = styled('p')`
  font-size: 14px;
  color: ${theme.color.dark};
  padding: 0;
  margin: 56px 0 0 0;
`;

const NoteLink = styled(Link)`
  font-size: 14px;
  color: ${theme.color.dark};

  &:hover {
    color: ${theme.color.brand1};
  }
`;
