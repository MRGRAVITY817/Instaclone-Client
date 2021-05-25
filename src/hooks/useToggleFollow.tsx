import { gql, MutationUpdaterFn, useMutation } from "@apollo/client";
import {
  ToggleFollow,
  ToggleFollowVariables,
} from "../__generated__/ToggleFollow";

const TOGGLE_FOLLOW_MUTATION = gql`
  mutation ToggleFollow($username: String!) {
    toggleFollow(username: $username) {
      ok
      error
      following
    }
  }
`;

export const useToggleFollow = (update: MutationUpdaterFn<ToggleFollow>) => {
  return useMutation<ToggleFollow, ToggleFollowVariables>(
    TOGGLE_FOLLOW_MUTATION,
    {
      update,
    }
  );
};
