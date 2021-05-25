import { gql } from "@apollo/client";
const UNFOLLOW_USER_MUTATION = gql`
  mutation UnfollowUser($username: String!) {
    unfollowUser(username: $username) {
      ok
    }
  }
`;
