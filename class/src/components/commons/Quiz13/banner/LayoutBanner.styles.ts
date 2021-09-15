import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
	background-color: pink;
	height: 500px;
`;

export const StyledSlider = styled(Slider)`
	.slick-list {
		width: 100%;
		margin: 0 auto;
	}

	.slick-slide div {
	}

	.slick-dots {
		bottom: -50px;
		margin-top: 200px;
	}

	.slick-track {
	}
`;

export const h = styled.h1`
	font-size: 1000px;
`;
