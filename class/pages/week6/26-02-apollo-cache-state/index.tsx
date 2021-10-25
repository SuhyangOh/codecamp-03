import { gql, useMutation, useQuery } from "@apollo/client";
const FETCH_BOARDS = gql`
	query fetchBoards {
		fetchBoards {
			_id
			writer
			title
			contents
		}
	}
`;

const DELETE_BOARD = gql`
	mutation deleteBoard($boardId: ID!) {
		deleteBoard(boardId: $boardId)
	}
`;

const CREATE_BOARD = gql`
	mutation createBoards($createBoardInput: CreateBoardInput!) {
		createBoard(createBoardInput: $createBoardInput) {
			_id
			writer
			title
			contents
		}
	}
`;

export default function ApolloCacheStatePage() {
	const { data } = useQuery(FETCH_BOARDS);
	const [deleteBoard] = useMutation(DELETE_BOARD);
	const [createBoard] = useMutation(CREATE_BOARD);

	const onClickDelete = (boardId) => async () => {
		await deleteBoard({
			variables: { boardId },
			update(cache, { data }) {
				const deletedId = data.deleteBoard;
				cache.modify({
					fields: {
						fetchBoards: (prev, { readField }) => {
							// 1. 기존의 fetchBoards 10개에서
							// 지금 삭제된 아이디를 제외한 9개를 만들고
							// 2. 그렇게 만들어진 아홉개의 새로운 패치보드를 리턴하여
							// 덮어씌우기

							const newFetchBoards = prev.filter((el) => {
								return readField("_id", el) !== deletedId;
							});

							return [...newFetchBoards];
						},
					},
				});
			},
		});
	};

	const onClickCreate = () => {
		createBoard({
			variables: {
				createBoardInput: {
					writer: "영희",
					password: "1234",
					title: "영희입니다.",
					contents: "영희 초등학교",
				},
			},
			update(cache, { data }) {
				cache.modify({
					fields: {
						fetchBoards: (prev) => {
							// 추가된 createBoard 결과물과
							// 이전의 10개를 합쳐서 11개 돌려주기

							return [data.createBoard, ...prev];
						},
					},
				});
			},
		});
	};

	return (
		<>
			{data?.fetchBoards.map((el) => (
				<div key={el._id}>
					<span>{el.writer}</span>
					<span>{el.title}</span>
					<span>{el.contents}</span>
					<button onClick={onClickDelete(el._id)}>삭제하기</button>
				</div>
			))}
			<button onClick={onClickCreate}>등록하기</button>
		</>
	);
}
