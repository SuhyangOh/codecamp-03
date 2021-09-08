import { gql, useMutation, useQuery } from "@apollo/client"
import styled from "@emotion/styled"

const FETCH_PRODUCTS = gql`
    query{
        fetchProducts{
            seller
            name
            detail
            price
            _id
        }
    }
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
`

const Column = styled.div`
    width: 20%
`

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID){
        deleteProduct(productId: $productId) {
            message
        }
    }
`

export default function MapSelectorPage() {
    const [deleteProduct] = useMutation(DELETE_PRODUCT)
    const { data } = useQuery(FETCH_PRODUCTS) // [{}, {}, {}]

    function onClickDelete(event) {
        deleteProduct({
            variables: {productId:event.target.id},
            refetchQueries : [{query: FETCH_PRODUCTS}]
        })
        
    }

    return(
        <div>
            {data?.fetchProducts.map((el, index) => (
                <Row key={el._id}>
                    <Column><input type="checkbox"/></Column>
                    <Column>{index}</Column>
                    <Column>{el.seller}</Column>
                    <Column>{el.name}</Column>
                    <Column>{el.detail}</Column>
                    <Column>{el.price}원</Column>
                    <Column>
                        <span><button id={el._id} onClick={onClickDelete}>삭제하기</button></span>
                    </Column>
                </Row>
            ))}
        </div>
    )
}