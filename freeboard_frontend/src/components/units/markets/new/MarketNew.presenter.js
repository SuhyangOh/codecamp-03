import Modal from "antd/lib/modal/Modal";
import DaumPostcode from "react-daum-postcode";
import {
	ButtonWrapper,
	RadioLabel,
	InputWrapper,
	Title,
	Box,
	Picdiv,
	Setmaindiv,
	Setmain,
	NameInput,
	Postcode,
	NamePw,
	SubmitButton,
	StoryInput,
	PostcodeInput,
	AddressInput,
	PostcodeSearch,
	Label,
	Error,
	ReactQuillBox,
} from "./MarketNew.styles";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function MarketsNewPageUI(props) {
	return (
		<Box onSubmit={props.handleSubmit(props.onClickSubmit)}>
			{!props.isEdit && <Title>상품 등록하기</Title>}
			{props.isEdit && <Title>상품 수정하기</Title>}
			<NamePw>
				<InputWrapper>
					<Label>상품명</Label>
					<NameInput
						type="text"
						placeholder="상품명을 입력해주세요."
						{...props.register("name")}
						// defaultValue={props.data?.fetchBoard.writer}
					/>
					<Error>{props.formState.errors.name?.message}</Error>
				</InputWrapper>
				<InputWrapper>
					<Label>한줄요약</Label>
					<NameInput
						type="text"
						{...props.register("remarks")}
						placeholder="상품명을 작성해주세요."
					/>
					<Error>{props.formState.errors.remarks?.message}</Error>
				</InputWrapper>
			</NamePw>
			<InputWrapper>
				<Label>상품설명</Label>
				<ReactQuillBox onChange={props.onChangeMyEditor} />
				{/* <StoryInput
					placeholder="상품을 설명해주세요."
					{...props.register("contents")}
					// defaultValue={props.data?.fetchBoard.contents}
				/> */}
				<Error>{props.formState.errors.contents?.message}</Error>
			</InputWrapper>
			<InputWrapper>
				<Label>판매가격</Label>
				<NameInput
					placeholder="판매가격을 입력해주세요."
					{...props.register("price")}
					// defaultValue={props.data?.fetchBoard.writer}
				/>
				<Error>{props.formState.errors.price?.message}</Error>
			</InputWrapper>
			<InputWrapper>
				<Label>태그입력</Label>
				<NameInput
					name="writer"
					type="text"
					placeholder="#태그 #태그 #태그"
					onChange={props.onChangeWriter}
					defaultValue={props.data?.fetchBoard.writer}
				/>
				<Error>{props.writerError}</Error>
			</InputWrapper>
			<InputWrapper>
				<Label>주소</Label>
				<Postcode>
					<PostcodeInput
						type="text"
						name="zipcode"
						placeholder="07250"
						readOnly
						value={
							props.myZipCode ||
							props.data?.fetchBoard.boardAddress?.zipcode
						}
					/>
					<PostcodeSearch onClick={props.onToggleZipcode}>
						우편번호 검색
					</PostcodeSearch>
					{props.addressIsOpen && (
						<Modal visible={true} onCancel={props.onToggleZipcode}>
							<DaumPostcode onComplete={props.handleComplete} />;
						</Modal>
					)}
				</Postcode>
				<AddressInput
					readOnly
					value={
						props.myAddress ||
						props.data?.fetchBoard.boardAddress?.address
					}
				/>
				<AddressInput
					type="text"
					onChange={props.onChangeMyAddressDetail}
					defaultValue={
						props.data?.fetchBoard.boardAddress?.addressDetail
					}
				/>
			</InputWrapper>
			<Picdiv>
				<Label>사진첨부</Label>
				{new Array(2).fill(1).map((el, index) => (
					<Uploads01
						key={`${el}_${index}`}
						index={index}
						onChangeFiles={props.onChangeFiles}
					/>
				))}
			</Picdiv>
			<Setmaindiv>
				<Label>메인사진설정</Label>
				<Setmain type="radio" id="image1" name="radio-button" />
				<RadioLabel htmlFor="image1">사진1</RadioLabel>
				<Setmain type="radio" id="image2" name="radio-button" />
				<RadioLabel htmlFor="image2">사진2</RadioLabel>
			</Setmaindiv>

			<ButtonWrapper>
				{!props.isEdit && (
					<SubmitButton
						// isActive={props.isActive}
						isActive={true}
					>
						등록하기
					</SubmitButton>
				)}
				{props.isEdit && (
					<SubmitButton onClick={props.onClickEdit} isActive={true}>
						수정하기
					</SubmitButton>
				)}
			</ButtonWrapper>
		</Box>
	);
}
