import {
	Column,
	ColumnHeaderTitle,
	Row,
	Roww,
	Table,
} from "../../mypage.styles";

export default function MyItemsUI(props) {
	return (
		<>
			<Table>
				<Roww>
					<Column>번호</Column>
					<ColumnHeaderTitle>상품명</ColumnHeaderTitle>
					<Column>판매가격</Column>
					<Column>날짜</Column>
				</Roww>
				{props.data?.fetchUseditemsISold.map((el, index) => (
					<Row
						key={el._id}
						id={el._id}
						onClick={props.onClickMoveToDetail}
					>
						<Column>{10 - index}</Column>
						<ColumnHeaderTitle>{el.name}</ColumnHeaderTitle>
						<Column>{el.price}</Column>
						<Column>{el.createdAt.slice(0, 10)}</Column>
					</Row>
				))}
			</Table>
		</>
	);
}
