import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
	query fetchBoards($page: Int, $search: String) {
		fetchBoards(page: $page, search: $search) {
			writer
			title
			contents
			createdAt
			_id
		}
	}
`;

export const FETCH_BOARDS_COUNT = gql`
	query fetchBoardsCount {
		fetchBoardsCount
	}
`;

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
	query fetchUseditemsOfTheBest {
		_id
		name
		remarks
		contentsprice
		images
		pickedCount
	}
`;
