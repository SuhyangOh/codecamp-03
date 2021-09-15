import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalAdressPage() {
	const [myZipCode, setMyZipCode] = useState("");
	const [myAddress, setMyAddress] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const handleComplete = (data) => {
		setMyAddress(data.address);
		setMyZipCode(data.zonecode);
		setIsOpen((prev) => !prev);
	};

	function onToggleZipcode() {
		setIsOpen((prev) => !prev);
	}

	return (
		<>
			<button onClick={onToggleZipcode}>우편번호 검색</button>
			{isOpen && (
				<Modal visible={true} onCancel={onToggleZipcode}>
					<DaumPostcode onComplete={handleComplete} />;
				</Modal>
			)}
		</>
	);
}
