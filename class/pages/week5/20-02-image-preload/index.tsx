import { useEffect, useState, useRef } from "react";

export default function ImagePreLoadPage() {
	const [imageTag, setImageTag] = useState();
	const divRef = useRef();

	useEffect(() => {
		const img = new Image();
		img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
		img.onload = () => {
			setImageTag(img);
		};
	}, []);
	function onClickButton() {
		divRef.current?.appendChild(imageTag);
	}
	return (
		<div>
			<div ref={divRef}></div>
			<button onClick={onClickButton}>이미지 보여주기</button>
		</div>
	);
}
