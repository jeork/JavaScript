// 1~10까지 출력(document.write())

// for
// while
// do-while

let num=1;

for(let i=1; i<=10; i++){
	document.write(i + ' ');
}
document.write('<hr>');

while(num<=10){
	document.write(num+' ');
	num++;
}
document.write('<hr>');

let num2 = 1;	
do{
	document.write(num2+ ' ');
	num2++;
}
while(num2<=10);
	document.write('<hr>');