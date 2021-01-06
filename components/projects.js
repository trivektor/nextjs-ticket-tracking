import { Fragment } from "react"
import {gql, useQuery} from '@apollo/client'

import {ProjectsQuery} from '../graphql/queries'

const Projects = () => {
  const {data, loading} = useQuery(ProjectsQuery)

  console.log({data, loading})

  return (
    <Fragment>
      Projects list
    </Fragment>
  );
};

export {Projects as default};