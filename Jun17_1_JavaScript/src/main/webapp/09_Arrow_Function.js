/*sayHello();
function sayHello(){
	console.log("Hello");
}

let sayHello2 = function(){
	console.log("Hello");
}
sayHello2();
*/

var add = function(num1, num2) {
	return num1 + num2;
}

var add = (num1, num2) => {
	return num1 + num2;
}

var add = (num1, num2) => {
	num1 + num2;
}

//반환할 코드가 한줄 이라면 =>중괄호 생략 가능
var add = (num1, num2) => num1 + num2;

// 파라미터가 하나라면 파라미터가 들어갈 소괄호 생략 가능
let sayHello2 = name => 'Hello ${name}';

// 파라미터가 없는 함수라면 괄호는 생략 불가
let asdf= ()=> console.log(asdf);


let human = {
	name : "오제록",
    walk : function(){
		console.log("또각또각");
	}	// method : 객체 프로퍼티(속성)로 할당 된 함수
}
human.walk();




