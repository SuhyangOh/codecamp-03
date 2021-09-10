import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
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
  border-bottom: 1px solid black;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;
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
  justify-content: flex-end;
  margin-bottom: 42px;
`;

export const CommentSubmitButton = styled.button`
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
`;

export const Avatar2 = styled.img`
  margin-right: 10px;
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
