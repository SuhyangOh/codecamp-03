/* eslint-disable react/display-name */
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
	const { accessToken } = useContext(GlobalContext);
	const router = useRouter();

	useEffect(() => {
		if (!accessToken) {
			alert("로그인한 사람만 입장 가능합니다.");
			router.push("/week6/23-01-login");
		}
	}, []);

	return <Component {...props} />;
};
