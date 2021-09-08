import { Pic, Info, Title, Wrapper, Row, Column, SearchTitle, BottomDiv, Table, SearchDiv, SearchDate, SearchButton, BestDiv, Best, NewButton, Vector } from "./BoardList.styles";

export default function BoardListPageUI(props) {
    return(
        <Wrapper>
            <Title>베스트 게시글</Title>
            <BestDiv>
                <Best>
                    <Pic></Pic>
                    <Info></Info>
                </Best>
                <Best>
                    <Pic></Pic>
                    <Info></Info>
                </Best>
                <Best>
                    <Pic></Pic>
                    <Info></Info>
                </Best>
                <Best>
                    <Pic></Pic>
                    <Info></Info>
                </Best>
            </BestDiv>
            <SearchDiv>
                <SearchTitle input="text" placeholder="제목을 검색해주세요."></SearchTitle>
                <SearchDate input="text" placeholder="YYYY.MM.DD ~ YYYY.MM.DD"></SearchDate>
                <SearchButton>검색하기</SearchButton>
            </SearchDiv>
            
            <Table>
                <Row>
                    <Column>번호</Column>
                    <Column>제목</Column>
                    <Column>작성자</Column>
                    <Column>날짜</Column>
                </Row>
                {props.data?.fetchBoards.map((el, index) => (
                    <Row key={el._id}>
                        <Column>{index}</Column>
                        <Column>{el.title}</Column>
                        <Column>{el.writer}</Column>
                        <Column>{el.createdAt}</Column>
                    </Row>
                ))}
            </Table>
            <BottomDiv>
                <NewButton onClick={props.onClickNewPage}><Vector src="/images/Vector.png" />게시물 등록하기</NewButton>
            </BottomDiv>
        </Wrapper>
    )
}