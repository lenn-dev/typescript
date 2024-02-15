
// generic
// generic 은 요구사항에 따라 call signiture를 생성(generating)해주는 역할
// call signiture 작성시에 여기에 들어올 확실한 타입을 모를 때 사용함
// 타입의 여러가지 경우의 수를 모두 명시하는 것은 비효율적이기 때문
// 타입스크립트로 하여금 타입을 추정하게끔 만듦
// generic 은 모든 타입을 추정하여 나타내 주기 때문에 편리
// '제네릭은 선언시점이 아니라 생성시점에 타입을 명시하여
// 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다'

// reactjs 에서 useState 이런 hook 에 <...> 이런 것을 붙이는 이유가 제네릭때문
// 보통은 다른 패키지를 사용하기 때문에 나의 제네릭을 생성하는 경우는 별로 없다.
// 다른 패키지나 라이브러리에 생성되어있는 제네릭을 사용하는 경우가 대다수

// 예시
// 배열을 받고 배열의 요소들을 print해주는 함수를 만든다
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

// 이때 문제는 타입인데, 함수에서 받는 배열의 타입이 다양할 수 있는데,
// 그 다양한 경우의 수를 생각하여 배열 타입을 일일히 명시해야 하는 번거로움이 있다.
// ex) boolean배열, object, string배열...

// 우리가 사용하는 흔한 타입들은 concrete type 이다
// number, string, void , unknown...
// 여기서는 이러한 concrete 타입이 아닌 generic 타입을 받아서 해결할 수 있다.
// generic은 타입의 placeholder 같은 것
// 우리는 concrete 타입 대신 generic 타입을 대신 사용할 수 있고,
// generic 타입은 타입을 추론해 함수를 사용할 수 있게 한다.

// superPrint([1,2,true,false])
// 이러한 배열로 함수를 호출하면 이에 해당하는 call signiture 가 없기 때문에 에러
// 이렇게 모든 가능성을 조합해서 만드는 건 불가능...
// 여기서 generic 타입으로 바꾼다면 쉬워진다.

// generic 사용법==============================
// 첫번째로 타입스크립트에 generic을 사용하고 싶다고 선언
// call signiture 앞에 <T> 붙여줌 
// <potato> 해도 상관없지만 보통 <T>, <V> 를 많이 사용함
// 이 call signiture는 제네릭을 받는다고 TS 에게 알려줌
// 그리고 파라미터 타입에 T를 넣어줌
// type SuperPrint = {
//     <T>(arr:T[]):void
    
// }
// const superPrint : SuperPrint =(arr)=>{
//     arr.forEach(i => console.log(i))
// }

// superPrint([1,2,3,4])
// const superPrint: <number>(arr : number[])=>void
// generic이 받아서 추정한 <number> 타입이 T[] 자리에 replace 된다.
// forEach는 return하는 값이 없는 메소드로 해당하는 arr의 배열의 값을 각각 실행만 해줄뿐 forEach자체의 반환값이 undefined

// superPrint([true,false,true])
// const superPrint: <boolean>(arr : boolean[])=>void

// superPrint(["a","b","c"])
// const superPrint: <string>(arr: string[]) => void

// superPrint([1,2,true,false])
// const superPrint: <number|boolean>(arr: (number|boolean)[]) => void

// generic을 사용하면 타입스크립트가 타입을 모두 추정해주기 때문에 일일히 기술할 필요하 없다는 편리함!


// 그럼 이제 받은 배열의 첫번째 요소만을 반환하는 함수를 작성해보자
// 이제는 return 값이 있으니 반환값 타입도 generic으로 해줌
type SuperPrint = {
    <T>(arr:T[]):T
}
const superPrint : SuperPrint =(arr)=> arr[0]

// 이제 각각의 리턴값의 타입을 확인하기 위해 변수에 넣어 확인해보자
// 각각의 변수 aa,bb,cc,dd 에 커서 올려 보면 
const aa= superPrint([1,2,3,4]) //const aa : number
const bb= superPrint([true,false,true]) // const bb : boolean
const cc= superPrint(["a","b","c"]) //const cc : string
const dd= superPrint([1,2,true,false]) //const dd : number|boolean

// superPrint 함수는 굉장히 많은 형태의 타입을 받을 수 있다.
// 이것이 다형성
// 이렇게 사용하는 것이 generic을 사용하는 방법중의 하나이고 reactjs 에서는 다르게 사용한다.

// 그렇다면 그냥 any 타입을 쓰면 안되나?
// type SuperPrint = {(arr:any[]):any}
// 이렇게 쓴다면 결과값은 모두 any 타입이 된다.
// 만약 dd.toUpperCase() 를 한다고 가정한다면 
// 첫번째 요소인 1 에 toUpperCase()를 적용하는 꼴이니 에러가 난다.
// 따라서 우리는 any 타입을 사용하지 않는다.

// 제네릭을 하나 더 추가 하고 싶다면
// type SuperPrint =  <T,V>(arr:T[], b:V) => T
// const aa= superPrint([1,2,3,4],"x")

// 아래처럼 작성해도 상관없음
// function superPrint<T>(arr: T[]){
//     return a[0]
// }

// 타입을 구체적으로 명시해주고 싶을 때 이렇게 해도 됨
//const aa= superPrint<number>([1,2,3,4])


// 제네릭 사용하는 또 다른 예시============
// 타입을 생성하거나, 타입을 확장할 때, 혹은 코드를 저장할 때 쓰임 

type Player2 <E> = {
    name : string
    extraInfo : E
}
type LenaExtra ={
    favFood:string
}
type LenaPlayer = Player2<LenaExtra>
const len : LenaPlayer = {
    name:" lena",
    extraInfo : {
        favFood : "kimchi"
    }
} 
const lynn: Player2<null> ={
    name:"lynn",
    extraInfo:null
} 

// 또 다른 예시==================
// 기본적인 타입스크립트 타입은 제네릭으로 만들어짐
// Array에 커서 올려보면 <T> 확인가능 
type B = Array<number>
let z : B = [1,2,3,4]

function printNum(arr:number[]){}
//function printNum(arr:Array<number>){}


// reactjs 예시==================
//useState() 
//이건 타입스크립트가 state 타입을 알 수 없음
//useState<numver>()
// 이렇게 제네릭을 보내면 useState의 call signiture이 
// number 타입의 useState 가 되는 것임