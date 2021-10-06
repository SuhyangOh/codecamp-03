import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import { fileValidation } from "../../src/commons/libraries/validation";

const UPLOAD_FILE = gql`
	mutation uploadFile($file: Upload!) {
		uploadFile(file: $file) {
			url
		}
	}
`;
const CREATE_BOARD = gql`
	mutation createBoard($createBoardInput: CreateBoardInput!) {
		createBoard(createBoardInput: $createBoardInput) {
			_id
		}
	}
`;

export default function ImageUploadPreviewPage() {
	const [imageUrl, setImageUrl] = useState("");
	const [myFile, setMyFile] = useState("");
	const [uploadFile] = useMutation(UPLOAD_FILE);
	// const [createBoard] = useMutation(CREATE_BOARD);
	const fileRef = useRef<HTMLInputElement>();

	function onClickGray() {
		fileRef.current.click();
	}

	function onChangeFile(event) {
		const file = event.target.files[0];
		if (!fileValidation(file)) return;

		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		// 파일을 넣으면 임시 URL 이 부여된다.
		// 내 컴퓨터에서만 사용되는 임시 URL
		fileReader.onload = (data) => {
			// console.log(data.target.result);
			setImageUrl(data.target.result);
			setMyFile(file);
		};
	}

	async function onClickSubmit() {
		const start = performance.now();

		const result = await Promise.all([
			uploadFile({
				variables: {
					file: myFile,
				},
			}),
			uploadFile({
				variables: {
					file: myFile,
				},
			}),
			uploadFile({
				variables: {
					file: myFile,
				},
			}),
			uploadFile({
				variables: {
					file: myFile,
				},
			}),
			uploadFile({
				variables: {
					file: myFile,
				},
			}),
		]);
		// [result1, result2, result3 ...]
		// result.map((el) => (el.data.uploadFile.url))

		const urls = result.map((el) => el.data.uploadFile.url);

		// const result1 = await uploadFile({
		//   variables: {
		//     file: myFile,
		//   },
		// });
		// const result2 = await uploadFile({
		//   variables: {
		//     file: myFile,
		//   },
		// });
		// const result3 = await uploadFile({
		//   variables: {
		//     file: myFile,
		//   },
		// });
		// const result4 = await uploadFile({
		//   variables: {
		//     file: myFile,
		//   },
		// });
		// const result5 = await uploadFile({
		//   variables: {
		//     file: myFile,
		//   },
		// });
		const end = performance.now();
		console.log(end - start);

		// const url = result.data.uploadFile.url;

		// 게시물 등록
		// createBoard({variavles}:{
		// ...
		// images= urls
		// })
	}

	return (
		<>
			<div
				style={{
					width: "100px",
					height: "100px",
					backgroundColor: "gray",
				}}
				onClick={onClickGray}
			>
				이미지업로드!
			</div>
			<img src={imageUrl} />
			<input type="file" ref={fileRef} onChange={onChangeFile} />
			<button onClick={onClickSubmit}>게시물 등록하기</button>
		</>
	);
}
