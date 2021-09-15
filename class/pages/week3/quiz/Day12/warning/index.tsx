import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const showModal = () => {
		setIsModalVisible(true);
	};

	const closeModal = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			<Button onClick={showModal}>모달창 열기</Button>
			<Modal
				visible={isModalVisible}
				onCancel={closeModal}
				onOk={closeModal}
			>
				게시글이 등록되었습니다.
			</Modal>
		</>
	);
}
