import {gql} from 'apollo-server'

import Project from './project'

const ProjectInput = `
  input ProjectInput {
    name: String!
    description: String
  }
`

const MutationInputs = `
  ${ProjectInput}
`

const Mutation = `
  type Mutation {
    createProject(input: ProjectInput): Project
  }
`

const Query = `
  type Query {
    projects: ProjectConnection
  }
`

const PageInfo = `
  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }
`

const ProjectEdge = `
  type ProjectEdge {
    node: Project
    cursor: String!
  }
`

const ProjectConnection = `
  type ProjectConnection {
    pageInfo: PageInfo!
    edges: [ProjectEdge!]!
  }
`

const Edges = `
  ${ProjectEdge}
`

const Connections = `
  ${ProjectConnection}
`

const typeDefs = gql`
  ${PageInfo}
  ${Edges}
  ${Connections}
  ${Project}
  ${MutationInputs}
  ${Mutation}
  ${Query}
`

export {typeDefs as default}