import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
	query fetchBoards($page: Int) {
		fetchBoards(page: $page) {
			_id
			writer
			title
			contents
		}
	}
`;

export default function InfiniteScrollPage() {
	const { data, fetchMore } = useQuery(FETCH_BOARDS);

	function onLoadMore() {
		if (!data) return;
		fetchMore({
			variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
			updateQuery: (prev, { fetchMoreResult }) => {
				return {
					fetchBoards: [
						...prev.fetchBoards,
						...fetchMoreResult.fetchBoards,
					],
				};
			},
		});
	}
	return (
		<InfiniteScroll
			pageStart={0}
			loadMore={onLoadMore}
			hasMore={true || false}
		>
			{data?.fetchBoards.map((el) => (
				<div key={el._id}>
					<span>{el.writer}</span>
					<span>{el.writer}</span>
					<span>{el.writer}</span>
				</div>
			))}
		</InfiniteScroll>
	);
}
