import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import { quiz13Styles } from "../src/commons/styles/quiz13Styles";
import Quiz13Layout from "../src/components/commons/Quiz13";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
	const client = new ApolloClient({
		uri: "http://example.codebootcamp.co.kr/graphql",
		cache: new InMemoryCache(),
	});

	return (
		<>
			<Global styles={quiz13Styles} />
			<ApolloProvider client={client}>
				<Quiz13Layout>
					<Component {...pageProps} />
				</Quiz13Layout>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
