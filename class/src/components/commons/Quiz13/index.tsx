import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutSideBar from "./sidebar/LayoutSidebar.container";
import LayoutBody from "./body/LayoutBody.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";
import BodyFour from "../../../../pages/week3/quiz/Day13/1-Layout/four/BodyFour.container";

const SideAndBody = styled.div`
	display: flex;
`;

const one = ["/week3/quiz/Day13/1-Layout/one"];
const two = ["/week3/quiz/Day13/1-Layout/two"];
const three = ["/week3/quiz/Day13/1-Layout/three"];
const four = ["/week3/quiz/Day13/1-Layout/four"];

export default function Quiz13Layout(props) {
	const router = useRouter();
	const isOne = one.includes(router.pathname);
	const isTwo = two.includes(router.pathname);
	const isThree = three.includes(router.pathname);
	const isFour = four.includes(router.pathname);

	return (
		<>
			<LayoutHeader />
			<LayoutBanner />
			<LayoutNavigation />
			<SideAndBody>
				<LayoutSideBar />
				{!isFour && (
					<LayoutBody isOne={isOne} isTwo={isTwo} isThree={isThree} />
				)}
				{isFour && <BodyFour />}
			</SideAndBody>
			<LayoutFooter />
		</>
	);
}
