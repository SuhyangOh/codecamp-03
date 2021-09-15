import { h, StyledSlider, Wrapper } from "./LayoutBanner.styles";

export default function LayoutBannerUI() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div>
			<Wrapper>
				<StyledSlider {...settings}>
					<div>
						<h>1</h>
					</div>
					<div>
						<h>2</h>
					</div>
					<div>
						<h>3</h>
					</div>
					<div>
						<h>4</h>
					</div>
					<div>
						<h>5</h>
					</div>
				</StyledSlider>
			</Wrapper>
		</div>
	);
}
