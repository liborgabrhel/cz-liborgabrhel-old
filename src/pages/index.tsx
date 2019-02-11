import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';

const IndexPage = () => (
  <Layout>
    <SEO title={'About Me'} keywords={[`gatsby`, `application`, `react`]} />
    <Name>Libor Gabrhel</Name>
    <Meta>front-end kahuna</Meta>
    <Email href={'mailto:gabrhel.libor@gmail.com'}>gabrhel.libor@gmail.com</Email>
  </Layout>
);

export default IndexPage;

const Name = styled('h1')`
  font-family: sans-serif;
  font-size: 42px;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: #333333;
`;

const Meta = styled('span')`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: lighter;
  margin: 0 0 5px 0;
  color: darkslateblue;
`;

const Email = styled('a')`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #333333;
  &:hover {
    color: darkslateblue;
  }
`;
