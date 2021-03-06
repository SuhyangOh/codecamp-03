// // ======================================================================
// // graphql-API 문제
// // ======================================================================
// // http://example.codebootcamp.co.kr/graphql 에서 제공하는 API를 사용하세요.
// // ======================================================================

// 1) 철수의 나이는 몇살인가요?(나이만 조회해 주세요.)
        // query{
        //     fetchProfile(name: "철수"){
        //       age
        //     }
        //   }

// 2) 영희의 학교는 어디인가요?(학교만 조회해 주세요.)
        // query{
        //     fetchProfile(name: "영희"){
        //       school
        //     }
        //   }

// 3) 3번 게시글의 내용과 작성일이 무엇인가요?(내용과 작성일만 조회해 주세요.)
        // query{
        //     fetchBoard(number: 3){
        //       title
        //       contents
        //     }
        //   }

// 4) 본인의 이름으로 프로필을 작성해 보세요.
        // mutation {
        //     createProfile(
        //       name: "오수향", 
        //       age: 24, 
        //       school: "다람쥐초등학교")
        //     {message}
        //   }

// 5) 본인의 이름으로 게시글을 작성해 보세요.
        // mutation{
        //     createBoard(
        //       writer: "오수향", 
        //       title: "제목",
        //         contents: "내용"
        //     ){message}
        //   }

// 6) 자신의 프로필을 조회해 보세요.
        // query{
        //     fetchProfile(name: "오수향"){
        //       name
        //       age
        //       school
        //     }
        //   }


// 7) 자신의 게시글을 조회해 보세요.
        // query{
        //     fetchBoard(number: 10){
        //     writer
        //     title
        //     contents
        //     }
        // }

// 8) 본인의 프로필에서, 학교를 자신이 졸업한 초등학교로 바꿔보세요.
        // mutation{
        //     updateProfile(
        //       name: "오수향" school:"다람쥐") 
        //     {message}
        //   }


// 9) 본인의 게시글에서, 제목과 내용을 바꿔보세요.
        // mutation{
        //     updateBoard(
        //       number: 10, 
        //         title: "title"
        //       contents: "contents"
        //     ) 
        //     {message}
        //   }

// 10) 자신이 좋아하는 만화 주인공으로 프로필을 작성해 보세요.
        // mutation {
        //     createProfile(
        //       name: "피카츄", 
        //       age: 5, 
        //       school: "포켓몬초등학교")
        //     {message}
        //   }


// 11) 위 10번에서 작성한 프로필을 삭제해 보세요.
        // mutation{
        // 	deleteProfile(name:"피카츄"){
        //     message
        //   }
        // }

// 12) 상품을 하나 만들어 보세요.
        // mutation{
        //     createProduct(
        //       seller: "판매자", 
        //       createProductInput: {
        //         name: "상품명",
        //         detail: "디테일",
        //         price: 1000})
        //     {message}
        //   }

// 13) 위 12번에서 만들었던 상품의 가격을 500원 인상해 보세요.
        // mutation{
        //     updateProduct(
        //       productId: "b8d916a5-6453-4fa6-9c2c-baf80db113b7",
        //       updateProductInput: {
        //         price: 1500
        //       }
        //     ){message}
        //   }

// 14) 위에서 만든 상품을 조회하되, 가격만 조회해 보세요.
        // query{
        //     fetchProduct(
        //       productId: "b8d916a5-6453-4fa6-9c2c-baf80db113b7",
        //     ){price}
        //   }

// 15) 조회했던 상품을 삭제해 보세요.
        // mutation{
        //     deleteProduct(
        //       productId: "b8d916a5-6453-4fa6-9c2c-baf80db113b7",
        //     ){message}
        //   }

// 16) 삭제한 상품이 정말로 삭제되었는지 다시 한번 조회해 보세요.

// 17) 게시물 목록 중, 2페이지를 조회해 보세요.
        // query{
        //     fetchBoards(page: 2){
        //       title
        //     }
        //   }

// 18) 게시물 목록을 조회할 때, page를 입력하지 않으면, 어떤 결과가 발생하나요?
        // 제일 최근 페이지 조회

// 19) 프로필이 전체 몇 개가 있는지 확인해 보세요.
        // query{
        // 	fetchProfilesCount
        // }

// 20) 게시물은 몇 개가 있나요?
        // query{
        // 	fetchBoardsCount
        // }
