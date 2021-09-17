import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
const FETCH_BOARDS = gql`
	query fetchBoards($page: Int) {
		fetchBoards(page: $page) {
			_id
			writer
			title
			createdAt
		}
	}
`;

const Row = styled.div`
	display: flex;
`;
const Column = styled.div`
	margin: 20px;
`;

export default function EventBubblingPage() {
	const { data } = useQuery(FETCH_BOARDS);

	function onClickRow(event) {
		alert("클릭!");
		alert(event.currentTarget.id);
	}

	return (
		<div>
			<div>Event Bubbling</div>
			<div>
				{data?.fetchBoards.map((el) => (
					<Row key={el._id} id={el._id} onClick={onClickRow}>
						<Column>{el.writer}</Column>
						<Column>{el.title}</Column>
						<Column>{el.createdAt.slice(0, 10)}</Column>
					</Row>
				))}
			</div>
			<br />
		</div>
	);
}
