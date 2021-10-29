import styled from "@emotion/styled";
export const Table = styled.div`
	width: 980px;
	display: flex;
	flex-direction: column;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	margin-bottom: 40px;
`;
export const Roww = styled.div`
	height: 52px;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: 1px solid #bdbdbd;
	padding: 20px;
`;
export const Row = styled.div`
	height: 52px;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: 1px solid #bdbdbd;
	padding: 20px;
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
export const Column16 = styled.div`
	text-align: center;
	width: 16%;
`;

export const Column32 = styled.div`
	text-align: center;
	width: 32%;
`;

export const ColumnPoint = styled.div`
	text-align: center;
	width: 250px;
`;
export const ColumnTitle = styled.div`
	width: 60%;
	text-align: center;
`;

export const SearchDiv = styled.div`
	margin-top: 52px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
`;

export const Mydiv = styled.div`
	height: 24px;
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	margin-left: 10px;
	margin-right: 10px;
`;

export const MpWrapper = styled.div`
	width: 300px;
	height: 1200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 80px;
	border-right: 1px solid #bdbdbd;
	margin-right: 40px;
`;

export const MpTitle = styled.div`
	font-family: Noto Sans CJK KR;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 36px;
	color: #000000;
`;

export const MpName = styled.div`
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 36px;
	color: #000000;
`;

export const MpDiv = styled.div`
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
`;

export const MyPage = styled.div`
	display: flex;
`;
export const MyMarket = styled.div`
	display: flex;
	flex-direction: column;
`;
