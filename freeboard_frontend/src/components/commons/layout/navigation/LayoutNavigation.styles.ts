import styled from "@emotion/styled";

export const WhiteDiv = styled.div`
    height: 5px;
    background-color: white;
    width: auto;
`

export const BlackDiv = styled.div`
    height: 10px;
    background-color: black;
    width: auto;
`

export const Wrapper = styled.div`
  height: 64px;
  background-color: #006241;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    color: orange;
  }
`;
