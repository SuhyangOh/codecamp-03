import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
	mutation createBoard($createBoardInput: CreateBoardInput!) {
		createBoard(createBoardInput: $createBoardInput) {
			_id
		}
	}
`;

export default function WebEditorPage() {
	const { handleSubmit, register, setValue, trigger } = useForm();
	const [createBoard] = useMutation(CREATE_BOARD);
	const router = useRouter();

	const onClickMyButton = async (data) => {
		console.log(data.contents);
		try {
			const result = await createBoard({
				variables: {
					createBoardInput: {
						writer: data.writer,
						password: data.password,
						title: data.title,
						contents: data.contents,
					},
				},
			});
			router.push(
				`/week7/28-02-web-editor-detail/${result.data.createBoard._id}`
			);
		} catch (error) {
			console.log(error);
		}
	};

	function onChangeMyEditor(value) {
		// register로 등록하지 않고, 강제로 값을 넣어주는 기능
		setValue("contents", value === "<p></br></p>" ? "" : value);

		// onChange 됐는지 react-hook-form에 알려주는 기능
		trigger("contents");
	}

	return (
		<form onSubmit={handleSubmit(onClickMyButton)}>
			작성자: <input type="text" {...register("writer")} />
			<br />
			비밀번호: <input type="password" {...register("password")} />
			<br />
			제목: <input type="text" {...register("title")} />
			<br />
			내용: <ReactQuill onChange={onChangeMyEditor} />
			<br />
			<button>등록하기</button>
		</form>
	);
}
