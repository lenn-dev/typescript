// 타입스크립트의 가장 중요한 포인트는 타입체커와 소통하는것
// const나 let 같은 변수에 타입을 적용하는 방법 
// 변수 뒤에 : 붙이고 타입적기
var a = 1;
var b = '1';
var c = true;
var d = [1, 2];
var e = ['1', '2'];
var f = [true];
// 늘 타입을 적을 필요는 없다, TS로 하여금 추론하게 하는 것이 좋음
var g = [1, 2];
// === optional 타입 ===
// player 란 객체가 있다.
// const player ={
//     name:"lena"
// }
// player의 요소는 name과 age가 있는데 age는 있을 수도/없을 수도 있다면 이를 어떻게 표현하는가?
// player를 오브젝트로 타입 설정시에 player에 name property가 없다고 나옴
// 왜? object는 name 이라는 요소가 없기 때문 ?? 
// const player: object = {
//    name: 'lena',
// };
// player_.name
// 따라서 다음과 같이 표현
// object란 단어보다 {}를 활용함
// const player : {name:string,age?:number} = {name:"lena"}
// player 는 { 오브젝트 } 타입이고, 그 오브젝트엔 name과 age라는 프로퍼티가 있다.
// age는 ? optional 이기때문에 없어도 됨.
var player = {
    name: 'lena',
};
// age는 number|undefined 일수 있는 optional property 이기 때문에
// 다음과 같이 조건문을 쓰면 에러가 남
// if(player.age <10){}
// player.age가 undefined이 아닌 경우를 함께 조건에 넣어야 함.
// age가 있고 age가 10보다 작을 때에...
if (player.age && player.age < 10) { }
var lena = {
    name: 'Lena',
};
var Kay = {
    name: 'Kay',
    age: 12,
};
// === 함수에 타입을 적용하는 방법 ===
// 함수 안에서 player 오브젝트 만든 후 return 할 것임
// playerMaker의 리턴 타입이 Player라고 선언해주면
// 함수에 age property가 없어도 Player 타입에 있기 때문에
// age 요소의 값을 변경할 수 있음.
// function playerMaker(name:string) : Player{
//     return {
//         //name:name
//         name
//     }
// }
// 이를 arrow 함수로 바꿔주면 아래와 같음
// 여기서 마지막 리턴값이 ({}) 이렇게 표현된 이유
// (parameter) => {} returns nothing
// (parameter:string):Player => ({}) return an object
var playerMaker = function (name) { return ({ name: name }); };
var nico = playerMaker('nico');
nico.age = 12;
// === readonly type ===
// ts 에서만 작동하고 js 엔 반영이 안되고 작동안됨
// 따라서 ts에선 immutable하지만 js 에선 얼마든지 mutable함
var numbers = [1, 2, 3, 4];
//numbers.push(1) //수정불가능
// === Tuple: 정해진 갯수만큼의 요소를 가진 배열, 특정위치에 특정타입 지정 ===
// ts에만 있고 js엔 없음
// 이런 보호장치는 코드저장하고 실제 production 환경으로 push하기 전에 오류 확인할 수 있어서 좋음
var player1 = ['lena', 12, false];
//player1[0] =1 // 첫번째 요소는 string이어서 number 넣으려고 하면 오류
var x = undefined;
var y = null;
// === any type ===
// 보통 사용하길 권장하지 않는다
// 모든 타입을 수용하기 때문에 ts 타입체크가 되지 않으므로
var h = []; //아무 값이 없을 때는 기본적으로 any타입
var j = [1, 2, 3, 4];
var k = true;
j + k;
// === unknown type ===
// api 로 부터 정보를 받는데 그 정보의 타입을 모를때 unknown 을 쓸 수 있음
var l;
// unknown 이라 아래 수식이 허용되지 않음
// let m = l + 1;
// 먼저 타입체크 먼저
if (typeof l === 'number') {
    var m = l + 1;
}
if (typeof l === 'string') {
    var m = l.toUpperCase();
}
// === void type ===
// 아무것도 return 하지 않는 함수를 대상으로 사용
function hello1() {
    console.log('x');
}
// === never type ===
// 함수에서 exception(예외)발생시 사용
function hello2() {
    //return 'x'
    throw new Error('x');
}
// 아래 함수에서 각각의 조건식에서 반환하는 name의 타입은
// 처음 두개의 조건식에서 parameter로 받는 type의 조건을 다 썼기 때문에
// 나머지는 never일 수 밖에 없음
// 각각 string, number, never이다.
// | and & are only for types.
// || and && are for `if/else` and the like on JS.
function neverCheker(name) {
    if (typeof name === 'string') {
        name;
    }
    else if (typeof name === 'number') {
        name;
    }
    else {
        name;
    }
}
