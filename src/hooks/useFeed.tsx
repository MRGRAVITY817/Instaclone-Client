import { gql, useQuery } from "@apollo/client";
import { COMMENT_FRAGMENT } from "../lib/fragments/comments.fragments";
import { PHOTO_FRAGMENT } from "../lib/fragments/photo.fragments";
import { SeeAllFeeds } from "../__generated__/SeeAllFeeds";

export const FEED_QUERY = gql`
  query SeeAllFeeds {
    seeFeed {
      ok
      error
      feeds {
        ...PhotoFragment
        user {
          username
          avatar
        }
        caption
        likes
        comments {
          ...CommentFragment
        }
        createdAt
        isMine
      }
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export const useFeed = () => {
  return useQuery<SeeAllFeeds>(FEED_QUERY);
};
