import React from 'react';
import { Image } from '../components/image';
import { Layout } from '../components/layout';
import SEO from '../components/seo';
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';
import LogRocket from 'logrocket';

LogRocket.init(`${process.env.GATSBY_LOGROCKET_APPID}`);

const IndexPage = () => (
  <Layout>
    <SEO title={'About Me'} keywords={[`Libor`, `Gabrhel`, `front-end`, `front end`]} />
    <ContentContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <DetailContainer>
        <Name>Libor Gabrhel</Name>
        <Meta> the bald, bearded man with front-end in his 🧬</Meta>
        <Email href={'mailto:gabrhel.libor@gmail.com'}>gabrhel.libor@gmail.com</Email>
      </DetailContainer>
    </ContentContainer>
  </Layout>
);

export default IndexPage;

const ContentContainer = styled('div')`
  display: grid;
  grid-template-columns: 180px max-content;
  grid-template-rows: 180px;
  grid-template-areas: "avatar details";
  grid-column-gap: 20px;
  position: relative;
  flex-direction: row;
  align-items: center;
  
  padding: 20px;
  
  @media screen and (max-width: 425px) {
    grid-template-columns: 180px 1fr;
    grid-template-rows: 180px max-content;
    grid-template-areas:
      "avatar ."
      "details details";
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

const DetailContainer = styled('div')`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  grid-area: details;
`;

const Name = styled('h1')`
  font-size: 42px;
  font-weight: ${theme.font.weight.bold};
  margin: 0 0 7px 0;
  color: ${theme.color.dark};
`;

const Meta = styled('span')`
  font-size: 16px;
  font-weight: ${theme.font.weight.regular};
  margin: 0 0 21px 0;
  color: ${theme.color.brand1};
`;

const changeColor = keyframes`
  0% {color: ${theme.color.brand1}}
  25% {color: ${theme.color.brand2}}
  50% {color: ${theme.color.brand3}}
  75% {color: ${theme.color.brand2}}
  100% {color: ${theme.color.brand1}}
`;

const Email = styled('a')`
  font-size: 16px;
  font-weight: ${theme.font.weight.medium};
  color: ${theme.color.dark};
  &:hover {
    animation: ${changeColor} 6s ease-in-out infinite alternate;
  }
`;
