import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../_app";

const LOGIN_USER = gql`
	mutation loginUserExample($email: String!, $password: String!) {
		loginUserExample(email: $email, password: $password) {
			accessToken
		}
	}
`;

export default function LoginPage() {
	const { setAccessToken } = useContext(GlobalContext);
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginUser] = useMutation(LOGIN_USER);

	function onChangeEmail(event) {
		setEmail(event.target.value);
	}
	function onChangePassword(event) {
		setPassword(event.target.value);
	}
	async function onClickLogin() {
		const result = await loginUser({
			variables: { email, password },
		});
		// localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
		localStorage.setItem("refreshToken", "true");
		setAccessToken(result.data?.loginUserExample.accessToken);
		router.push("/week8/32-02-login-success");
	}

	return (
		<>
			이메일 : <input type="text" onChange={onChangeEmail} />
			비밀번호 : <input type="password" onChange={onChangePassword} />
			<button onClick={onClickLogin}>로그인하기</button>
		</>
	);
}
