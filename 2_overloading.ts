// Call Signiture

// 함수생성 후 이에 해당하는 타입을 알아보자
// function add(a: number,b: number){
//    return a+b
// }
// 같은 함수를 arrow 함수로 표현
//const add =(a:number,b:number)=> a+b

// call signiture 란 생성한 함수(add)에 커서를 올렸을 때 나타나는 타입형식
// const add =(a:number,b:number)=> number
// 함수를 어떻게 부르고 return타입을 무얼 할건지 보여줌 
// 이것을 type 자체로 바꿔주고 여러번 재사용 가능함 
// type 형식에 이름은 대문자 시작
 type Add =(a:number,b:number)=> number

// 이런 방법은 함수를 구현하기 전에 타입을 먼저 만들어 
// 함수가 어떻게 작동할 것인지 먼저 생각 후 디자인 할 수 있어서 좋다.
// 이것을 call signiture 라고 부른다

// 아래코드는 다른 표현식 (여러개의 call signiture 가 있을때 객체형식으로 표현)
// type Add = {(a:number,b:number): number}

// add 의 타입은 Add 라고 활용 가능
// 미리 명시해둔 타입형식을 활용함으로써 파라미터 일일히 타입형식을 줄 필요 없음.
const add : Add = (a,b) => a + b



// overloading 오버로딩
// 함수가 서로 다른 여러개의 call signiture를 가질때 일어남
// Nextjs 나 Nestjs, express 에서 쓰인다.
// 보통 패키지나 라이브러리에 오버로딩이 많이 쓰임
// 실제로 쓸 일이 많지는 않음


// 2개의 call signiture 를 가지는 ManyAdd 타입
type ManyAdd = {
   (a:number,b:number): number
   (a:number,b:string): number
}

//const manyadd : ManyAdd = ( a, b ) => a + b

// 여기서 b 의 타입은 number|string 이다 따라서 타입 사용시에 타입을 체크해주는 조건문 써야함
// type이 any뜨시는 분들은
// npm install -g typescript 입력후 (맥은 맨앞에 sudo붙여서)
// tsc --init 입력해보시고 다시 시도해보세요

// manyadd 는 ManyAdd 타입
// 이러한 코드는 사실 의미가 없지만 오버로딩을 설명하기 좋음
const manyadd : ManyAdd = ( a, b ) => {
   if(typeof b ==="string") return a
   return a + b
}


// 실제 개발환경에서 경험할 법한 오버로딩 예시
// Nextjs 에서 페이지를 바꿀때 
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

// 그렇다면 call signiture 의 파라미터 개수가 다른 경우는?
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


