/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeeAllFeeds
// ====================================================

export interface SeeAllFeeds_seeFeed_feeds_user {
  __typename: "User";
  username: string;
  avatar: string | null;
}

export interface SeeAllFeeds_seeFeed_feeds_comments_user {
  __typename: "User";
  username: string;
  avatar: string | null;
}

export interface SeeAllFeeds_seeFeed_feeds_comments {
  __typename: "Comment";
  id: number;
  user: SeeAllFeeds_seeFeed_feeds_comments_user;
  payload: string;
  isMine: boolean;
  createdAt: string;
}

export interface SeeAllFeeds_seeFeed_feeds {
  __typename: "Photo";
  id: number;
  file: string;
  likes: number;
  commentNumber: number;
  isLiked: boolean;
  user: SeeAllFeeds_seeFeed_feeds_user;
  caption: string | null;
  comments: (SeeAllFeeds_seeFeed_feeds_comments | null)[] | null;
  createdAt: string;
  isMine: boolean;
}

export interface SeeAllFeeds_seeFeed {
  __typename: "SeeFeedResult";
  ok: boolean;
  error: string | null;
  feeds: (SeeAllFeeds_seeFeed_feeds | null)[] | null;
}

export interface SeeAllFeeds {
  seeFeed: SeeAllFeeds_seeFeed;
}
