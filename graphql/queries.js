import gql from 'graphql-tag';

export const allArticles = gql`
query allArticles {
    articles {
      data {
        id
        attributes {
          title
          slug
          description
          body
          date
        }
      }
    }
}

`
export const singleArticle = gql`
query singleArticle($id: ID!) {
    article(id: $id) {
      data {
        id
        attributes {
          title
          slug
          description
          body
          date
        }
      }
    }
}

`