import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  function onClickMenu(event) {
    router.push(event.target.id);
  }
  function onClickMarket(event) {
      router.push(event.target.id)
  }

  return (
    <LayoutNavigationUI 
        onClickMarket={onClickMarket}
        onClickMenu={onClickMenu} 
    />
  )
}
