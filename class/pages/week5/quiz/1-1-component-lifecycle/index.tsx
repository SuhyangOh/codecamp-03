import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function QuizComponentLifeCyclePage() {
	const router = useRouter();
	const [isChange, setIsChange] = useState(false);

	useEffect(() => {
		alert("Rendered!");
		return () => {
			alert("Moved!");
		};
	}, []);

	function onClickChange() {
		setIsChange(true);
		alert("Changed!");
	}

	function onClickMove() {
		router.push("/");
	}

	return (
		<div>
			<button onClick={onClickChange}>변경</button>
			<button onClick={onClickMove}>이동</button>
		</div>
	);
}
