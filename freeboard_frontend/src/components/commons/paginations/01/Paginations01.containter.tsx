import PaginationsPageUI from "./Paginations01.presenter";

export default function PaginationsPage(props) {
    const lastPage = Math.ceil(props.count / 10);
    function onClickPage(event) {
		props.refetch({ page: Number(event.target.id) });
	}

	function onClickNextPage() {
		if (props.startPage + 10 > lastPage) return;
		props.setStartPage((prev) => prev + 10);
	}
	function onClickPrevPage() {
		if (props.startPage <= 1) return;
		props.setStartPage((prev) => prev - 10);
	}


    return (
        <PaginationsPageUI 
            lastPage = {lastPage}
            startPage={props.startPage}
            onClickPage={onClickPage}
            onClickNextPage={onClickNextPage}
            onClickPrevPage={onClickPrevPage}
        />
    )
}