// console.log("hello world");

import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";
import Product from "./Product.postgres";

const typeDefs = gql`
	input createBoardInput {
		writer: String
		title: String
		age: Int
	}
	type Return {
		_id: String
		number: Int
		message: String
	}
	type Board {
		number: Int
		writer: String
		title: String
		age: Int
	}
	type Query {
		fetchBoard: Board
		fetchBoards: [Board]
		fetchProduct(productId: ID): ProductReturn
		fetchProducts(page: Int): [ProductReturn!]
	}
	type Mutation {
		# createBoard(writer: String, title: String, age: Int): Return
		createBoard(createBoardInput: createBoardInput): Return
		updateBoard: Return
		deleteBoard: Return
		createProduct(
			seller: String
			createProductInput: CreateProductInput!
		): Return
		updateProduct(
			productId: ID
			updateProductInput: UpdateProductInput!
		): Return
		deleteProduct(productId: ID): Return
	}
	input CreateProductInput {
		name: String
		detail: String
		price: Int
	}
	input UpdateProductInput {
		name: String
		detail: String
		price: Int
	}
	type ProductReturn {
		_id: ID
		seller: String
		name: String
		detail: String
		price: Int
	}
`;

const resolvers = {
	Query: {
		fetchBoard: async () => {
			// 데이터 베이스에서 해당하는 데이터 꺼내서 브라우즈에 던져주기(응답주기)

			const result = await Board.findOne({
				where: { number: 1, deletedAt: null },
			});

			return result;
			// return {
			// 	writer: result?.writer,
			// 	title: result?.title,
			// 	age: result?.age,
			// };
		},
		fetchBoards: async () => {
			const result = await Board.find({ where: { deletedAt: null } });
			return result;
		},
		fetchProduct: async (_: any, args: any) => {
			const result = await Product.findOne({
				where: {
					_id: args.productId,
					deletedAt: null,
				},
			});
			return result;
		},
		fetchProducts: async (_: any, args: any) => {
			const result = await Product.find({
				where: {
					page: args.page,
					deletedAt: null,
				},
			});
			return result;
		},
	},
	Mutation: {
		createBoard: async (_: any, args: any) => {
			// 데이터 베이스에 데이터 입력하기
			const result = await Board.insert({
				...args.createBoardInput,
				createdAt: new Date(),
				// title: args.createBoardInput.title,
				// writer: args.createBoardInput.writer,
				// age: args.createBoardInput.age,
			});
			return {
				message: "성공했습니다",
				number: result.identifiers[0].number,
			};
		},
		updateBoard: async (_: any, args: any) => {
			await Board.update({ number: 3 }, { writer: "영희" });
			return { message: "수정완료" };
		},
		deleteBoard: async () => {
			await Board.update({ number: 5 }, { deletedAt: new Date() });
			// await Board.delete({ number: 4 });
			return { message: "삭제완료" };
		},
		createProduct: async (_: any, args: any) => {
			const result = await Product.insert({
				seller: args.seller,
				...args.createProductInput,
			});
			return {
				message: "상품 등록 성공",
				_id: result.identifiers[0]._id,
				number: result.identifiers[0].number,
			};
		},
		updateProduct: async (_: any, args: any) => {
			const result = await Product.update(
				{ _id: args.productId },
				{
					...args.updateProductInput,
				}
			);
			return {
				message: "수정완료",
				_id: args.productId,
			};
		},
		deleteProduct: async (_: any, args: any) => {
			const result = await Product.update(
				{ _id: args.productId },
				{
					deletedAt: new Date(),
				}
			);
			return {
				message: "삭제완료",
				_id: args.productId,
			};
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

createConnection({
	type: "postgres",
	database: "postgres",
	username: "postgres",
	password: "postgres2021",
	port: 5016,
	host: "34.64.221.225",
	entities: [__dirname + "/*postgres.ts"],
	logging: true,
	synchronize: true,
})
	.then(() => {
		// 연결 성공시 실행
		console.log("접속완료");
		server.listen({ port: 4000 });
	})
	.catch((error) => {
		console.log(error);
	});
