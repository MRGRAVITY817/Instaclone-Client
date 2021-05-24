import { gql, useMutation } from "@apollo/client";
import {
  CreateComment,
  CreateCommentVariables,
} from "../__generated__/CreateComment";
const CREATE_COMMENT_MUTATION = gql`
  mutation CreateComment($photoId: Int!, $payload: String!) {
    createComment(photoId: $photoId, payload: $payload) {
      ok
      error
    }
  }
`;

export const useCreateComment = (
  onCompleted: (data: CreateComment) => void
) => {
  return useMutation<CreateComment, CreateCommentVariables>(
    CREATE_COMMENT_MUTATION,
    {
      onCompleted,
    }
  );
};
