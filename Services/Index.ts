import { request, gql } from "graphql-request";

const graphqlAPI: string | undefined =
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Assets {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  //@ts-ignore
  const result: any = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};
