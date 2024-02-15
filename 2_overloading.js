// Call Signiture
// 이런 방법은 함수를 구현하기 전에 타입을 먼저 만들어 
// 함수가 어떻게 작동할 것인지 먼저 생각 후 디자인 할 수 있어서 좋다.
// 이것을 call signiture 라고 부른다
// 아래코드는 다른 표현식 (여러개의 call signiture 가 있을때 객체형식으로 표현)
// type Add = {(a:number,b:number): number}
// add 의 타입은 Add 라고 활용 가능
// 미리 명시해둔 타입형식을 활용함으로써 파라미터 일일히 타입형식을 줄 필요 없음.
var add = function (a, b) { return a + b; };
//const manyadd : ManyAdd = ( a, b ) => a + b
// 여기서 b 의 타입은 number|string 이다 따라서 타입 사용시에 타입을 체크해주는 조건문 써야함
// type이 any뜨시는 분들은
// npm install -g typescript 입력후 (맥은 맨앞에 sudo붙여서)
// tsc --init 입력해보시고 다시 시도해보세요
// manyadd 는 ManyAdd 타입
// 이러한 코드는 사실 의미가 없지만 오버로딩을 설명하기 좋음
var manyadd = function (a, b) {
    if (typeof b === "string")
        return a;
    return a + b;
};
var push = function (config) {
    if (typeof config === "string") {
        console.log(config);
    }
    else {
        console.log(config.path, config.state);
    }
};
var add_ = function (a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
};
add_(1, 2);
add_(1, 2, 3);
