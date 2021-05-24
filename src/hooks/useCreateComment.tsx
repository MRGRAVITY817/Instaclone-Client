import { gql, MutationUpdaterFn, useMutation } from "@apollo/client";
import {
  CreateComment,
  CreateCommentVariables,
} from "../__generated__/CreateComment";
const CREATE_COMMENT_MUTATION = gql`
  mutation CreateComment($photoId: Int!, $payload: String!) {
    createComment(photoId: $photoId, payload: $payload) {
      ok
      error
      id
    }
  }
`;

export const useCreateComment = (update: MutationUpdaterFn<CreateComment>) => {
  return useMutation<CreateComment, CreateCommentVariables>(
    CREATE_COMMENT_MUTATION,
    {
      update,
    }
  );
};
