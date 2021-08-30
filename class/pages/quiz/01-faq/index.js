import {Line, ItemWrapper, Itemdiv, Numberdiv, Questiondiv, Statusbar, Wrapper} from '../../../styles/Quiz01-faq'

export default function Quiz01FAQPage() {
    return(
        <Wrapper>
            <Statusbar></Statusbar>
            <Line></Line>
            <ItemWrapper>
            <Itemdiv>
                <Numberdiv>
                    Q. Q1
                </Numberdiv>
                <Questiondiv>
                    리뷰 작성은 어떻게 하나요?
                </Questiondiv>
            </Itemdiv>

            <Itemdiv>
                <Numberdiv>
                    Q. Q2
                </Numberdiv>
                <Questiondiv>
                    리뷰 수정/삭제는 어떻게 하나요?
                </Questiondiv>
            </Itemdiv>

            <Itemdiv>
                <Numberdiv>
                    Q. Q3
                </Numberdiv>
                <Questiondiv>
                    아이디/비밀번호를 잊어버렸어요.
                </Questiondiv>
            </Itemdiv>

            <Itemdiv>
                <Numberdiv>
                    Q. Q4
                </Numberdiv>
                <Questiondiv>
                    회원탈퇴를 하고싶어요.
                </Questiondiv>
            </Itemdiv>

            <Itemdiv>
                <Numberdiv>
                    Q. Q5
                </Numberdiv>
                <Questiondiv>
                    출발지 설정은 어떻게 하나요?
                </Questiondiv>
            </Itemdiv>

            <Itemdiv>
                <Numberdiv>
                    Q. Q6
                </Numberdiv>
                <Questiondiv>
                    비밀번호를 변경하고 싶어요.
                </Questiondiv>
            </Itemdiv>

            </ItemWrapper>
            



        </Wrapper>
    )
}