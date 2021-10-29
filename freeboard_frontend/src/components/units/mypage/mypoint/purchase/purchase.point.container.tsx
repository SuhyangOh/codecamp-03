import { useQuery } from "@apollo/client";
import { FETCH_POINT_TRANSACTIONS_OF_BUYING } from "../mypoint.queries";
import PurchasePointUI from "./purchase.point.presenter";
export default function PurchasePoint() {
	const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING, {
		variables: { page: 1 },
	});

	return <PurchasePointUI data={data} />;
}
