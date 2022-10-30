import gql from "graphql-tag";

export const QUERY_LAUNCH = gql`
    query launches{
        launches{
        mission_name
        flight_number
        launch_year
        launch_success
        }
    }
`