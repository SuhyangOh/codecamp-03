import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS = gql`
	query fetchPointTransactions($page: Int) {
		fetchPointTransactions(page: $page) {
			_id
			status
			statusDetail
			balance
			createdAt
			amount
		}
	}
`;
