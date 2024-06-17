// 논리연산자, 비교연산자, 일치연산자 결과값으로 나온 true, false를 가지고

/*switch (변수명 or 값){
	case 값1:
			내용
	case 값2:
			내용
	...
	default:
			내용
}*/

// 사과 : 100원
// 바나나 : 200원
// 키위 : 300원
// 멜론 : 500원
// 수박 : 500원
// 사고싶은 과일을 입력(promt)해서 그 가격을 출력(alert)


let fruit = prompt("사고싶은 과일을 입력하세요");
let price;
switch (fruit){
	case '사과':
		price = 100;
		break;
	case '바나나':
		price = 200;
		break;
	case '키위':
		price = 300;
		break;
	case '멜론':
	case '수박':
		price = 500;
		break;
	default:
		alert('잘못 입력하셨습니다');
} 

alert(`${fruit}의 가격은 ${price}원입니다`);
