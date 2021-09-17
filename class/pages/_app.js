import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import { quiz13Styles } from "../src/commons/styles/quiz13Styles";
import Quiz13Layout from "../src/components/commons/Quiz13";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }) {
	const client = new ApolloClient({
		uri: "http://backend03.codebootcamp.co.kr/graphql",
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
