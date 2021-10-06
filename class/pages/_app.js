import "antd/dist/antd.css";
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	ApolloLink,
} from "@apollo/client";
import { Global } from "@emotion/react";
import { quiz13Styles } from "../src/commons/styles/quiz13Styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../src/components/commons/layout";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";

export const firebaseApp = initializeApp({
	apiKey: "AIzaSyCMKpO6dXogXezo5gDZETWKidf6uG90LJU",
	authDomain: "project1-a90d2.firebaseapp.com",
	projectId: "project1-a90d2",
	storageBucket: "project1-a90d2.appspot.com",
	messagingSenderId: "760511718298",
	appId: "1:760511718298:web:fcaf6c63351967b349d023",
	measurementId: "G-7JYS5MW13R",
});
export const GlobalContext = createContext(null);
function MyApp({ Component, pageProps }) {
	const [accessToken, setAccessToken] = useState("");
	const [userInfo, setUserInfo] = useState({});

	const value = {
		accessToken: accessToken,
		setAccessToken: setAccessToken,
		userInfo: userInfo,
		setUserInfo: setUserInfo,
	};
	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken") || "";
		setAccessToken(accessToken);
	}, []);

	const uploadLink = createUploadLink({
		uri: "http://backend03.codebootcamp.co.kr/graphql",
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});

	const client = new ApolloClient({
		link: ApolloLink.from([uploadLink]),
		cache: new InMemoryCache(),
	});

	return (
		<GlobalContext.Provider value={value}>
			<Global styles={quiz13Styles} />
			<ApolloProvider client={client}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ApolloProvider>
		</GlobalContext.Provider>
	);
}

export default MyApp;
