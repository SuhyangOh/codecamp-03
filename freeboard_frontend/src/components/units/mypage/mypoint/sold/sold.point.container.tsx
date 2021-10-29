import { useQuery } from "@apollo/client";
import { FETCH_POINT_TRANSACTIONS } from "../mypoint.queries";
import TotalPointUI from "./sold.point.presenter";
export default function TotalPoint() {
	const { data: total } = useQuery(FETCH_POINT_TRANSACTIONS, {
		variables: { page: 1 },
	});

	console.log(total);
	return <TotalPointUI total={total} />;
}
