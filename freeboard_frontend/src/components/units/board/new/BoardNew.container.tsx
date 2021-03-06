
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from './BoardNew.queries'
import BoardsNewPageUI from './BoardNew.presenter';
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "../../../commons/uploads/01/Uploads01.queries";

export default function BoardNewPage(props) {
    const [files, setFiles] = useState<(File | null)[]>([null, null, null]); 
    
    function onChangeFiles(file: File, index: number) {
        const newFiles = [...files];
        newFiles[index] = file;
        setFiles(newFiles);
    }

    const router = useRouter();
    
    const [mywriter, setWriter] = useState('')
    const [mypassword, setPassword] = useState('')
    const [mytitle, setTitle] = useState('')
    const [mycontents, setContents] = useState('')

    const [writerError, setWriterError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [contentsError, setContentsError] = useState('')

	const [createBoard] = useMutation(CREATE_BOARD);
	const [updateBoard] = useMutation(UPDATE_BOARD);

	const [isActive, setIsActive] = useState(false);

    function onChangeWriter(event){
		setWriter(event.target.value)
		if(event.target.value !== ""){
			setWriterError("")
		}
		if(event.target.value !== "" && mypassword !== "" && mytitle !== "" && mycontents !== ""){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
    }

    function onChangePassword(event){
    	setPassword(event.target.value)
		if(event.target.value !== ""){
			setPasswordError("")
		}
		if(mywriter !== "" && event.target.value !== "" && mytitle !== "" && mycontents !== ""){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
    }

    function onChangeTitle(event){
		setTitle(event.target.value)
		if(event.target.value !== ""){
			setTitleError("")
		}
		if(mywriter !== "" && mypassword !== "" && event.target.value !== "" && mycontents !== ""){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
    }

    function onChangeContents(event){
		setContents(event.target.value)
		if(event.target.value !== ""){
			setContentsError("")
		}
		if(mywriter !== "" && mypassword !== "" && mytitle !== "" && event.target.value !== ""){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
    }
    const[myYoutube, setMyYoutube] = useState("")
    function onChangeYoutube(event) {
        setMyYoutube(event.target.value);
    }

    const [myZipCode, setMyZipCode] = useState("");
	const [myAddress, setMyAddress] = useState("");
    const [myAddressDetail, setMyAddressDetail] = useState("");
	const [addressIsOpen, setAddressIsOpen] = useState(false);

	const handleComplete = (data) => {
		setMyAddress(data.address);
		setMyZipCode(data.zonecode);
		setAddressIsOpen(false);
	};

	function onToggleZipcode() {
		setAddressIsOpen((prev) => !prev);
	}

    function onChangeMyAddressDetail(event) {
        setMyAddressDetail(event.target.value)
    }

	function checkEmptySpace() {
		if(mywriter === ""){
			setWriterError("???????????? ??????????????????.")
		}
		if(mypassword === ""){
			setPasswordError("??????????????? ??????????????????.")
		}
		if(mytitle === ""){
			setTitleError("????????? ??????????????????.")
		}
		if(mycontents === ""){
			setContentsError("????????? ??????????????????.")
		}
	}

    const [uploadFile] = useMutation(UPLOAD_FILE);

    async function onClickSubmit(){
		try {
			checkEmptySpace()
            const uploadFiles = files.map((el) => (el ? uploadFile({ variables: { file: el } }) : null));
            const results = await Promise.all(uploadFiles); 
            const myImages = results.map((el) => el?.data.uploadFile.url || ""); 
            
			if(isActive){
				const result = await createBoard({
				variables : {
					createBoardInput : 
					{
						writer: mywriter,
						password: mypassword,
						title: mytitle,
						contents: mycontents,
                        youtubeUrl: myYoutube,
                        boardAddress: {
                            zipcode: myZipCode,
                            address: myAddress,
                            addressDetail: myAddressDetail,
                        },
                        images: myImages,
					}
				}
				})
				alert('???????????? ???????????????~')
				router.push(`/boards/${result.data.createBoard._id}`)
			}
		} catch(error) {
			console.log(error)
		}
	}  

	async function onClickEdit(){
		try {
			await updateBoard({
				variables : {
					password: mypassword,
					boardId: router.query.boardId,
					updateBoardInput: { title: mytitle, contents: mycontents, },
				}
			})
			alert('???????????? ???????????????~')
			router.push(`/boards/${router.query.boardId}`)
		} catch(error) {
			console.log(error.message)
		}
	} 


    return (
        <BoardsNewPageUI
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}

            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}

			isActive={isActive}
			isEdit={props.isEdit}
			onClickEdit={onClickEdit}
			data={props.data}
            onChangeYoutube={onChangeYoutube}
            handleComplete={handleComplete}
            onToggleZipcode={onToggleZipcode}
            onChangeMyAddressDetail={onChangeMyAddressDetail}
            addressIsOpen={addressIsOpen}
            myAddress={myAddress}
            myZipCode={myZipCode}

            onChangeFiles={onChangeFiles}
        />
    )
}