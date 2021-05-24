import { gql, useMutation } from "@apollo/client";
import { ToggleLike, ToggleLikeVariables } from "../__generated__/ToggleLike";

const TOGGLE_LIKE_MUTATION = gql`
  mutation ToggleLike($id: Int!) {
    toggleLike(id: $id) {
      ok
      error
    }
  }
`;

export const useToggleLike = (id: number, isLiked: boolean, likes: number) => {
  return useMutation<ToggleLike, ToggleLikeVariables>(TOGGLE_LIKE_MUTATION, {
    update: (cache, result) => {
      const { ok } = result.data?.toggleLike!;
      if (ok) {
        const photoId = `Photo:${id}`;
        cache.modify({
          id: photoId,
          fields: {
            isLiked: (prev) => !prev,
            likes: (prev) => (isLiked ? prev - 1 : prev + 1),
          },
        });
      }
    },
  });
};
