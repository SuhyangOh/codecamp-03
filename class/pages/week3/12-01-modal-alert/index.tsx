import { Modal } from "antd";

export default function ModalAlertPage() {
	function onClickSuccess() {
		try {
			Modal.confirm({ content: "게시물 등록에 성공했습니다." });
		} catch (error) {
			Modal.error({ content: "게시물 등록에 실패했습니다." });
		}
	}

	function onClickFail() {
		try {
			throw new Error("강제 에러 발생");
		} catch (error) {
			Modal.error({ content: "게시물 등록에 실패했습니다." });
		}
	}
	return (
		<div>
			<button onClick={onClickSuccess}>알림창(성공)</button>
			<button onClick={onClickFail}>알림창(실패)</button>
		</div>
	);
}
