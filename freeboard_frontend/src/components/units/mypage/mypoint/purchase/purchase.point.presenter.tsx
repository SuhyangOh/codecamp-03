import { Column16, Column32, Row, Roww, Table } from "../../mypage.styles";

export default function PurchasePointUI(props) {
	return (
		<>
			<Table>
				<Roww>
					<Column16>거래일</Column16>
					<Column32>상품명</Column32>
					<Column16>거래내역</Column16>
					<Column16>거래 후 잔액</Column16>
					<Column16>판매자</Column16>
				</Roww>
				{props.data?.fetchPointTransactionsOfBuying.map((el, index) => (
					<Row key={el._id} id={el._id}>
						<Column16>{el.createdAt.slice(0, 10)}</Column16>
						<Column32>{el.useditem.name}</Column32>
						<Column16>{el.amount}원</Column16>
						<Column16>{el.balance}원</Column16>
						{/* <Column16>{el.useditem.seller.name}원</Column16> */}
					</Row>
				))}
			</Table>
		</>
	);
}
