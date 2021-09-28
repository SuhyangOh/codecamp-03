import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import styled from "@emotion/styled";

export const Wrapperdiv = styled.div`
	padding: 20px;
`;

export const UploadButton = styled.div`
	width: 150px;
	height: 150px;
	background-color: lightgray;
	border: 1px solid black;
	padding: 15px;
	text-align: center;
	cursor: pointer;
	margin: 20px;
`;
export const UploadedImage = styled.img`
	width: 150px;
	height: 150px;
	border: 1px solid black;
	margin: 20px;
`;

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

export default function LeftImagesPage() {
	const [uploadFile] = useMutation(UPLOAD_FILE);
	const [createBoard] = useMutation(CREATE_BOARD);
	const [imageUrl1, setImageUrl1] = useState("");
	const [imageUrl2, setImageUrl2] = useState("");
	const [imageUrl3, setImageUrl3] = useState("");
	const fileRef = useRef<HTMLInputElement>();

	async function onChangeFile(event) {
		const myfile = event.target.files[0];

		if (!myfile) {
			alert("파일이 없습니다.");
			return;
		}

		if (myfile.size > 5 * 1024 * 1024) {
			alert("파일용량이 너무 큽니다.(제한: 5MB)");
			return;
		}

		if (!myfile.type.includes("jpeg") && !myfile.type.includes("png")) {
			alert("jpg나 png만 업로드 가능합니다.");
			return;
		}

		const result = await uploadFile({
			variables: {
				file: myfile,
			},
		});
		if (!imageUrl1) {
			setImageUrl1(result.data.uploadFile.url);
		} else if (!imageUrl2) {
			setImageUrl2(result.data.uploadFile.url);
		} else if (!imageUrl3) {
			setImageUrl3(result.data.uploadFile.url);
		}
	}

	function onClickDiv() {
		fileRef.current?.click();
	}

	function onClickSubmit() {
		try {
			createBoard({
				variables: {
					createBoardInput: {
						writer: "test",
						password: "test",
						title: "test",
						contents: "test",
						images: [imageUrl1, imageUrl2, imageUrl3],
					},
				},
			});
			alert("작성완료");
		} catch (error) {
			alert(error);
		}
	}

	return (
		<Wrapperdiv>
			{!imageUrl1 ? (
				<UploadButton onClick={onClickDiv}>
					+
					<br />
					Upload
				</UploadButton>
			) : (
				<UploadedImage
					src={`https://storage.googleapis.com/${imageUrl1}`}
				/>
			)}
			{!imageUrl2 ? (
				<UploadButton onClick={onClickDiv}>
					+
					<br />
					Upload
				</UploadButton>
			) : (
				<UploadedImage
					src={`https://storage.googleapis.com/${imageUrl2}`}
				/>
			)}
			{!imageUrl3 ? (
				<UploadButton onClick={onClickDiv}>
					+
					<br />
					Upload
				</UploadButton>
			) : (
				<UploadedImage
					src={`https://storage.googleapis.com/${imageUrl3}`}
				/>
			)}

			<input
				ref={fileRef}
				style={{ display: "none" }}
				type="file"
				onChange={onChangeFile}
			/>
			<button onClick={onClickSubmit}>저장하기</button>
		</Wrapperdiv>
	);
}
