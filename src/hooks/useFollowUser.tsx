import { gql } from "@apollo/client";
const FOLLOW_USER_MUTATION = gql`
  mutation FollowUser($username: String!) {
    followUser(username: $username) {
      ok
    }
  }
`;
