import { useQuery } from "@apollo/client";
import { FETCH_POINT_TRANSACTIONS_OF_LOADING } from "../mypoint.queries";
import PointChargeUI from "./charge.point.presenter";
export default function PointCharge() {
	const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING, {
		variables: { page: 1 },
	});

	return <PointChargeUI data={data} />;
}
