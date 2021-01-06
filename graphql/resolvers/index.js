import createProject from './create-project'
import projects from './projects'

const resolvers = {
  Query: {
    projects,
  },
  Mutation: {
    createProject,
  },
}

export {resolvers as default}