// Call Signiture
//아랫처럼 표현도 가능
//type Add = {(a:number,b:number): number}
//add 의 타입은 Add 라고 활용 가능
var add = function (a, b) { return a + b; };
//const manyadd : ManyAdd = ( a, b ) => a + b
// 여기서 b 의 타입은 number|string 이다 따라서 타입을 체크해주는 조건문 써야함
//type이 any뜨시는 분들은
//npm install -g typescript 입력후 (맥은 맨앞에 sudo붙여서)
//tsc --init 입력해보시고 다시 시도해보세요
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
// polymorphism 다형성 , generic
