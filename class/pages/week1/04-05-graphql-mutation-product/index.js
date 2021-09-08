import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
    mutation createProduct(
        $seller: String, $createProductInput: CreateProductInput!
        ){
            createProduct(
            seller:$seller, 
            createProductInput: $createProductInput
        ){
            _id
            number
            message
        }
    }
`



export default function GraphqlMutationProductPage() {
    const [ createProduct ] = useMutation(CREATE_PRODUCT)
    const [ myseller, setSeller ] = useState("")
    const [ myname, setName ] = useState("")
    const [ mydetail, setDetail ] = useState("")
    const [ myprice, setPrice ] = useState("")

    function onChangeSeller(event){
        setSeller(event.target.value)
    }
    
    function onChangeName(event) {
        setName(event.target.value)
    }

    function onChangeDetail(event) {
        setDetail(event.target.value)
    }

    function onChangePrice(event) {
        setPrice(event.target.value)
    }

    async function onClickSubmit() {
        const result = await createProduct({
            variables: {
                seller: myseller,
                createProductInput :
                {
                    name: myname,
                    detail: mydetail,
                    price: Number(myprice)
                }
            }
        }
            
        )
        console.log(result.data.createProduct._id)
    }

    return(
        <>
            판매자: <input type="text" onChange={onChangeSeller}/><br />
            상품명: <input type="text" onChange={onChangeName}/><br />
            상품상세: <input type="text" onChange={onChangeDetail}/><br />
            상품가격: <input type="text" onChange={onChangePrice}/><br />
            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    )
}