// object orientied programming in TS
// c# 과 java 에서의 개념들과 비슷함
// e.g) protected method, public property,abstract class, polymorphism, generic
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 객체지향프로그래밍에 대한 기본지식이 있다는 가정하게 시작
// class 만들기
// TS 작성하면서 JS 로 어떻게 컴파일 되는지 관찰할 것
// 추상 클래스란 모든 클래스들이 상속받을 수 있는 클래스이지만,
// 직접 새로운 인스턴스를 만들수는 없음
// js 엔 없지만 ts 에서 사용하는 필드 접근제어자 3가지
// 1. pubilc : 전역에서 접근가능
// 2. private 추상 :class 안에서만 접근 가능
// 3. protected : 클래스 외부로부터 보호되지만 자식 클래스에서는 접근할 수 있음
// 이를 사용함으로서 js 에서 쓰던 this.firstName = firstName 을 안해줘도 됨
// 대신 js 로 컴파일 되어 나타나지 않음
var User = /** @class */ (function () {
    function User(firstName, lastName, nickName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
    }
    //abstract getNickName(){}구현하려고 {}괄호를 열면 다음과 같은 error 메세지가 뜸
    //Method 'getNickName' cannot have an implementation because it is marked abstract.
    //접근 제어자는 메서드에도 사용될 수 있음 (private, public,proteced)
    User.prototype.getFullName = function () {
        // 이 부분이 구현 부분
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return User;
}());
// 오직 extends 를 통해 상속받을 수만 있음.
var Player1 = /** @class */ (function (_super) {
    __extends(Player1, _super);
    function Player1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player1.prototype.getNickName = function () {
        // 상속받은 클래스 안에서는 nickName이 protected 접근제어자라 접근 가능 
        console.log(this.nickName);
    };
    return Player1;
}(User));
// 상속받은 클래스를 이용해 인스턴스를 만들 수 있음
var lenna = new Player1("lena", "last", "len");
// 추상클래스를 직접 인스턴트로 만들 수 없음
// new User("lena","last","len");
lenna.getFullName();
//lenna.firstName //protected 라 외부에서 호출은 불가능
