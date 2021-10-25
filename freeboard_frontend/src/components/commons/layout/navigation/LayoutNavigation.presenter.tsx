import { BlackDiv, WhiteDiv } from "../header/LayoutHeader.styles";
import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
      <>
      <BlackDiv/>
        <WhiteDiv/>
            <BlackDiv/>
    <Wrapper>
        <>|</>
      <MenuItem id="/openapis" onClick={props.onClickMenu}>
       ??
      </MenuItem>
      <>|</>
      <MenuItem id="/boards/list" onClick={props.onClickMenu}>
        자유게시판
      </MenuItem>
      <>|</>
      <MenuItem id="/markets" onClick={props.onClickMarket}>
        중고마켓
      </MenuItem>
      <>|</>
      {/* <MenuItem id="/mypages" onClick={props.onClickMenu}>
        마이페이지
      </MenuItem> */}
    </Wrapper>
    </>
  );
}
