import styled from "@emotion/styled";

import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const Wrapper = styled.div``;
export const IconWrapper = styled.div`
	text-align: center;
`;

export const LinkIcon = styled.img`
	margin-right: 30px;
`;

export const LocationIcon = styled.img``;

export const ImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Image = styled.img`
	width: 996px;
	height: 480px;
	margin-bottom: 30px;
`;

export const Box = styled.div`
	padding-top: 80px;
	padding-bottom: 100px;
	padding-left: 102px;
	padding-right: 102px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const UpperDiv = styled.div`
	height: 161px;
	width: 100%;
	margin-bottom: 80px;
	border-bottom: 1px solid gray;
	display: flex;
	flex-direction: row;
	align-items: center;
`;
export const NameDateDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	display: felx;
	justify-content: flex-start;
	margin-right: 700px;
`;

export const Name = styled.div`
	height: 36px;
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	color: #000000;
	text-align: left;
`;
export const Date = styled.div`
	height: 24px;

	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	color: #828282;
`;
export const Avatar = styled.img`
	margin-right: 10px;
	width: 46.67px;
	height: 46.67px;
`;

export const TitleDiv = styled.div`
	height: 54px;
	margin-bottom: 40px;
	width: 996px;

	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	color: #000000;

	display: felx;
	justify-content: flex-start;
`;

export const MiddleDiv = styled.div`
	height: 1200px;
	width: 996px;
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	color: #000000;
`;

export const BottomDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-top: 100px;
	padding-bottom: 87px;
	border-bottom: 1px solid #bdbdbd;
	margin-bottom: none;
`;

export const Button = styled.button`
	width: 179px;
	height: 45px;
	background-color: white;
	border: 1px solid gray;
	margin: 0px 12px;
	cursor: pointer;
	padding-bottom: 14px;
	font: Noto Sans CJK KR;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	padding-top: 9.5px;
	:hover {
		background-color: gold;
		border-color: white;
	}
`;
export const LikeWrapper = styled.div`
	padding-top: 160px;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const LikeIcon = styled(LikeOutlined)`
	font-size: 24px;
	color: #ffd600;
	margin: 0px 20px;
	cursor: pointer;
`;

export const DislikeIcon = styled(DislikeOutlined)`
	font-size: 24px;
	color: #828282;
	margin: 0px 20px;
	cursor: pointer;
`;

export const LikeCount = styled.div`
	color: #ffd600;
`;

export const DislikeCount = styled.div`
	color: #828282;
`;
