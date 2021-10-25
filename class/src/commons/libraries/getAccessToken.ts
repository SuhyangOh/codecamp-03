import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import { Dispatch, SetStateAction } from "react";

export const RESTORE_ACCESS_TOKEN = gql`
	mutation restoreAccessToken {
		restoreAccessToken {
			accessToken
		}
	}
`;

// 1. refreshToken으로 새로운 accessToken 재발급 받기
export async function getAccessToken(
	setAccessToken: Dispatch<SetStateAction<string>>
) {
	try {
		const graphQLClient = new GraphQLClient(
			"http://backend03.codebootcamp.co.kr/graphql",
			{ credentials: "include" }
		);
		const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
		const newAccessToken = result.restoreAccessToken.accessToken;
		setAccessToken(newAccessToken);
	} catch (error) {
		console.log(error.message);
	}
}