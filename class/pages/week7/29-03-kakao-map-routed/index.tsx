import { useEffect } from "react";

declare const window: typeof globalThis & {
	kakao: any;
};

export default function KaKaoMapPage() {
	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6aa7c0f32fa35f08cad564cde8b34d91";
		document.head.appendChild(script);

		script.onload = () => {
			window.kakao.maps.load(() => {
				const container = document.getElementById("map");
				const options = {
					center: new window.kakao.maps.LatLng(33.450701, 126.570667),
					level: 3,
				};
				const map = new window.kakao.maps.Map(container, options);
				console.log(map);
			});
		};
	});
	return (
		<div>
			<div id="map" style={{ width: "500px", height: "400px" }} />
		</div>
	);
}
