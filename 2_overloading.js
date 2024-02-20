// === Call Signiture ================================================
// Call(=Function) Signature란 함수의 매개변수와 반환 값의 타입을 모두 type으로 미리 선언하는 것이다.
// 함수에 커서를 올리면 해당 함수의 type을 보여준다.
// 예를 들어 React에서 함수로 props를 보낼 때, Call signature로 어떻게 함수가 작동할지 미리 설계 가능하다.
// 이것이 call signiture
// 함수 구현하기 전에 타입을 먼저 디자인할 수 있다.
// 여러개의 call signiture 가 있을때 객체형식으로 표현가능
// type Add = {(a:number,b:number): number}
// add 의 타입은 Add 라고 활용 가능
// 미리 명시해둔 타입형식을 활용함으로써 파라미터 일일히 타입형식을 줄 필요 없음.
var add = function (a, b) { return a + b; };
var manyadd = function (a, b) {
    if (typeof b === "string")
        return a;
    return a + b;
};
var add_ = function (a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
};
add_(1, 2);
add_(1, 2, 3);
var push = function (config) {
    if (typeof config === "string") {
        console.log(config);
    }
    else {
        console.log(config.path, config.state);
    }
};
// 위의 코드 같은 걸 패키지나 라이브러리 디자인 할 때 많이 사용함
