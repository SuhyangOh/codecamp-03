import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_I_SOLD = gql`
	query {
		fetchUseditemsISold {
			_id
			name
			remarks
			price
			createdAt
			buyer {
				name
			}
		}
	}
`;

export const FETCH_USEDITEM_I_PICKED = gql`
	query fetchUseditemsIPicked($search: String) {
		fetchUseditemsIPicked(search: $search) {
			_id
			name
			price
			seller {
				name
			}
			buyer {
				name
			}
			createdAt
		}
	}
`;

export const FETCH_USER_LOGGED_IN = gql`
	query {
		fetchUserLoggedIn {
			email
			name
			userPoint {
				amount
			}
		}
	}
`;

export const RESORT_USER_PASSWORD = gql`
	mutation resetUserPassword($password: String!) {
		resetUserPassword(password: $password)
	}
`;

export const UPDATE_USER_INPUT = gql`
	mutation updateUser($updateUserInput: UpdateUserInput!) {
		updateUser(updateUserInput: $updateUserInput) {
			_id
		}
	}
`;
