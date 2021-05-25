import { gql, useQuery } from "@apollo/client";
import { PHOTO_FRAGMENT } from "../lib/fragments/photo.fragments";
import { SeeProfile, SeeProfileVariables } from "../__generated__/SeeProfile";

const SEE_PROFILE_QUERY = gql`
  query SeeProfile($username: String!) {
    seeProfile(username: $username) {
      firstName
      lastName
      username
      bio
      avatar
      photos {
        ...PhotoFragment
      }
      totalFollowing
      totalFollowers
      isMe
      isFollowing
    }
  }
  ${PHOTO_FRAGMENT}
`;

export const useProfile = (username: string) => {
  return useQuery<SeeProfile, SeeProfileVariables>(SEE_PROFILE_QUERY, {
    variables: { username },
  });
};
