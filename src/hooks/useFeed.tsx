import { gql, useQuery } from "@apollo/client";
import { SeeAllFeeds } from "../__generated__/SeeAllFeeds";

export const FEED_QUERY = gql`
  query SeeAllFeeds {
    seeFeed {
      ok
      error
      feeds {
        id
        user {
          username
          avatar
        }
        file
        caption
        likes
        comments {
          id
          user {
            username
            avatar
          }
          payload
          isMine
          createdAt
        }
        commentNumber
        createdAt
        isMine
        isLiked
      }
    }
  }
`;

export const useFeed = () => {
  return useQuery<SeeAllFeeds>(FEED_QUERY);
};
