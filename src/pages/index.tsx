import React from 'react';
import { Image } from '../components/image';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import styled from 'styled-components';
import LogRocket from 'logrocket';
import { ProfileDetail } from '../containers/profile-detail';

LogRocket.init(`${process.env.GATSBY_LOGROCKET_APPID}`);

const IndexPage = () => (
  <Layout>
    <SEO title={'About Me'} keywords={[`Libor`, `Gabrhel`, `front-end`, `front end`]} />
    <ContentContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <ProfileDetail />
    </ContentContainer>
  </Layout>
);

export default IndexPage;

const ContentContainer = styled('div')`
  display: grid;
  grid-template-columns: 180px max-content;
  grid-template-rows: 180px;
  grid-template-areas: 'avatar details';
  grid-column-gap: 20px;
  position: relative;
  flex-direction: row;
  align-items: center;

  padding: 20px;

  @media screen and (max-width: 425px) {
    grid-template-columns: 180px 1fr;
    grid-template-rows: 180px max-content;
    grid-template-areas:
      'avatar .'
      'details details';
    grid-column-gap: 0;
    grid-row-gap: 20px;
  }
`;

const ImageContainer = styled('div')`
  width: 180px;
  height: 180px;
  margin-right: 35px;
  grid-area: avatar;
`;
