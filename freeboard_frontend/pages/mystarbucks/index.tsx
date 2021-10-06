import { withAuth } from "../../src/components/commons/hocs/withAuth";

const myStarbucks = () => {
	// accessToken이 있는가?
	// accessToken이 없다면, login 페이지로 보내기
	return (
		<div>
			<div>환영합니다</div>
		</div>
	);
};

export default withAuth(myStarbucks);
