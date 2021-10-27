import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 95%;
`;
export const Title = styled.div`
	height: 42px;
	font: Roboto;
	font-weight: bold;
	font-size: 36px;
	line-height: 42px;
	text-align: center;
	color: #000000;
	margin-bottom: 40px;
	margin-top: 80px;
`;

export const BestDiv = styled.div`
	margin-bottom: 80px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
export const Best = styled.div`
	width: 23%;
	height: 257px;
	left: 360px;
	top: 778px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
	border-radius: 20px;
`;

export const Img = styled.img`
	border-radius: 20px 20px 0px 0px;
	width: 100%;
	height: 120px;
`;

export const InfoTitle = styled.div`
	font-size: 18px;
	font-weight: 500px;
`;

export const InfoBottom = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;

export const InfoBottomLeft = styled.div`
	width: 95px;
	height: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const InfoBottomRight = styled.div`
	width: 27px;
	height: 48px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Profile = styled.div`
	display: flex;
`;

export const ProfileImg = styled.img`
	width: 20px;
	height: 20px;
`;

export const Date = styled.div`
	font-size: 12px;
	font-weight: 400;
	color: #828282;
`;

export const Like = styled.img`
	width: 20px;
	height: 18px;
	margin-bottom: 10px;
`;

export const ProfileName = styled.div`
	margin-left: 5px;
	font-size: 16px;
	font-weight: 400;
`;
export const Pic = styled.div`
	height: 120px;
	background-color: pink;
`;

export const Info = styled.div`
	height: 137px;
	background-color: white;
`;

export const SearchDiv = styled.div`
	margin-bottom: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const SearchTitle = styled.input`
	width: 65%;
	height: 52px;
	background: #f2f2f2;
	border-radius: 10px;
	padding: 20px;
`;
export const SearchDate = styled.input`
	width: 20%;
	height: 52px;
	border: 1px solid #bdbdbd;
	text-align: center;
`;

export const SearchButton = styled.button`
	width: 10%;
	height: 52px;
	border: 1px solid black;
	background: #000000;
	border-radius: 10px;
	font: Noto Sans CJK KR;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	color: #ffffff;
	cursor: pointer;
`;

export const Table = styled.div`
	display: flex;
	// justify-content: space-between;
	flex-direction: column;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	margin-bottom: 40px;
`;
export const Row = styled.div`
	height: 52px;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: 1px solid #bdbdbd;
	cursor: pointer;

	:hover {
		color: blue;
	}
`;
export const ColumnHeaderTitle = styled.div`
	width: 70%;
	text-align: center;
`;

export const Column = styled.div`
	text-align: center;
	width: 10%;
`;

export const ColumnTitle = styled.div`
	width: 70%;
	text-align: center;
`;

export const BottomDiv = styled.div`
	height: 100px;
	display: flex;
	align-items: center;
`;
export const Vector = styled.img`
	width: 18px;
	height: 18px;
	margin-right: 11px;
`;

export const NewButton = styled.div`
	text-align: center;
	width: 171px;
	height: 52px;
	background: #ffffff;
	border: 1px solid #f2f2f2;
	box-sizing: border-box;
	border-radius: 10px;
	font-weight: 500;
	font-size: 16px;
	padding-top: 14px;
	padding-left: 19px;
	padding-right: 16px;
	cursor: pointer;
	:hover {
		background-color: gold;
		border-color: white;
	}
`;
