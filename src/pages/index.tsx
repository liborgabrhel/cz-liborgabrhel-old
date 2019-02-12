import React from 'react';
import { Image } from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import { theme } from '../theme';

const IndexPage = () => (
  <Layout>
    <SEO title={'About Me'} keywords={[`gatsby`, `application`, `react`]} />
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
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
`;

const ImageContainer = styled('div')`
  width: 180px;
  height: 180px;
  margin-right: 35px;
`;

const DetailContainer = styled('div')`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
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

const Email = styled('a')`
  font-size: 16px;
  font-weight: ${theme.font.weight.medium};
  color: ${theme.color.dark};
  &:hover {
    color: ${theme.color.brand2};
  }
`;
