import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

type Props = {
  name: string;
  surname: string;
  email: string;
};

export const ProfileDetailTemplate = (props: Props) => (
  <DetailContainer>
    <Name>{`${props.name} ${props.surname}`}</Name>
    <Meta> the bald, bearded man with front-end in his 🧬</Meta>
    <Email href={`mailto:${props.email}`}>{props.email}</Email>
  </DetailContainer>
);

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
