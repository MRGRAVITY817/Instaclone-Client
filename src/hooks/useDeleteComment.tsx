import { gql, MutationUpdaterFn, useMutation } from "@apollo/client";
import {
  DeleteComment,
  DeleteCommentVariables,
} from "../__generated__/DeleteComment";

const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
      error
    }
  }
`;

export const useDeleteComment = (update: MutationUpdaterFn<DeleteComment>) => {
  return useMutation<DeleteComment, DeleteCommentVariables>(
    DELETE_COMMENT_MUTATION,
    { update }
  );
};
