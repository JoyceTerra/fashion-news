import { request } from "graphql-request";
const endpoint = "https://fashionunited.info/graphql/";
const query = `
query NewsArticles($keywords: [String]) {
fashionunitedNlNewsArticles(keywords: $keywords) {
                title
                url
                imageUrl
                createdAt
        }
    }
`;
export default function getNewsArticles(variables = {}) {
  return request(endpoint, query, variables);
}
