import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { isLoggedInVar, logUserOut } from "../lib/apollo";
import { useEffect } from "react";
import { GetMe } from "../__generated__/GetMe";

const ME_QUERY = gql`
  query GetMe {
    me {
      id
      username
      avatar
    }
  }
`;

export const useMe = () => {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data } = useQuery<GetMe>(ME_QUERY, {
    skip: !hasToken,
  });
  useEffect(() => {
    if (data?.me === null) {
      // Token not working so log out
      logUserOut();
    }
  }, [data]);
  return data;
};
