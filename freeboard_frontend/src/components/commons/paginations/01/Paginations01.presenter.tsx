import {Page, PaginationDiv} from "./Paginations.01.styles"
export default function PaginationsPageUI(props) {
    return (
        <PaginationDiv>
            <Page onClick={props.onClickPrevPage}>이전</Page>
            {new Array(10).fill(1).map(
                (_, index) =>
                    props.startPage + index <= props.lastPage && 
                    (
                         <Page
                             key = {props.startPage + index}
                             onClick={props.onClickPage}
                             id={String(props.startPage + index)}
                         >
                             {props.startPage + index}
                         </Page>
                    )
            )}
            <Page onClick={props.onClickNextPage}>다음</Page>
        </PaginationDiv>
    )

}