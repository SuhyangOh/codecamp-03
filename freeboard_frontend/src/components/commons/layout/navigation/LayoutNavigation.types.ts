import { MouseEvent, MouseEventHandler } from "react";

export interface ILayoutNavigationUIProps {
  onClickMarket: MouseEventHandler<HTMLDivElement>;
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
}
