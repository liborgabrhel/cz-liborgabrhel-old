import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { ProfileDetailTemplate } from '../components/profile-detail-template';

type Props = {
  children?: never;
};

type Data = {
  site: {
    siteMetadata: {
      profile: {
        name: string;
        surname: string;
        bio: string;
        email: string;
      };
    };
  };
};

export const ProfileDetail = (props: Props) => (
  <StaticQuery
    query={profileDataQuery}
    render={(data: Data) => (
      <ProfileDetailTemplate
        name={data.site.siteMetadata.profile.name}
        surname={data.site.siteMetadata.profile.surname}
        bio={data.site.siteMetadata.profile.bio}
        email={data.site.siteMetadata.profile.email}
      />
    )}
  />
);

const profileDataQuery = graphql`
  query ProfileDataQuery {
    site {
      siteMetadata {
        profile {
          name
          surname
          bio
          email
        }
      }
    }
  }
`;
