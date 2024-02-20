// Generic (제네릭)
// 제네릭은 C#이나 Java와 같은 언어에서 재사용 가능한 컴포넌트를 만들기 위해 사용하는 기법이다.
// 단일 타입이 아닌 다양한 타입에서 작동할 수 있는 컴포넌트를 생성할 수 있다.
// 구체적인 타입을 지정하지 않고도 다양한 매개변수와 리턴 값에 대한 타입을 처리할 수 있다.
// 타입스크립트에서 제네릭을 통해 인터페이스, 함수 등의 재 사용성을 높일 수 있다.

// '제네릭은 선언시점이 아니라 생성시점에 타입을 명시하여
// 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다'

// reactjs 에서 useState 이런 hook 에 <...> 이런 것을 붙이는 이유가 제네릭때문
// 보통은 다른 패키지를 사용하기 때문에 나의 제네릭을 생성하는 경우는 별로 없다.
// 다른 패키지나 라이브러리에 생성되어있는 제네릭을 사용하는 경우가 대다수

// === Concreate 타입(number, string, void , unknown...) 예시 ==========================================
// 배열을 받고 배열의 요소들을 print해주는 함수

// type SuperPrint = {
//     (arr:number[]):void
//     (arr:boolean[]):void
//     (arr:string[]):void
//     (arr:(number|boolean)[]):void
// }
// const superPrint : SuperPrint =(arr)=>{
//     arr.forEach(i => console.log(i))
// }
// superPrint([1,2,3,4])
// superPrint([true,false,true])
// superPrint(["a","b","c"])

// 수많은 타입의 경우의 수를 생각하여 배열타입을 일일히 명시해야 하는 번거로움이 있다.

// 여기서는 concrete 타입이 아닌 generic 타입을 받아서 해결할 수 있다.
// generic은 타입의 placeholder 같은 것으로 입력받는 값의 타입을 추론하여 함수를 사용할 수 있다.

// === generic 타입 사용 예시 ==================================================
// 먼저 타입스크립트에 generic을 사용하고 싶다고 선언
// call signiture 앞에 <T> 붙여줌
// <Potato> 해도 상관없지만 보통 관습적으로 <T>, <V> 를 많이 사용함
// 다음 call signiture는 제네릭을 받는다고 TS 에게 알려주고 파라미터 타입에 T를 넣어줌

// type SuperPrint = { <T>(arr:T[]):void }
// const superPrint : SuperPrint = (arr) =>{
//     arr.forEach(i => console.log(i))
// }
// superPrint([1,2,3,4])

// superPrint 함수 타입 살펴보면 반환값이 void인데
// forEach는 return하는 값이 없는 메소드로 해당하는 arr의 배열의 값을 각각 실행만 해줄뿐
// forEach자체의 반환값은 undefined이기 때문이다
// const superPrint: <number>(arr : number[]) => void
// generic이 받아서 추정한 <number> 타입이 T[] 자리에 number로 replace 된다.

// 각 함수의 타입형식이 어떻게 되는지 살펴보면 superPrint함수의 인자로 전달되는 값에 따라서
// 타입형식이 달라지는 것을 볼 수 있다.이는 superPrint가 SuperPrint 타입이고,
// SuperPrint는 제네릭 타입으로 값을 입력받아 타입을 추정해서 반환하기 때문이다.
// superPrint([true,false,true])
// const superPrint: <boolean>(arr : boolean[])=>void

// superPrint(["a","b","c"])
// const superPrint: <string>(arr: string[]) => void

// superPrint([1,2,true,false])
// const superPrint: <number|boolean>(arr: (number|boolean)[]) => void

// generic을 사용하면 타입스크립트가 타입을 모두 추정해주기 때문에 일일히 기술할 필요하 없다는 편리함!

// === 배열의 첫번째 요소만을 반환하는 함수 예시 ===============================
// 이제는 return 값이 정해져 있으니 반환값 타입도 generic으로 바꿔줌
type SuperPrint = {
   <T>(arr: T[]): T;
};
const superPrint: SuperPrint = (arr) => arr[0];

// 이제 각각의 리턴값의 타입을 확인하기 위해 변수에 넣어 확인해보자
// 각각의 변수 aa,bb,cc,dd 에 커서 올려 보면
// superPrint 함수는 굉장히 많은 형태의 타입을 받을 수 있다.(다형성)
const aa = superPrint([1, 2, 3, 4]); //const aa : number
const bb = superPrint([true, false, true]); // const bb : boolean
const cc = superPrint(['a', 'b', 'c']); //const cc : string
const dd = superPrint([1, 2, true, false]); //const dd : number|boolean

// === any 타입과 Generic타입의 차이?
// type SuperPrint = {(arr:any[]):any}
// 이렇게 쓴다면 결과값은 모두 any 타입이 된다.
// 만약 dd.toUpperCase()를 한다고 가정한다면
// 첫번째 요소인 1 에 toUpperCase()를 적용하는 것인데 TS는 에러를 발생시키지 않는다.
// 따라서 우리는 any 타입을 사용하지 않는다.
// Generic의 경우 Call Signature를 concrete type으로 하나씩 추가하는 형태이기 때문이기에,
// 에러가 발생해 보호받을 수 있다.

// 제네릭을 여러개 쓸 때 =============================================
// type SuperPrint =  <T,V>(arr:T[], b:V) => T
// const aa= superPrint([1,2,3,4],"x")

// 아래처럼 작성해도 상관없음
// function superPrint<T>(arr: T[]){
//     return a[0]
// }

// 타입을 구체적으로 명시해주고 싶을 때 이렇게 해도 됨
//const aa= superPrint<number>([1,2,3,4])

// 제네릭 사용 예시 ==============================================
// 타입을 생성하거나, 타입을 확장할 때, 혹은 코드를 저장할 때 쓰임

type Animal<T> = {
   name: string
   extraInfo: T
}
// 오리에게만 해당되는 정보타입추가
type duckExtra = {
   favFood: string
};
// 오리추가타입을 Animal타입의 타입으로 보내는 타입을 또 만듦
type ducktype = Animal<duckExtra>;
// Animal타입에서 <T>제네릭을 사용한 부분인 extraInfo 부분이 
// 타입으로 보낸 duckExtra 내용으로 replace됨
const duck: ducktype = {
   name: 'duck',
   extraInfo: {
      favFood: 'rice',
   }
};
//Animal 타입을 직접사용
const panda: Animal<null> = {
   name: 'panda',
   extraInfo: null
};

// 또 다른 예시==========================================
// 기본적인 타입스크립트 타입은 제네릭으로 만들어짐
// Array에 커서 올려보면 <T> 확인가능
type B = Array<number>;
let z: B = [1, 2, 3, 4];

function printNum(arr: number[]) {}
//function printNum(arr:Array<number>){} // 위 코드와 같음

// reactjs 예시==========================================
// useState()
// 이건 타입스크립트가 state 타입을 알 수 없음
// useState<number>()
// 이렇게 제네릭을 보내면 useState의 call signiture가
// number 타입의 useState 가 되는 것임
