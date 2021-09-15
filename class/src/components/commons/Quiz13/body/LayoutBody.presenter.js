import { Wrapper } from "./LayoutBody.styles";

export default function LayoutBodyUI(props) {
	if (props.isOne) {
		return <Wrapper>One</Wrapper>;
	} else if (props.isTwo) {
		return <Wrapper>Two</Wrapper>;
	} else if (props.isThree) {
		return <Wrapper>Thee</Wrapper>;
	} else {
		return <Wrapper>Body</Wrapper>;
	}
}
