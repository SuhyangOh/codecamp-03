/* eslint-disable camelcase */
import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 1200px;
`;

export const Table = styled.div`
	width: 1200px;
	display: flex;
	flex-direction: column;
`;
export const Row = styled.div`
	height: 200px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: 1px solid #bdbdbd;
	padding: 20px;
`;
export const Pic = styled.img`
	width: 160px;
	height: 160px;
	margin-right: 40px;
`;
export const NoPic = styled.div`
	width: 160px;
	height: 160px;
	background-color: #bdbdbd;
	margin-right: 40px;
`;

export const PriceAndDetail = styled.div`
	width: 1000px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Details = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Name = styled.div`
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	height: 36px;
	margin-bottom: 5px;
`;

export const Remarks = styled.div`
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 10px;
`;
export const Tags = styled.div`
	font-family: Noto Sans CJK KR;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 20px;
`;
export const ScDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Counts = styled.div`
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	color: #4f4f4f;
`;
export const Seller = styled.div`
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: #4f4f4f;
	margin-right: 10px;
`;
export const Price = styled.div`
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 36px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;
export const Avatar = styled.img`
	margin-right: 6px;
	width: 20px;
	height: 20px;
`;
export const Checked_Item_Wrapper = styled.div`
	width: 200px;
	height: 800px;
	position: sticky;
	margin-top: 100px;
	border: 1px solid #bdbdbd;
	top: 12%;
	left: 90%;
	padding: 15px 15px 15px 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
export const WWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 1500px;
`;
export const BestWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 1200px;
`;

export const Wrapper__Today__Product = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	font-size: 21px;
	font-weight: bold;
`;
export const Wrapper__Today__Product_Info = styled.div``;
export const Wrapper__Heart__Score2 = styled.span`
	display: flex;
	justify-content: flex-end;
`;
export const Heart2 = styled.img`
	width: 16px;
	height: 16px;
`;
export const Like__Score2 = styled.div`
	font-size: 13px;
	margin-left: 10px;
`;
export const Url2 = styled.div`
	width: 75px;
	height: 75px;
	background-color: lightskyblue;
	margin-left: 42px;
	margin-bottom: 8px;
`;
export const Name2 = styled.div`
	font-size: 15px;
	font-weight: bold;
`;
export const Remark2 = styled.div`
	font-size: 15px;
`;
export const Price2 = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin: 3px 0px 3px;
`;
export const Tag2 = styled.div`
	font-size: 14px;
	color: #bdbdbd;
`;

export const BestDiv = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 1200px;
	border-bottom: 1px solid #bdbdbd;
`;

export const BestTitle = styled.div`
	width: 1200px;
	height: 42px;
	font: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 42px;
	text-align: center;
	margin-top: 80px;
	margin-bottom: 40px;
`;

export const BestItem = styled.div`
	width: 282px;
	height: 391px;
	background: #ffffff;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	margin-bottom: 80px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const BestPic = styled.img`
	width: 242px;
	height: 242px;
	margin-bottom: 20px;
`;
export const BestNoPic = styled.div`
	width: 242px;
	height: 242px;
	margin-bottom: 20px;
	background-color: pink;
`;

export const BestName = styled.div`
	height: 27px;
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	margin-bottom: 4px;
`;

export const BestRemarks = styled.div`
	height: 18px;
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;
	color: #4f4f4f;
	margin-bottom: 12px;
`;

export const BestPrice = styled.div`
	height: 28px;
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 27px;
`;
export const SearchWrapper = styled.div`
	height: 90px;
	width: 1200px;
	display: flex;
	flex-direction: row;
`;

export const SButton = styled.div`
	width: 85px;
	height: 27px;
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	margin-right: 20px;
`;
export const SearchDiv = styled.input`
	margin-left: 352px;
	width: 282px;
	height: 52px;
	background: #f2f2f2;
	margin-right: 24px;
`;

export const CalendarDiv = styled.input`
	padding: 14px 16px;
	width: 282px;
	height: 52px;
	background: #ffffff;
	border: 1px solid #f2f2f2;
	box-sizing: border-box;
	border-radius: 10px;
	margin-right: 24px;
`;
export const SearchButton = styled.button`
	padding: 14px 16px;
	width: 78px;
	height: 52px;
	background: #000000;
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	color: #ffffff;
`;
