/* // 타입 설정시 concrete 타입 뿐만 아니라
// 특정한 옵션으로 제한할 수 있다.
type Team = "red"|"blue"|"yello";
type Health = 1|5|10

// interface 는 오브젝트의 모양을 특정해주기 위함
// 추상 클래스와 비슷한 보호를 제공하지만,인터페이스는 자바스크립트 파일에서 보이지 않음.
// TS에서 추상클래스를 쓰면 JS에서 일반클래스로 바뀌는데 파일크기가 커지고 추가클래스가 만들어진다는 뜻
// 다른 클래스가 추상클래스를 상속받기 원하는 형태가 있어서 쓰는 거라면
// 인터페이스를 쓰는 것이 더 좋다.
// abstract class 를 interface 로 바꾸고 = 빼주면 됨
// 상속받을 때는 extends 를 implements 로 바꿔줌

// reactjs 할때 많이 사용한다.
// type 과 interface 둘다 오브젝트 형태를 알려줄 수 있지만
// interface는 오직 '오브젝트' 형태만을 알려주는데만 쓸 수 있어서 활용도는 낮다.
// 예를 들어 type엔 3가지가 있지만 interface는 3번만 가능
// 1. (type alias) type nickname =string; 은 안됨
// 2. (type specification) type team = "red"|"blue"|"yello"
// 3. (type for object)
interface _Player {
    nickname:string,
    healthBar:Health
    team : Team
}
const momo : _Player ={
    nickname:"momo",
    healthBar:10,
    team:"red"
} */
// extends 대신 js 에 없는 implements를 써준다.
// 그러면 User4에 정해둔 요소를 모두 implements 해야한다는 에러가 뜸
// 이는 class가 abstract class 를 extends 했을때의 기능과 똑같다.
var Player4 = /** @class */ (function () {
    function Player4(
    // 여기는 꼭 public 이 되어야 함. 왜?
    firstName, lastName, health) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.health = health;
    }
    Player4.prototype.sayHi = function (name) {
        return "Hello ".concat(name, ". Your name is ").concat(this.sayfullname());
    };
    Player4.prototype.sayfullname = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Player4;
}());
// 이렇게 작성하면 js가 더이상 추상클래스를 사용하지 않는걸 볼 수 있음
// 코드길이를 줄이고 싶다면 좋은 방법
// interface는 오브젝트의 모양을 알려주면서도 js에는 컴파일되지는 않는다.
// 어댑터 패턴과 같은 디자인 패턴을 사용하여 팀과 협력할때
// 인터페이스를 만들어두고 팀원이 원하는 각자의 방식으로 클래스를 상속하도록 할 수 있다.
// 모두가 같은 인터페이스를 사용한다면 같은 property와 method를 가지게 될 것임
// 인터페이스를 리턴할 수도 있음
// 다만 인터페이스를 쓸 때는 new User4 쓸 필요 없이 
// User4 안의 내용 그대로만 return 해주면 됨
function makeUser(user) {
    return {
        firstName: "lenny",
        lastName: "las",
        sayfullname: function () { return "xx"; },
        sayHi: function (name) { return "string"; }
    };
}
// argument에 인터페이스를 씀으로써 오브젝트 모양을 정할 수도 있음
makeUser({
    firstName: "lenny",
    lastName: "las",
    sayfullname: function () { return "xx"; },
    sayHi: function (name) { return "string"; }
});
// 나중에 propert 추가 하고 싶을때
// 이렇게 못함 duplicate identifier라 나옴
// type PlayerAA ={
//    health:number
// }
var playerA = {
    name: "lenn",
    lastName: "las"
};
// 상속받을때
var playerB = {
    name: "lenn",
    lastName: "las",
    health: 1
};
var UserA = /** @class */ (function () {
    function UserA(firstName) {
        this.firstName = firstName;
    }
    return UserA;
}());
// Type Aliases과 Interfaces의 차이점
// Type Aliases과 인터페이스는 매우 유사하며 
// 많은 경우 자유롭게 선택할 수 있습니다. 
// 인터페이스의 거의 모든 기능은 type에서 사용할 수 있으며, 
// 주요 차이점은 type을 다시 열어 새 속성을 추가할 수 없는 것입니다. 
// 반면 인터페이스는 항상 확장 가능합니다.
//결론: 대부분의 경우 개인 취향에 따라 선택 가능
//(인터페이스 사용을 조금 더 추천)
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
//type과 interface는 TypeScript에서 타입을 정의하는 두 가지 기본적인 방법입니다. 
//그러나 그들 사이에는 몇 가지 중요한 차이점이 있습니다.
//interface는 type보다 더 확장성이 있습니다. interface는 동일한 이름으로 여러 번 선언할 수 있으며,TypeScript는 이러한 선언을 자동으로 병합합니다. 
//이것은 타입 확장 또는 타입을 추가할 필요가 있을 때 매우 유용할 수 있습니다. 이를 통해, 프로그래머는 특정 인터페이스에 새로운 프로퍼티를 추가할 수 있으며, 
//이를 통해 인터페이스를 좀 더 유연하게 사용할 수 있습니다.
//type은 interface와 달리 교차 타입, 유니온 타입, 튜플, 기타 고급 타입 등을 지원합니다.
//그러나 규모가 큰 프로젝트에서 같은 이름의 인터페이스를 정의하는 것이 항상 바람직한 것은 아닙니다. 
//이것은 코드의 가독성을 저하시키고, 프로그래머가 실수로 두 인터페이스를 혼동할 수 있는 문제를 야기할 수 있습니다. 
//따라서 이러한 문제를 방지하기 위해, 프로젝트 팀은 대개 한 인터페이스에 여러 선언을 피하고, 
//대신 인터페이스 확장을 사용하여 추가 프로퍼티를 추가하는 것을 선호합니다.
//이에 따라, 기존 인터페이스에 새로운 프로퍼티를 추가하거나, 같은 이름의 새로운 인터페이스를 추가하는 것이 더 나은 방법인지는 
//프로젝트의 요구 사항, 코드베이스의 크기, 팀의 코딩 스타일 및 가이드라인 등 여러 요소에 따라 달라질 수 있습니다.
