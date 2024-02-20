// Generic (제네릭)
// 제네릭은 C#이나 Java와 같은 언어에서 재사용 가능한 컴포넌트를 만들기 위해 사용하는 기법이다.
// 단일 타입이 아닌 다양한 타입에서 작동할 수 있는 컴포넌트를 생성할 수 있다.
// 구체적인 타입을 지정하지 않고도 다양한 매개변수와 리턴 값에 대한 타입을 처리할 수 있다.
// 타입스크립트에서 제네릭을 통해 인터페이스, 함수 등의 재 사용성을 높일 수 있다.
var superPrint = function (arr) { return arr[0]; };
// 이제 각각의 리턴값의 타입을 확인하기 위해 변수에 넣어 확인해보자
// 각각의 변수 aa,bb,cc,dd 에 커서 올려 보면
// superPrint 함수는 굉장히 많은 형태의 타입을 받을 수 있다.(다형성)
var aa = superPrint([1, 2, 3, 4]); //const aa : number
var bb = superPrint([true, false, true]); // const bb : boolean
var cc = superPrint(['a', 'b', 'c']); //const cc : string
var dd = superPrint([1, 2, true, false]); //const dd : number|boolean
// Animal타입에서 <T>제네릭을 사용한 부분인 extraInfo 부분이 
// 타입으로 보낸 duckExtra 내용으로 replace됨
var duck = {
    name: 'duck',
    extraInfo: {
        favFood: 'rice',
    }
};
var panda = {
    name: 'panda',
    extraInfo: null
};
var z = [1, 2, 3, 4];
function printNum(arr) { }
//function printNum(arr:Array<number>){} // 위 코드와 같음
// reactjs 예시==========================================
// useState()
// 이건 타입스크립트가 state 타입을 알 수 없음
// useState<number>()
// 이렇게 제네릭을 보내면 useState의 call signiture가
// number 타입의 useState 가 되는 것임
