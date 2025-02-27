// 2. 제네릭을 추가한 함수 타입
type 상자<메타몽대장> = (
  첫번째인자: 메타몽대장,
  두번째인자: 메타몽대장
) => string;

// 사용 예시
const 과일상자: 상자<string> = (과일, 과일2) => {
  return `${과일} 포장완료`;
};

과일상자("사과", "딸기"); // "사과 포장완료"

type 타입통<메타몽> = (첫번쨰인자: 메타몽, 두번째인지: 메타몽) => 메타몽;

const 함수 : 타입통<string> = (첫번째인자,두번째인자) => {
    return 첫번째인자 + 두번째인자
}

타입통<메타몽> 이 자체가 함수이다. 
메타몽은 , 인자값의 타입이다.