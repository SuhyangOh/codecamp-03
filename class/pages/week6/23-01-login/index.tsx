import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../_app";

const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		loginUser(email: $email, password: $password) {
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
		console.log(result.data?.loginUser.accessToken);
		localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
		setAccessToken(result.data?.loginUser.accessToken);
		router.push("/week6/23-02-login-success");
	}

	return (
		<>
			이메일 : <input type="text" onChange={onChangeEmail} />
			비밀번호 : <input type="password" onChange={onChangePassword} />
			<button onClick={onClickLogin}>로그인하기</button>
		</>
	);
}
