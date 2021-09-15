import LayoutBodyUI from "./LayoutBody.presenter";

export default function LayoutBody(props) {
	return (
		<LayoutBodyUI
			isOne={props.isOne}
			isTwo={props.isTwo}
			isThree={props.isThree}
		/>
	);
}
