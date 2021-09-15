import { useState } from "react";

export default function StatePrevPage() {
	const [count, setCount] = useState(0);

	function onClickCount() {
		setCount((prev) => prev + 1);
		setCount((prev) => prev + 1);
		setCount((prev) => prev + 1);
	}

	return (
		<div>
			<div>count : {count}</div>
			<button onClick={onClickCount}>Increase Count</button>
		</div>
	);
}
