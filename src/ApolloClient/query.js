import { gql } from '@apollo/client';
// import { ID } from "graphql"

export const ROOMSFORUSER = gql`
    query roomsForUser($userId: ID!){
        roomsForUser(userId: $userId){
            id
            roomName
            description
            items {
                id
                description
                image
                price
                quantity
                category {
                    description
                    type
                }
            }    
        }
    }
`
