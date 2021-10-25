import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
	console.log("컨테이너가 렌더링 되었습니다.");
	let countlet = 0;
	const [countState, setCountState] = useState(0);

	const randomValue = useMemo(() => Math.random(), []);
	console.log(randomValue);

	const onClickCountLet = useCallback(() => {
		countlet++;
		console.log(countlet);
	}, []);

	const onClickCountState = useCallback(() => {
		setCountState((prev) => prev + 1);
		// console.log(countState);
	}, []);

	return (
		<>
			<div>카운트(let): {countlet}</div>
			<button onClick={onClickCountLet}>카운트(let) +1</button>

			<div>카운트(state): {countState}</div>
			<button onClick={onClickCountState}>카운트(state) +1</button>

			<MemoizationPresenterPage countState={countState} />
		</>
	);
}
