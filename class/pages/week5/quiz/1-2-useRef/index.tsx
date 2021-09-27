import { useEffect, useRef } from "react";

export default function QuizUseRefPage() {
	const inputRef = useRef<HTMLInputElement>();

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<div>
			<input ref={inputRef} />
		</div>
	);
}
