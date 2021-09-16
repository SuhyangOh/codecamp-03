import { Rate } from "antd";
import {
    NewComment,
    NewCommentInput,
    NewCommentTop,
    NewCommentInput2,
    CommentSubmit,
    CommentSubmitButton,
    CommentDiv,
    Length,
  } from "../Comments.styles";

export default function BoardCommentsWriteUI(props) {
    return (
        <CommentDiv>
            <NewComment>
                <NewCommentTop>
                    {!props.isEdit && <NewCommentInput
                        onChange={props.onChangeCommentWriter}
                        name="commentwriter"
                        type="text"
                        placeholder="작성자"
                    />}
                    {props.isEdit && <NewCommentInput
                        readOnly
                        defaultValue={props.el.writer}
                    />}
                    <NewCommentInput
                        onChange={props.}
                        name="commentpassword"
                        type="password"
                        placeholder="비밀번호"
                    />
                    {!props.isEdit && <Rate onChange={props.handleRate} />}
                    {props.isEdit && <Rate onChange={props.handleRate} defaultValue={props.el.rate}/>}
                </NewCommentTop>
                {!props.isEdit && 
                    <NewCommentInput2
                        onChange={props.onChangeCommentContents}
                        name="commentcontents"
                        placeholder="개인정보를 공유 및 요청하거나, 명예 회손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                    />
                }
                {props.isEdit && 
                    <NewCommentInput2
                        onChange={props.onChangeCommentContents}
                        name="commentcontents"
                        defaultValue={props.el.contents}
                    />
                }
                
                <CommentSubmit>
                    <Length>
                        {props.contextLength}/100
                    </Length>
                    {!props.isEdit && 
                        <CommentSubmitButton
                            onClick={props.onClickSubmitComment}
                            isActive={props.commentIsActive}
                        >
                            등록하기
                        </CommentSubmitButton>
                    }
                    {props.isEdit && 
                        <CommentSubmitButton
                            onClick={props.onClickCommentUpdate}
                            isActive={props.update}
                        >
                            수정하기
                        </CommentSubmitButton>
                    }
                    
                </CommentSubmit>
        </NewComment>
        </CommentDiv>
    )
}