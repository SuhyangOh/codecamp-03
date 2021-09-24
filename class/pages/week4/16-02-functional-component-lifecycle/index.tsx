import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

export default function FunctionalComponentLifecyclePage() {
	const router = useRouter();
	const [count, setCount] = useState(0);
	const inputRef = useRef<HTMLInputElement>();

	// componentDidMount와 동일
	useEffect(() => {
		console.log("컴포넌트 마운트 완료");
		inputRef.current.focus();
		// componentWillUnmount와 동일
		return () => {
			console.log("잘가요");
		};
	}, []);

	// componentDidUpdate와 동일
	useEffect(() => {
		console.log("컴포넌트 수정완료");
	});

	useEffect(() => {
		setCount((prev) => prev + 1);
	}, [count]);

	function onClickCount() {
		setCount((prev) => prev + 1);
	}

	function onClickMove() {
		router.push("/");
	}

	return (
		<div>
			현재카운트 : {count}
			<button onClick={onClickCount}>카운트 증가</button>
			<button onClick={onClickMove}>페이지 이동</button>
			<input type="text" ref={inputRef} />
		</div>
	);
}
