import {
	Column,
	ColumnHeaderTitle,
	ColumnTitle,
	Row,
	Roww,
	Table,
} from "../../mypage.styles";

export default function MyPicksUI(props) {
	return (
		<>
			<Table>
				<Roww>
					<Column>번호</Column>
					<ColumnTitle>상품명</ColumnTitle>
					<Column>판매가격</Column>
					<Column>판매자</Column>
					<Column>날짜</Column>
				</Roww>
				{props.data?.fetchUseditemsIPicked.map((el, index) => (
					<Row
						key={el._id}
						id={el._id}
						onClick={props.onClickMoveToDetail}
					>
						<Column>{10 - index}</Column>
						<ColumnTitle>{el.name}</ColumnTitle>
						<Column>{el.price}</Column>
						<Column>{el.seller.name}</Column>
						<Column>{el.createdAt.slice(0, 10)}</Column>
					</Row>
				))}
			</Table>
		</>
	);
}
