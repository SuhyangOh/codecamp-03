import {Pink, Imdiv, Qdiv, Noticediv, Gray, Bardiv, Bottomdiv, Category, Line, ItemWrapper, Itemdiv, Numberdiv, Questiondiv, Statusbar, Wrapper, SearchDiv, MyDiv, Mypicdiv} from '../../../styles/Quiz01-faq'

export default function Quiz01FAQPage() {
    return(
        <Wrapper>
            <Statusbar></Statusbar>
            <Category>
                <SearchDiv>
                    <img src="/images/search.png" />
                </SearchDiv>
                <Mypicdiv>
                    <MyDiv>마이</MyDiv>
                    <img src="/images/profile.png" />
                    <Imdiv>임정아</Imdiv>
                    <img src="/images/arrow.png" />
                </Mypicdiv>
                <Noticediv>
                    <Gray>공지사항</Gray>
                    <Gray>이벤트</Gray>
                    <Pink>FAQ</Pink>
                    <Gray>Q&#38;A</Gray>
                </Noticediv>
            </Category>
            <Line></Line>
            <ItemWrapper>
                <Itemdiv>
                    <Qdiv>
                        <Numberdiv>
                            Q. Q1
                        </Numberdiv>
                        <Questiondiv>
                            리뷰 작성은 어떻게 하나요?
                        </Questiondiv>
                    </Qdiv>
                    <div>
                        <img src="/images/rarrow.png" />
                    </div>
                </Itemdiv>

                <Itemdiv>
                    <Qdiv>
                        <Numberdiv>
                            Q. Q2
                        </Numberdiv>
                        <Questiondiv>
                            리뷰 수정/삭제는 어떻게 하나요?
                        </Questiondiv>
                    </Qdiv>
                    <div>
                        <img src="/images/rarrow.png" />
                    </div>
                </Itemdiv>

                <Itemdiv>
                    <Qdiv>
                        <Numberdiv>
                           Q. Q3
                        </Numberdiv>
                        <Questiondiv>
                            아이디/비밀번호를 잊어버렸어요.
                        </Questiondiv>
                    </Qdiv>
                    <div>
                        <img src="/images/rarrow.png" />
                    </div>
                </Itemdiv>

                <Itemdiv>
                    <Qdiv>
                        <Numberdiv>
                            Q. Q4
                        </Numberdiv>
                        <Questiondiv>
                            회원탈퇴를 하고싶어요.
                        </Questiondiv>
                    </Qdiv>
                    <div>
                        <img src="/images/rarrow.png" />
                    </div>
                </Itemdiv>

                <Itemdiv>
                    <Qdiv>
                        <Numberdiv>
                            Q. Q5
                        </Numberdiv>
                        <Questiondiv>
                            출발지 설정은 어떻게 하나요?
                        </Questiondiv>
                    </Qdiv>
                    <div>
                        <img src="/images/rarrow.png" />
                    </div>
                </Itemdiv>

                <Itemdiv>
                    <Qdiv>
                        <Numberdiv>
                            Q. Q6
                        </Numberdiv>
                        <Questiondiv>
                            비밀번호를 변경하고 싶어요.
                        </Questiondiv>
                    </Qdiv>
                    <div>
                        <img src="/images/rarrow.png" />
                    </div>
                </Itemdiv>
            </ItemWrapper>
            <Line></Line>
            <Bottomdiv>
                <Bardiv>
                    <img src="/images/home.png" />
                    홈
                </Bardiv>
                <Bardiv>
                    <img src="/images/location.png" />
                    잇츠로드
                </Bardiv>
                <Bardiv>
                    <img src="/images/like.png" />
                    마이찜
                </Bardiv>
                <Bardiv>
                    <img src="/images/my.png" />
                    마이
                </Bardiv>
            </Bottomdiv>
        </Wrapper>
    )
}