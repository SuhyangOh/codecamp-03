import {
	Name,
	Pic,
	Row,
	Price,
	Table,
	Wrapper,
	NoPic,
	Details,
	Remarks,
	Tags,
	Seller,
	Counts,
	ScDiv,
	Avatar,
	PriceAndDetail,
	Checked_Item_Wrapper,
	Wrapper__Today__Product,
	Wrapper__Today__Product_Info,
	Wrapper__Heart__Score2,
	Heart2,
	Like__Score2,
	Url2,
	Name2,
	Price2,
	Tag2,
	Remark2,
	WWrapper,
	BestTitle,
	BestDiv,
	BestItem,
	BestPic,
	BestName,
	BestRemarks,
	BestPrice,
	BestNoPic,
	BestWrapper,
	SearchWrapper,
	SButton,
	SearchDiv,
	CalendarDiv,
	SearchButton,
} from "./MarketList.styles";

export default function MarketListPageUI(props) {
	return (
		<>
			<BestDiv>
				<BestTitle>베스트 상품</BestTitle>
				<BestWrapper>
					{props.best?.fetchUseditemsOfTheBest.map((el) => (
						<BestItem
							key={el._id}
							id={el._id}
							onClick={props.onClickMoveToDetail(el)}
						>
							<div>
								{el.images[0] ? (
									<BestPic
										src={`https://storage.googleapis.com/${el.images[0]}`}
									/>
								) : (
									<BestNoPic />
								)}
							</div>
							<BestName>{el.name}</BestName>
							<BestRemarks>{el.remarks}</BestRemarks>
							<BestPrice>{el.price}</BestPrice>
						</BestItem>
					))}
				</BestWrapper>
				<SearchWrapper>
					<SButton>판매중상품</SButton>
					<SButton>판매된상품</SButton>
					<SearchDiv type="text" placeholder="제품을 검색해주세요" />
					<CalendarDiv
						type="text"
						placeholder="2020.12.02~2020.12.02"
					/>
					<SearchButton>검색</SearchButton>
				</SearchWrapper>
			</BestDiv>

			<WWrapper>
				<Wrapper>
					<Table>
						{props.data?.fetchUseditems.map((el) => (
							<Row
								key={el._id}
								id={el._id}
								onClick={props.onClickMoveToDetail(el)}
							>
								{el.images[0] ? (
									<Pic
										src={`https://storage.googleapis.com/${el.images[0]}`}
									/>
								) : (
									<NoPic></NoPic>
								)}
								<PriceAndDetail>
									<Details>
										<Name>{el.name}</Name>
										<Remarks>{el.remarks}</Remarks>
										<Tags>{el.tags}</Tags>
										<ScDiv>
											<Avatar src="/images/avatar.png" />
											<Seller>{el.seller.name}</Seller>
											<Avatar src="/images/yellowheart.png" />
											<Counts>{el.pickedCount}</Counts>
										</ScDiv>
									</Details>

									<Price>{el.price}원</Price>
								</PriceAndDetail>
							</Row>
						))}
					</Table>
				</Wrapper>

				<Checked_Item_Wrapper>
					<Wrapper__Today__Product>
						오늘 본 상품
					</Wrapper__Today__Product>
					{props.basketItems?.map((el) => (
						<Wrapper__Today__Product_Info
							key={el._id}
							id={el._id}
							onClick={props.onClickMoveToDetail(el)}
						>
							<Wrapper__Heart__Score2>
								<Heart2 src="/images/yellowheart.png" />
								<Like__Score2>{el.pickedCount}</Like__Score2>
							</Wrapper__Heart__Score2>
							<Url2></Url2>
							<Name2>{el.name}</Name2>
							<Remark2>{el.remarks}</Remark2>
							<Price2>{el.price}원</Price2>
							<Tag2>{el.tags}</Tag2>
						</Wrapper__Today__Product_Info>
					))}
				</Checked_Item_Wrapper>
			</WWrapper>
		</>
	);
}
