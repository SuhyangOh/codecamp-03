import styled from '@emotion/styled';

export const Box = styled.div`
    width: 1200px;
	margin: 100px;
    padding-top: 80px;
	padding-bottom: 100px;
	padding-left: 102px;
	padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

`;

export const Title = styled.div`   
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 36px;

`;

export const NamePw = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
`;

export const InputWrapper = styled.div`
	padding-top: 40px;
`;

export const NameInput = styled.input`
    width: 486px;
    height: 52px;
    border: 1px solid #BDBDBD;
    padding-left: 16px;
`;

export const Label = styled.div`
	padding-bottom: 16px;
	font-size: 16px;
	font-weight: 500;
`;

export const TitleInput = styled.input`
    width: 996px;
    height: 52px;
    border: 1px solid #BDBDBD;
    padding-left: 16px;
`;

export const StoryInput = styled.textarea`
    width: 996px;
    height: 480px;
    border: 1px solid #BDBDBD;
    Padding: 14px 16px;
`;

export const Postcode = styled.div`
    display: flex;
    flex-direction: row;
`;

export const PostcodeInput = styled.input`
    width: 77px;
    height: 52px;
    border: 1px solid #BDBDBD;
    Padding: 16px;
`;

export const PostcodeSearch = styled.button`
    width: 124px;
    height: 52px;
    margin-left: 16px;
    background: #000000;
    color: #FFFFFF;
    cursor: pointer;
`;

export const AddressInput = styled.input`
    width: 996px;
    height: 52px;
    border: 1px solid #BDBDBD;
    margin-top: 16px;
	padding-left: 16px;
`;

export const YoutubeInput = styled.input`
    width: 996px;
    height: 52px;
    border: 1px solid #BDBDBD;
    Padding: 14px 16px;
`;

export const Picdiv = styled.div`
    width: 996px;
    padding-top: 40px;  
`;

export const PicButton = styled.button`
    width: 78px;
    height: 78px;
    background: #BDBDBD;
    margin-right: 24px;
    outline: none;
	border: none;
	cursor: pointer;
`;

export const Setmaindiv = styled.div`
    width: 996px;
	padding-top: 40px;
`;

export const Setmain = styled.input`
    cursor: pointer;
`;

export const RadioLabel = styled.label`
	margin-left: 8px;
	margin-right: 20px;
	font-weight: 500;
	cursor: pointer;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-top: 80px;
`;

export const SubmitButton = styled.button`
    padding: 14px 60px;
    width: 179px;
    height: 52px;
    background-color: ${(props) => props.isActive ? "yellow" : "gray"};
    border: none;
    font-size: 16px;
	font-weight: 500;
    margin-left: 12px;
	margin-right: 12px;
	cursor: ${(props) => props.isActive ? "pointer" : "default"};
`;


export const Error = styled.div`
	padding-top: 10px;
	font-size: 14px;
	color: red;
`


