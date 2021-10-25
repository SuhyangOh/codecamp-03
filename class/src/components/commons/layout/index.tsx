import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";

const Wrapper = styled.div``;
const Body = styled.div``;
const SidebarWrapper = styled.div`
	display: flex;
`;
const Sidebar = styled.div`
	background-color: yellow;
	width: 300px;
`;

const HIDDEN = ["/week3/13-01-layout-hidden"];

export default function Layout(props) {
	const router = useRouter();
	const isHiddenFooter = HIDDEN.includes(router.pathname);
	return (
		<Wrapper>
			{/* <Header>여기는 헤더</Header> */}
			<LayoutHeader />
			<SidebarWrapper>
				<Sidebar>여기는 사이드바</Sidebar>
				<Body>{props.children}</Body>
			</SidebarWrapper>
			{!isHiddenFooter && <LayoutFooter />}
			{/* <Footer>여기는 푸터</Footer> */}
		</Wrapper>
	);
}
