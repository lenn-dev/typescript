// class란
// object orientied programming in TS
// c# 과 java 에서의 개념들과 비슷함
// e.g) protected method, public property,abstract class, polymorphism, generic
// 객체지향프로그래밍에 대한 기본지식이 있다는 가정하게 시작

// class 사용시 포함되는 constructor 와 초기화 인스턴트 개념정리
// 생성자 함수(constructor) 란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말합니다.
// 생성자 함수에 의해 생성된 객체를 인스턴스라 합니다.
// 생성자 함수에 의한 객체 생성 방식은 마치 객체(인스턴스)를 생성하기 위한 템플릿(클래스)처럼 
// 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있습니다.
// new연산자와 함께 생성자 함수를 호출하면 자바스크립트 엔진은 암묵적으로 다음과 같은 과정으로 인스턴스를 생성하고 초기화 합니다.
// 1. 인스턴스 생성(빈 객체가 생성), 생성된 인스턴스는 this에 바인딩
//      바인딩(name binding)이란 식별자와 값을 연결하는 과정을 의미합니다. 
//      예를 들어, 변수 선언은 변수 이름(식별자)과 확보된 메모리 공간의 주소를 바인딩하는 것입니다. 
//      this 바인딩은 this(키워드로 분류되지만 식별자 역할을 합니다)와 this가 가리킬 객체를 바인딩 하는 것입니다.
// 2. 인스턴스 초기화
//      생성자 함수에 기술되어 있는 코드가 한 줄씩 실행되어 this에 바인딩되어 있는 인스턴스를 초기화합니다.
//      즉, this에 바인딩되어 있는 인스턴스에 프로퍼티나 메서드를 추가하고 생성자 함수가 인수로 전달받은 초기값을 
//      인스턴스 프로퍼티에 할당하여 초기화하거나 고정값을 할당합니다.
// 3. 인스턴스 반환
//      생성자 함수 내부의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환됩니다.
//      만약 this가 아닌 다른 객체를 명시적으로 반환하면 this가 반환되지 못하고 return 문에 명시한 객체가 반환됩니다.
//      하지만 명시적으로 원시 값!!을 반환하면 원시 값은 또 무시하네요!? 암묵적으로 this가 반환됩니다.


// 추상 클래스란 모든 클래스들이 상속받을 수 있는 클래스이지만,
// 직접 새로운 인스턴스를 만들수는 없음
// js 엔 없지만 ts 에서 사용하는 필드 접근제어자 3가지
// 1. pubilc : 전역에서 접근가능
// 2. private 추상 :class 안에서만 접근 가능
// 3. protected : 클래스 외부로부터 보호되지만 자식 클래스에서는 접근할 수 있음
// 이를 사용함으로서 js 에서 쓰던 this.firstName = firstName 을 안해줘도 됨
// 대신 js 로 컴파일 되어 나타나지 않음


// 추상 class 만들기
// TS 작성하면서 JS 로 어떻게 컴파일 되는지 관찰할 것
abstract class User {
    constructor(
        protected firstName : string,
        protected lastName : string,
        protected nickName : string
    ){}
    // 추상 클래스 안에 추상 메소드를 만들 수 있다.
    // 추상 메소드는 구현되지 않은(코드가 없는)메소드
    // 메소드를 구현하지 말고, call signiture만 적어둬야 함
    // 그리고 상속받은 자식클래스 Listener 에서는 추상메소드를 구현해야 함
    abstract getNickName():void
    
    //abstract getNickName(){}구현하려고 {}괄호를 열면 다음과 같은 error 메세지가 뜸
    //Method 'getNickName' cannot have an implementation because it is marked abstract.
    
    //접근 제어자는 메서드에도 사용될 수 있음 (private, public,proteced)
    getFullName(){
        // 이 부분이 구현 부분
        return `${this.firstName} ${this.lastName}`
    }
}
// 오직 extends 를 통해 상속받을 수만 있음.
class Listener extends User{
    getNickName(): void {
        // 상속받은 클래스 안에서는 nickName이 protected 접근제어자라 접근 가능 
        console.log(this.nickName)
    }
}
// 상속받은 클래스를 이용해 인스턴스를 만들 수 있음
const lenna = new Listener("lena","last","len");

// 추상클래스를 직접 인스턴트로 만들 수 없. 음.
// new User("lena","last","len");

lenna.getFullName()
//lenna.firstName //protected 라 외부에서 호출은 불가능




