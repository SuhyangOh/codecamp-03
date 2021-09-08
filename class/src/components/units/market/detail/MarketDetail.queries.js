import { gql } from "@apollo/client";

export const FETCH_PRODUCTS = gql`
    query fetchProduct(productId: ID) {
        fetchProduct(productId: $productId) {
            _id
            seller
            name
            detail
            price
        }
    }
`