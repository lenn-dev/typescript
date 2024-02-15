// generic
// generic 은 요구사항에 따라 call signiture를 생성(generating)해주는 역할
// call signiture 작성시에 여기에 들어올 확실한 타입을 모를 때 사용함
// 타입의 여러가지 경우의 수를 모두 명시하는 것은 비효율적이기 때문
// 타입스크립트로 하여금 타입을 추정하게끔 만듦
// generic 은 모든 타입을 추정하여 나타내 주기 때문에 편리
// '제네릭은 선언시점이 아니라 생성시점에 타입을 명시하여
// 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다'
var superPrint = function (arr) { return arr[0]; };
// 이제 각각의 리턴값의 타입을 확인하기 위해 변수에 넣어 확인해보자
// 각각의 변수 aa,bb,cc,dd 에 커서 올려 보면 
var aa = superPrint([1, 2, 3, 4]); //const aa : number
var bb = superPrint([true, false, true]); // const bb : boolean
var cc = superPrint(["a", "b", "c"]); //const cc : string
var dd = superPrint([1, 2, true, false]); //const dd : number|boolean
var len = {
    name: " lena",
    extraInfo: {
        favFood: "kimchi"
    }
};
var lynn = {
    name: "lynn",
    extraInfo: null
};
var z = [1, 2, 3, 4];
function printNum(arr) { }
//function printNum(arr:Array<number>){}
// reactjs 예시==================
//useState() 
//이건 타입스크립트가 state 타입을 알 수 없음
//useState<numver>()
// 이렇게 제네릭을 보내면 useState의 call signiture이 
// number 타입의 useState 가 되는 것임
