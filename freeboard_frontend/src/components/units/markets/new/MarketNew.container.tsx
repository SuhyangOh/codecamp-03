import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_USED_ITEM } from "./MarketNew.queries";
import BoardsNewPageUI from "./MarketNew.presenter";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "../../../commons/uploads/01/Uploads01.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./MarketNew.validations";

export default function MarketsNewPage(props) {
	const { handleSubmit, register, formState, setValue } = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	const [files, setFiles] = useState<(File | null)[]>([null, null]);

	function onChangeFiles(file: File, index: number) {
		const newFiles = [...files];
		newFiles[index] = file;
		setFiles(newFiles);
	}
	// Quill
	function onChangeMyEditor(value) {
		// register로 등록하지 않고, 강제로 값을 넣어주는 기능
		setValue("contents", value === "<p><br><p>" ? "" : value);
		console.log(value);
	}

	const router = useRouter();

	// const [isActive, setIsActive] = useState(false);

	const [myZipCode, setMyZipCode] = useState("");
	const [myAddress, setMyAddress] = useState("");
	const [myAddressDetail, setMyAddressDetail] = useState("");
	const [addressIsOpen, setAddressIsOpen] = useState(false);

	const handleComplete = (data) => {
		setMyAddress(data.address);
		setMyZipCode(data.zonecode);
		setAddressIsOpen(false);
	};

	function onToggleZipcode() {
		setAddressIsOpen((prev) => !prev);
	}

	function onChangeMyAddressDetail(event) {
		setMyAddressDetail(event.target.value);
	}

	const [createUseditem] = useMutation(CREATE_USED_ITEM);

	async function onClickSubmit(data) {
		try {
			console.log(data);
			const result = await createUseditem({
				variables: {
					createUseditemInput: { ...data },
				},
			});
			alert("상품을 등록합니다~");
			console.log(result.data.createUseditem._id);
		} catch (error) {
			alert(error);
		}
	}

	return (
		<BoardsNewPageUI
			data={props.data}
			handleComplete={handleComplete}
			onToggleZipcode={onToggleZipcode}
			onChangeMyAddressDetail={onChangeMyAddressDetail}
			addressIsOpen={addressIsOpen}
			myAddress={myAddress}
			myAddressDetail={myAddressDetail}
			myZipCode={myZipCode}
			onChangeFiles={onChangeFiles}
			handleSubmit={handleSubmit}
			formState={formState}
			register={register}
			onClickSubmit={onClickSubmit}
			onChangeMyEditor={onChangeMyEditor}
		/>
	);
}
