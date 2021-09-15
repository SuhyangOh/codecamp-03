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
		setIsOpen(false);
	};

	function onOpenZipcode() {
		setIsOpen(true);
	}
	function onCloseZipCode() {
		setIsOpen(false);
	}

	return (
		<>
			<button onClick={onOpenZipcode}>우편번호 검색</button>
			{isOpen && (
				<Modal visible={true} onCancel={onCloseZipCode}>
					<DaumPostcode onComplete={handleComplete} />;
				</Modal>
			)}
		</>
	);
}
