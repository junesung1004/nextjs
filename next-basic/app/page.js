import Image from "next/image";
import styles from "./page.module.css";
//import styles from '@/app/page.module.css'
//customize 

export default function Home() {
  return (
    <></>
  );
}

/*
프레임 워크 라이브러리

라이브러리 - 리액트  

프레임워크 - 뷰, 앵글러, nextjs

라이브러리
-특정한 문제를 해결하기 위한 툴
리액트는 ui구성하기 위한 툴이기 때문에 그외에 다른 요소들은 필요할때 내가 직접 라이브러리나 api를 추가해서
연결해야 한다.(useEffect, useState, router, redux...)

프레임워크
-솔루션을 해결하기 위한 큰 틀을 제공하는 방식
-대부분 사용 방법이 정해져 있다. 사용자는 이 방식을 따라야 한다.

nextjs는 리액트를 베이스로 하는 전체적인 솔루션을 제공하는 프레임워크라고ㅓ 한다.
-라우팅, seo, ssr, 풀스택


1. 쇼핑몰 
- 파이어베이스의 db 를 활용 제품 데이터를 만들고 목록을 출력해서 상품 리스트, 장바구니, 재고관리 
- 소셜 로그인 구현으로 사용자마다 다른 장바구니 구현
- 검색 기능


2. 블로그 
-파이어베이스 db를 활용해서 포스트를 작성하고 저장 관리
-소셜 로그인 기능으로 댓글 기능 및 포스트 관리

3. sns
- 파이어베이스 db를 활용해서 포스트관리 및 글쓰기 , 댓글 기능 
- 소셜로그인

4. 기업 랜딩 페이지
- 파이어베이스 db 활용
- 라우팅 활용



*/
