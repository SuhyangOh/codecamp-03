import {
	ColumnTitle,
	Pic,
	Info,
	Title,
	Wrapper,
	Row,
	Column,
	SearchTitle,
	BottomDiv,
	Table,
	SearchDiv,
	SearchDate,
	SearchButton,
	BestDiv,
	Best,
	NewButton,
	Vector,
	ColumnHeaderTitle,
	Img,
	InfoTitle,
	InfoBottom,
	InfoBottomLeft,
	Profile,
	ProfileImg,
	ProfileName,
	Date,
	InfoBottomRight,
	Like,
} from "./BoardList.styles";
import PaginationsPage from "../../../commons/paginations/01/Paginations01.containter";
export default function BoardListPageUI(props) {
	return (
		<Wrapper>
			<Title>베스트 게시글</Title>
			<BestDiv>
				{props.best?.fetchBoardsOfTheBest.map((el, index) => (
					<Best
						key={el._id}
						id={el._id}
						onClick={props.onClickBestBoard}
					>
						{el.images[0] ? (
							<Img
								src={`https://storage.googleapis.com/${el.images[0]}`}
							/>
						) : (
							<Pic></Pic>
						)}
						<Info>
							<InfoTitle>
								{el.title.length > 15
									? el.title.slice(0, 16) + "..."
									: el.title}
							</InfoTitle>
							<InfoBottom>
								<InfoBottomLeft>
									<Profile>
										<ProfileImg src="/images/profile.png" />
										<ProfileName>{el.writer}</ProfileName>
									</Profile>
									<Date>{el.createdAt.slice(0, 10)}</Date>
								</InfoBottomLeft>
								<InfoBottomRight>
									<Like src="/images/like.png" />
									<div>{el.likeCount}</div>
								</InfoBottomRight>
							</InfoBottom>
						</Info>
					</Best>
				))}
			</BestDiv>
			<SearchDiv>
				<SearchTitle
					input="text"
					placeholder="제목을 검색해주세요."
					onChange={props.onChangeSearch}
				></SearchTitle>
				<SearchDate
					input="text"
					placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
				></SearchDate>
				<SearchButton onClick={props.onClickSearch}>
					검색하기
				</SearchButton>
			</SearchDiv>

			<Table>
				<Row>
					<Column>번호</Column>
					<ColumnHeaderTitle>제목</ColumnHeaderTitle>
					<Column>작성자</Column>
					<Column>날짜</Column>
				</Row>
				{props.data?.fetchBoards.map((el, index) => (
					<Row
						key={el._id}
						id={el._id}
						onClick={props.onClickMoveToBoardDetail}
					>
						<Column>{10 - index}</Column>
						<ColumnTitle>{el.title}</ColumnTitle>
						<Column>{el.writer}</Column>
						<Column>{el.createdAt.slice(0, 10)}</Column>
					</Row>
				))}
			</Table>
			<BottomDiv>
				<PaginationsPage
					refetch={props.refetch}
					count={props.count}
					startPage={props.startPage}
					setStartPage={props.setStartPage}
				/>
				<NewButton onClick={props.onClickNewPage}>
					<Vector src="/images/Vector.png" />
					게시물 등록하기
				</NewButton>
			</BottomDiv>
		</Wrapper>
	);
}
