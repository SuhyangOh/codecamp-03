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

export const firebaseApp = initializeApp({
	apiKey: "AIzaSyCMKpO6dXogXezo5gDZETWKidf6uG90LJU",
	authDomain: "project1-a90d2.firebaseapp.com",
	projectId: "project1-a90d2",
	storageBucket: "project1-a90d2.appspot.com",
	messagingSenderId: "760511718298",
	appId: "1:760511718298:web:fcaf6c63351967b349d023",
	measurementId: "G-7JYS5MW13R",
});

function MyApp({ Component, pageProps }) {
	const uploadLink = createUploadLink({
		uri: "http://backend02.codebootcamp.co.kr/graphql",
	});

	const client = new ApolloClient({
		link: ApolloLink.from([uploadLink]),
		cache: new InMemoryCache(),
	});

	return (
		<>
			<Global styles={quiz13Styles} />
			<ApolloProvider client={client}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
