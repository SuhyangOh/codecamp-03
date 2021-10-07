import styled from "@emotion/styled/";

export interface IProps {
	isValid: boolean;
}

export const MyButton = styled.button`
	background-color: ${(props: IProps) => (props.isValid ? "yellow" : "gray")};
`;

export default function Button01(props) {
	return (
		<MyButton
			type={props.type}
			isValid={props.isValid}
			onClick={props.onClick}
		>
			버튼
		</MyButton>
	);
}
