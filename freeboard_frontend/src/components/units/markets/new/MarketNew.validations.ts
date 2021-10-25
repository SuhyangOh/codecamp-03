import * as yup from "yup";

export const schema = yup.object().shape({
	name: yup.string().required("반드시 입력해야하는 필수 사항입니다."),
	remarks: yup
		.string()
		.min(5, "5자 이상 입력해주세요.")
		.required("반드시 입력해야하는 필수 사항입니다."),
	contents: yup
		.string()
		.min(10, "10자 이상 입력해주세요.")
		.required("반드시 입력해야하는 필수 사항입니다."),
	price: yup.number().required("반드시 입력해야하는 필수 사항입니다."),
});
