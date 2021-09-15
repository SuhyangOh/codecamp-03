import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalAdressPage() {
	const [isOpen, setIsOpen] = useState(true);

	function onToggleZipcode() {
		setIsOpen((prev) => !prev);
	}
	return (
		<>
			{isOpen && (
				<Modal visible={true} onCancel={onToggleZipcode}>
					<DaumPostcode onComplete={onToggleZipcode} />;
				</Modal>
			)}
		</>
	);
}
