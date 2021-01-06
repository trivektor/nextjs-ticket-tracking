import gql from 'graphql-tag';

const ProjectsQuery = gql`
  query ProjectsQuery {
    projects {
      edges {
        node {
          name
          description
        }
      }
    }
  }
`

export {ProjectsQuery as default}