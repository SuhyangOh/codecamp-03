import styled from "@emotion/styled";

export const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  
`;
export const CommentTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;
export const CommentIcon = styled.img`
  margin-right: 14px;
`;
export const CommentTitle = styled.div`
  width: 34px;
  height: 27px;
  font: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`;

export const NewComment = styled.div``;
export const NewCommentTop = styled.div`
  margin-bottom: 20px;
`;

export const NewCommentInput = styled.input`
  padding-left: 20px;
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 24px;
  font: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
export const NewCommentInput2 = styled.textarea`
  padding-left: 20px;
  width: 1200px;
  height: 108px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  font: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1px solid #f2f2f2;
`;
export const CommentSubmit = styled.div`
  width: 1200px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-top: none;
  display: flex;
  flex-direction: row;
  //justify-content: center;
  margin-bottom: 42px;
`;

export const Length = styled.div`
    width: 43px;
    height: 24px;
    margin-left: 20px;
    margin-right: 1045px;
    margin-top: 14px;
    margin-bottom: 14px;

    font: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #BDBDBD;
    

`

export const CommentSubmitButton = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 91px;
  height: 52px;
  background-color: ${(props) => (props.isActive ? "pink" : "black")};
  font: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const Avatar2 = styled.img`
  margin-right: 16px;
  width: 40px;
  height: 40px;
`;

export const CommentDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommentTop = styled.div`
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 1082px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const UpdateIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-right: 16px;
`;
export const DeleteIcon = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const CommentName = styled.div`
  margin-right: 18px;
  margin-bottom: 4px;
  font: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const CommentStar = styled.div``;

export const CommentContentsDiv = styled.div`
  font: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  margin-bottom: 20px;
`;

export const CommentDate = styled.div`
  font: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
`;
