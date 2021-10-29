import {
	Column,
	ColumnHeaderTitle,
	ColumnPoint,
	Row,
	Roww,
	Table,
} from "../../mypage.styles";

export default function TotalPointUI(props) {
	return (
		<>
			<Table>
				<Roww>
					<ColumnPoint>날짜</ColumnPoint>
					<ColumnPoint>내용</ColumnPoint>
					<ColumnPoint>거래 및 충전 내역</ColumnPoint>
					<ColumnPoint>잔액</ColumnPoint>
				</Roww>
				{props.total?.fetchPointTransactions.map((el, index) => (
					<Row
						key={el._id}
						id={el._id}
						onClick={props.onClickMoveToDetail}
					>
						<ColumnPoint>{el.createdAt.slice(0, 10)}</ColumnPoint>
						<ColumnPoint>{el.status}</ColumnPoint>
						<ColumnPoint>{el.amount}원</ColumnPoint>
						<ColumnPoint>{el.balance}원</ColumnPoint>
					</Row>
				))}
			</Table>
		</>
	);
}
