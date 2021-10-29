import { ColumnPoint, Row, Roww, Table } from "../../mypage.styles";

export default function PointChargeUI(props) {
	return (
		<>
			<Table>
				<Roww>
					<ColumnPoint>충전일</ColumnPoint>
					<ColumnPoint>결제 ID</ColumnPoint>
					<ColumnPoint>충전내역</ColumnPoint>
					<ColumnPoint>충전 후 잔액</ColumnPoint>
				</Roww>
				{props.data?.fetchPointTransactionsOfLoading.map(
					(el, index) => (
						<Row key={el._id} id={el._id}>
							<ColumnPoint>
								{el.createdAt.slice(0, 10)}
							</ColumnPoint>
							<ColumnPoint>{el.impUid}</ColumnPoint>
							<ColumnPoint>{el.amount}원</ColumnPoint>
							<ColumnPoint>{el.balance}원</ColumnPoint>
						</Row>
					)
				)}
			</Table>
		</>
	);
}
