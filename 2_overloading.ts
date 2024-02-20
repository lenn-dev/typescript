// === Call Signiture ================================================
// Call(=Function) Signature란 함수의 매개변수와 반환 값의 타입을 모두 type으로 미리 선언하는 것이다.
// 함수에 커서를 올리면 해당 함수의 type을 보여준다.
// 예를 들어 React에서 함수로 props를 보낼 때, Call signature로 어떻게 함수가 작동할지 미리 설계 가능하다.

// 함수의 구현이 아니라 함수의 인수 및 반환 값의 유형
// JS로 컴파일되지 않음
// 여러 함수에 call signature 사용 가능

// 함수선언
// function add(a: number,b: number){return a+b}
// => arrow 함수로 바꿈
// const add = (a:number,b:number) => a+b
// => 이 함수의 타입형식 (함수의 인수 및 반환 값의 유형)
// const add = (a:number,b:number) => number
// => 이를 type으로 바꿔주고 여러번 재사용 가능함 (타입 이름은 대문자로 시작)
 type Add =(a:number,b:number)=> number
// 이것이 call signiture
// 함수 구현하기 전에 타입을 먼저 디자인할 수 있다.

// 여러개의 call signiture 가 있을때 객체형식으로 표현가능
// type Add = {(a:number,b:number): number}

// add 의 타입은 Add 라고 활용 가능
// 미리 명시해둔 타입형식을 활용함으로써 파라미터 일일히 타입형식을 줄 필요 없음.
const add : Add = (a,b) => a + b


// === Overloading 오버로딩 =========================================
// Function(=Method) Overloading은 직접 작성할 일은 적고 외부 라이브러리에 자주 보이는 형태로, 
// 동일한 이름에 매개 변수만 다른 여러 버전의 함수를 만드는 것을 함수의 Overloading이라고 한다.

// 함수에 여러개의 call signature가 있는 경우 함수 오버로딩이 필요
// function 키워드로만 함수 오버로딩을 할 수 있으며 arrow function으로는 오버로딩을 할 수 없다
// 추후에 살펴볼 다형성(polymorphism)을 이해하기 위해 꼭 알아야 함


// 좋지 않은 코드 예시이지만 오버로딩을 설명하기 좋음
type ManyAdd = {
   (a:number,b:number): number
   (a:number,b:string): number
}
const manyadd : ManyAdd = ( a, b ) => {
   if(typeof b ==="string") return a
   return a + b
}
//const manyadd : ManyAdd = ( a, b ) => a + b
// 여기서 b 의 타입은 number|string 이다 따라서 타입 사용시에 타입을 체크해주는 조건문 써야함
// type이 any뜨시는 분들은
// npm install -g typescript 입력후 (맥은 맨앞에 sudo붙여서)
// tsc --init 입력해보시고 다시 시도해보세요

// 파라미터 개수가 다른 경우는?
// optional 처리 하고 명시적으로 조건을 달아줘야 함
type Add_ = {
   (a:number, b:number) : number
   (a:number, b:number, c?:number) : number
}
const add_ : Add_ =(a, b, c?:number) => {
   if(c) return a + b + c
   return a + b
}
add_ (1,2)
add_ (1,2,3)


// 실제 개발환경에서 경험할 법한 오버로딩 예시:  Nextjs 에서 페이지를 바꿀때 
// Router.push("/home") 쓰거나
// 혹은  configuration object를 보낼 수 있음
// Router.push({
//    path: "/home",
//    state: 1
// })

// 이 경우에 우리는 type을 만들 수 있음
type Config = {
   path :string,
   state: object
}
type Push = {
   (path : string ) : void
   (config : Config) : void
} 

const push : Push =(config) => {
   if(typeof config ==="string") {console.log(config)}
   else{
      console.log(config.path, config.state)
   }
}
// 위의 코드 같은 걸 패키지나 라이브러리 디자인 할 때 많이 사용함




