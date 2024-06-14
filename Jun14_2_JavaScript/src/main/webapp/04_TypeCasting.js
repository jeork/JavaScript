// 수학, 영어점수를 입력받아서 평균 점수를 출력해주는 프로그램
// 출력(document.write)

let math = prompt("수학 점수:");
let eng = prompt("영어 점수:");
let avg = (math + eng) / 2;
document.write(`평균 점수: ${avg}`);

let math2 = 80;
let eng2 = 90;
let avg2 = (math2 + eng2) / 2;
document.write(`평균 점수: ${avg2}<br>`);


document.write("-----------------------<br>");
document.write("String() <br>");
document.write(
	String(3) +"<br>",
	String(true) +"<br>",
	String(false) +"<br>",
	String(null) +"<br>",
	String(undefined) +"<br>"
);
document.write("-----------------------<br>");

document.write("Number() <br>")
document.write(
	Number("1234") + "<br>",
	Number("asd") + "<br>",
	Number(true) + "<br>",
	Number(false) + "<br>"
);

let a = Number(prompt("asd"));
document.write(a + "<br>");


