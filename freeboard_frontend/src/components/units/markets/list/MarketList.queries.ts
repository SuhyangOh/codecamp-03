import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
	query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
		fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
			_id
			name
			remarks
			tags
			pickedCount
			price
			seller {
				name
			}
			images
		}
	}
`;

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
	query fetchUseditemsOfTheBest {
		fetchUseditemsOfTheBest {
			_id
			images
			name
			remarks
			price
			pickedCount
		}
	}
`;
