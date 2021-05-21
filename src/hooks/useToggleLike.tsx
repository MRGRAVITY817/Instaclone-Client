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
        const fragmentId = `Photo:${id}`;
        const fragment = gql`
          fragment PhotoLike on Photo {
            isLiked
            likes
          }
        `;
        const result = cache.readFragment<ToggleLike>({
          id: fragmentId,
          fragment,
        });
        if (result && "isLiked" in result && "likes" in result) {
          cache.writeFragment({
            id: fragmentId,
            fragment,
            data: {
              isLiked: !isLiked,
              likes: isLiked ? likes - 1 : likes + 1,
            },
          });
        }
      }
    },
  });
};
