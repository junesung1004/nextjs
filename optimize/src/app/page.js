import styles from "./page.module.css";
import  Image  from "next/image";
import Item from '../../public/images/1.jpg'


/*
import할때 {}이 있는 경우와 없는 경우

{}가 없는 경우
default가 있을때 import 선언  
모듈에서 기본으로 내보내기 되어있는 항목을 가져올때 사용한다.
보통적으로 코드를 작성할 때 export default function component명(){}
default로 설정되어 있는 항목을 가져옴

{}를 넣어서 임포트해서 가져오는 경우
named import 선언 방법
모듈에서 특정 이름을 가진 항목들을 가져올때 사용
모듈에서 여러가지 항목을 내보내기 했을때 사용할 수 있다.


* 즉 default 없이 선언 되면 {코드이름} 안에 중괄호를 사용해야한다.
* default가 선언되고 아이템이 한개라면 {} 없이 사용해야 오류가 안나온다.
*/


/*
image 넣는 방법
img 태그 사용
<img src={'/images/1.jpg'} /> 로 사용할 수 있지만 이미지에 대한 최적화를 따로 제공하지는 않으며,
이미지를 가지고 있는 사이즈 그대로 브라우저에 로드한다.

Image 컴포넌트
이미지의 로딩을 자동으로 최적화시키며, 필요에 따라 이미지의 크기를 조정해준다.
효율적으로 이미지 포맷으로 자동 변환하는 기능을 제공한다.
*/
export default function Home() {
  return (
    <>
    <img src={'/images/1.jpg'} />
    <Image src={Item}/>
    {/* <Image src={'/'}/> 외부 이미지 경로는 경로명을 직접 기입해서 가져올 수 있다.*/}
    </>
  );
}
