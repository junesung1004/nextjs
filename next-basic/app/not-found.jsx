export default function NotFoundPage(){
    return(
        <>
            <h1>페이지를 출력할 수 없습니다!</h1>
            <p>자세한 사항은 고객센터에 문의해주세요.</p>
        </>
    )
}

/*
오류 페이지 출력
nextjs는 기본적으로 404오류페이지를 자동으로 처리하게 되어 있다/
사용자가 custom 404페이지를 구현하기 위해서는 
구버전(pages/404.jsx)를 생성 - 13버전 이하
신버전(app/not-found.jsx)를 생성 (파일명은 지정되어 있으므로 변경하지 말것)

*/ 