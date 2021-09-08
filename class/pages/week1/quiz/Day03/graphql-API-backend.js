// // ======================================================================
// // graphql-API 문제
// // ======================================================================
// // http://backend03.codebootcamp.co.kr/graphql 에서 제공하는 API를 사용하세요.
// // ======================================================================

// 1) createBoard를 활용해, 게시물을 하나 등록해 주세요.
        // mutation{
        //     createBoard(createBoardInput: {
        //       writer : "오수향",
        //       password: "1234",
        //       title: "제목",
        //       contents: "내용"
        //     }){_id}
            
        //   }


// 2) 등록한 게시글의 제목과 내용은 무엇인가요?
        // query{
        //     fetchBoards{
        //       title
        //       contents
        //     }
        //   }

// 3) 등록한 게시글에 좋아요를 1 올려주세요.
        // mutation{
        //     likeBoard(boardId: "612f1a7fabd89b00293add1a")
        //   }       

// 4) 등록한 게시글에 싫어요도 1 올려주세요.
        // mutation{
        //     dislikeBoard(boardId: "612f1a7fabd89b00293add1a")
        //   }

// 5) 등록한 게시글의 좋아요와 싫어요는 각각 몇 개 인가요? (fetchBoard를 활용해서 확인해 보세요.)
        // query{
        //     fetchBoards{
        //       likeCount
        //       dislikeCount
        //     }
        //   }

// 6) 현재 등록된 게시글의 총 갯수는 몇 개 인가요? (어떤 API를 활용하면 좋을지 찾아보세요!)
        // query{
        //     fetchBoardsCount
        //   }

// 7) 등록한 게시글의 제목을 수정해 보세요!
        // mutation{
        //     updateBoard(
        //       boardId: "612f1a7fabd89b00293add1a",
        //         password: "1234",
        //         updateBoardInput: {
        //         title: "title"
        //       }
        //     ){
        //       title
        //       contents
        //     }
        //   }

// 8) fetchBoards 전체 게시물 조회를 활용하여 내가 쓴 게시물을 검색해 보세요.(search 변수를 활용해요!)
        // query{
        //     fetchBoard(boardId: "612f1a7fabd89b00293add1a")
        //   {title contents writer}
        //   }

// 9) 등록한 게시글에 댓글을 3개 추가해 보세요.
        // mutation{
        //     createBoardComment(
        //       boardId: "612f1a7fabd89b00293add1a",
        //       createBoardCommentInput: {
        //         writer: "anonymous1"
        //         password: "1234"
        //         contents: "wow"
        //         rating: 5
        //       }
        //     ){contents}
        //   }

// 10) 첫번째 댓글의 내용을 수정해 보세요!
        // mutation{
        //     updateBoardComment(
        //         boardCommentId: "612f1ce2abd89b00293add1b"
        //     updateBoardCommentInput: {
        //         contents : "wowow"
        //     }	
        //     ){contents}
        // }


// 11) 두번째 댓글을 삭제해 보세요!
        // mutation{
        //     deleteBoardComment(
        //       boardCommentId: "612f1eb1abd89b00293add1f"
        //         password:"1234")
        //   }

// 12) 등록한 게시글에 달려있는 모든 댓글을 조회해 보세요.(작성자와 내용만 조회합니다.)
        // query{
        //     fetchBoardComments(boardId: "612f1a7fabd89b00293add1a") {
        //       writer
        //       contents
        //     }
        //   }

// 13) BEST게시글을 조회해 보세요! (API 이름을 잘 찾아보세요!)
        // query{
        //     fetchBoardsOfTheBest{
        //       writer
        //       title
        //     }
        //   }

// 14) 회원가입을 해보세요! 사용자, 즉 User를 만드는 API입니다!
        // mutation{
        //     createUser(createUserInput: {
        //       email: "aa@gmail.com"
        //       password : "1234"
        //       name : "suhyang"
        //     }) {
        //       name
        //     }
        //   }