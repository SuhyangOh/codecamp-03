import "antd/dist/antd.css";
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	ApolloLink,
} from "@apollo/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";

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
            <ApolloProvider client={client}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>   
        </GlobalContext.Provider>
       
    )
  
}

export default MyApp
