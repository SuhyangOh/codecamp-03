import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { useEffect } from "react";
import { GlobalContext } from "../../_app";

const FETCH_USER_LOGGED_IN = gql`
	query fetchUserLoggedIn {
		fetchUserLoggedIn {
			name
			email
			picture
		}
	}
`;

export default function LoginSuccessPage() {
	const { data } = useQuery(FETCH_USER_LOGGED_IN);
	const { userInfo, setUserInfo } = useContext(GlobalContext);

	useEffect(() => {
		if (userInfo.name) return;
		if (userInfo.email) return;
		setUserInfo({
			name: data?.fetchUserLoggedIn.name,
			email: data?.fetchUserLoggedIn.email,
			picture: data?.fetchUserLoggedIn.picture,
		});
	}, [data]);

	console.log(userInfo);
	return (
		<div>
			<div>로그인에 성공하셨습니다.</div>
			<div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
		</div>
	);
}
