import { request } from 'graphql-request';

const endpoint = 'https://fashionunited.info/graphql/';

const query = `
    query NewsArticles( $limit: Int, $offset: Int) {
        fashionunitedNlNewsArticles( limit: $limit, offset: $offset) {
            title
            url
            imageUrl
            createdAt
            id
        }
    }
`;

export default function getNewsArticles(variables) {
    return request(endpoint, query, variables);
}