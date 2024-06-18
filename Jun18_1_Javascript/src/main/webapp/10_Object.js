// 객체
// 이름은 오빈규, 24살

let human ={
	name: "오빈규",
	age: 24,
};

console.log(human.name);
console.log(human['age']);

human.gender = "Male";
human['hairColor'] = "black";

delete human.hairColor;

//단축 프로퍼티
let name = "Beaver";
let age = 5;

/*let person = {
	name : name,
	age : age,	
	gender : "Male",
}
*/

let person ={
	name,
	age, 
	gender: "Male",
}

console.log(person.name);
console.log('birthday' in person);
console.log('age' in person);

for(let key in person){
	console.log(key);
	console.log(person[key]);
	}
	
function makeObject(name, age){
	return{
		name,
		age,
		hobby:"Game",
	}
}
let beaver = makeObject("Beaver",5);
console.log(beaver);
