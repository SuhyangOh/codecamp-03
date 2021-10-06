export default function HOFPage() {
	function onClickFunction(event) {
		alert(`${event.target.value}번째 입니다`);
	}

	const onClickFunction2 = (index) => (event) => {
		alert(`${index}번째 입니다.`);
	};

	return (
		<div>
			<div>HOF 연습페이지입니다.</div>
			<div>
				{["철수", "영희", "훈이"].map((el, index) => (
					<div key={index} onClick={onClickFunction2(index)}>
						{el}입니다.
					</div>
				))}
			</div>
		</div>
	);
}
