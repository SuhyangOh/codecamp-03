import {
	Button,
	Avatar,
	BottomDiv,
	Box,
	Date,
	MiddleDiv,
	Name,
	NameDateDiv,
	TitleDiv,
	UpperDiv,
	Wrapper,
	LocationIcon,
	LinkIcon,
	IconWrapper,
	LikeWrapper,
	LikeIcon,
	LikeCount,
	DislikeIcon,
	DislikeCount,
	ImageWrapper,
	Image,
	Remarks,
	Like,
	Heart,
} from "./MarketDetail.styles";
import { Tooltip } from "antd";

export default function MarketDetailPageUI(props) {
	return (
		<Wrapper>
			<Box>
				<UpperDiv>
					<Avatar src="/images/avatar.png" />
					<NameDateDiv>
						<Name>
							{props.data
								? props.data.fetchUseditem.seller.name
								: "loading..."}
						</Name>
						<Date>
							{" "}
							Date :
							{props.data
								? props.data.fetchUseditem.createdAt.slice(
										0,
										10
								  )
								: "loading..."}
						</Date>
					</NameDateDiv>
					<IconWrapper>
						<LinkIcon src="/images/link.png" />
						<Tooltip
							placement="topRight"
							title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
						>
							<LocationIcon src="/images/location.png" />
						</Tooltip>
					</IconWrapper>
				</UpperDiv>
				<TitleDiv>
					<Remarks>{props.data?.fetchUseditem.remarks}</Remarks>
					{props.data ? props.data.fetchUseditem.name : "loading..."}
					<Like>
						<Heart
							src="/images/yellowheart.png"
							// onClick={props.onClickPick}
						/>
						<div>{props.data?.fetchUseditem.pickedCount}</div>
					</Like>
				</TitleDiv>
			</Box>
			<BottomDiv>
				<Button onClick={props.onClickList}>목록으로</Button>
				<Button onClick={props.onClickPurchase}>구매하기</Button>
			</BottomDiv>
		</Wrapper>
	);
}
