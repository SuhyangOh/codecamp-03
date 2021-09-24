import LayoutHeader from "./header/LayoutHeader.container";
import styled from "@emotion/styled";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout(props) {
    return (
        <>
            <LayoutHeader />
            <Body>{props.children}</Body>
        </>
    )
}