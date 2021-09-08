import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import MarketNewPageUI from './MarketNew.presenter'
import { CREATE_PRODUCT } from "./MarketNew.queries"


export default function MarketNewPage() {
    const [ createProduct ] = useMutation(CREATE_PRODUCT)
    const [ myseller, setSeller ] = useState("")
    const [ myname, setName ] = useState("")
    const [ mydetail, setDetail ] = useState("")
    const [ myprice, setPrice ] = useState("")

    const router = useRouter();

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
        router.push(`/week2/quiz/Day08/market/${result.data.createProduct._id}`)
    }

    return (
        <MarketNewPageUI 
            onChangeSeller={onChangeSeller}
            onChangeName={onChangeName}
            onChangeDetail={onChangeDetail}
            onChangePrice={onChangePrice}
            onClickSubmit={onClickSubmit}
        />
    )

}