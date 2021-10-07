import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import MyFormUI from "./Myform.presenter";
import { schema } from "./Myform.validatioins";
export default function Myform() {
	const { handleSubmit, register, formState } = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	function onClickLogin(data) {
		console.log(data);
	}
	return (
		<MyFormUI
			onClickLogin={onClickLogin}
			handleSubmit={handleSubmit}
			formState={formState}
			register={register}
		/>
	);
}
