import { request as graphQLRequest, gql } from 'graphql-request';

export const request = async (query: string) => {
  const URL = 'https://spacex-production.up.railway.app/';

  return graphQLRequest(
    URL,
    gql`
      ${query}
    `
  );
};
