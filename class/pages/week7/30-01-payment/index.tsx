import Head from "next/head";
export default function PaymentPage() {
	function onClickPayment() {
		var IMP = window.IMP; // Can be omitted
		IMP.init("imp49910675"); // Example: imp00000000
		IMP.request_pay(
			{
				// param
				pg: "html5_inicis",
				pay_method: "card",
				name: "Norway swivel chair",
				amount: 64900,
				buyer_email: "johndoe@gmail.com",
				buyer_name: "John Doe",
				buyer_tel: "010-4242-4242",
				buyer_addr: "Shinsa-dong, Gangnam-gu, Seoul",
				buyer_postcode: "01181",
			},
			function (rsp: any) {
				// callback
				if (rsp.success) {
					console.log(rsp);
					// Logic for when payment is successful
				} else {
					// Logic for when payment fails
				}
			}
		);
	}

	return (
		<>
			<Head>
				<script
					type="text/javascript"
					src="https://code.jquery.com/jquery-1.12.4.min.js"
				></script>
				<script
					type="text/javascript"
					src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
				></script>
			</Head>
			결제금액 : <input type="text" />
			<br />
			<button onClick={onClickPayment}>결제하기</button>
		</>
	);
}
