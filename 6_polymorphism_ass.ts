// alt+shift+A 전체주석처리
//classes 그리고 interfaces 를 활용하여, 아래 API를 위한 '미니' 버전을 구현하세요.
// 1. LocalStorage API
// 2. Geolocation API

// 1. LocalStorage API:
// abstract classes and generics.
// 추상화 클래스와 제네릭을 사용하세요.
// LocalStorage는 사용자 로컬 컴퓨터에 저장되는 공간 중 하나로 저장되는 데이터는 key값과 value값의 쌍 즉, key: value 값으로 저장이 됩니다.
// 핵심 키워드는 추상화(abstract) 그리고 제네릭입니다.

// 타입 만들기: interface는 type과 더불어 꽤 많이 사용되는 타입 정의 키워드이며 상속에 굉장히 용이하다는 특징이 있습니다. 인풋 타입에 따라 아웃풋 타입이 유동적으로 변할 수 있도록 제네릭과 함께 적용해 보세요.
// 추상화(abstract)는 어떤 하위 클래스에 상속시킬 때 주로 사용이 되며 추상화 클래스 자체로는 인스턴스를 생성할 수 없습니다. 클래스 뿐만이 아니라 클래스 내부의 필드와 메소드에도 적용이 가능합니다. 
// 어떤 부분에 추상화를 적용시킬지는 여러분들이 잘 판단해서 해보시기 바랍니다. 또한, 추상화 클래스에도 제네릭을 적용시킬 수 있습니다. 마찬가지로 클래스 내부 메소드에 제네릭을 어떻게 적용시키면 좋을지 생각해보세요.
// 추상화 클래스를 상속시킨 새로운 클래스를 정의한 후 내부 필요한 메소드들을 정의해보세요. 
// 추상화 클래스를 상속시킨 이 새로운 클래스가 실제 API로써 사용될 클래스가 됩니다. 
// 사용법에 적혀 있는 setItem(), getItem(), clearItem() 및 clear()들은 전부 LocalStorage와 관련있는 메소드입니다. 관련 공식 문서는 여기를 확인해주세요.
// https://developer.mozilla.org/en-US/docs/Web/API/Storage#methods

interface Storage1<T> {
    [key:string]: T
}
abstract class LocalStorage1<T> {
    private storage:Storage1<T> ={}

    setItem(key:string,value:T){
        this.storage[key] = value;
    }
    getItem(key:string){
        return this.storage[key]
    }
    clearItem(key:string){
        delete this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}
//class 를 abstract으로 바꾸면서 인스턴스를 못만들게 되서 아래코드는 바꿔야함
//const myStringStorage = new LocalStorage1<string>()
//myStringStorage.setItem("haha", "hello");
//console.log(myStringStorage.getItem("haha"));// Output: hello

//const myBooleanStorage = new LocalStorage1<boolean>()
//myBooleanStorage.setItem("married", true);
//console.log(myBooleanStorage.getItem("married")); // Output: true


//localStorage.setItem(<key>,<value>)
//localStorage.getItem(<key>)
//localStorage.clearItem(<key>)
//localStorage.clear()

// 2. Geolocation API:
// overloading을 사용하세요.
// GeoLocation API는 로컬 컴퓨터의 위치 정보를 가져오는 유용한 API입니다. 공식 문서의 링크를 통해 어떤 메소드들이 있는지 살펴보시기 바랍니다.

// 핵심 키워드는 overloading입니다. 특히 함수 overloading은 동일한 함수 이름이되 서로 다른 타입의 매개변수를 받는 것을 의미합니다. 
// 따라서, GeoLocation API 안에 어떤 필드들과 어떤 메소드들이 있는지 유심히 살펴보시고 어떤 식으로 타입을 적용시킬지 고민이 필요한 챌린지입니다.
// GeoLocation에 사용될 필드와 메소드에 적용될 수 있는 타입들을 정의해보세요.
// overloading을 적용될 수 있도록 GeoLocation API에 있는 기존 메소드의 이름을 쓰되 새로 만든 타입을 중복 시켜 적용해보세요.
// 사용법에 있는 getCurrentPosition(), watchPosition() 안에 Fn이 붙어 있는 파라미터들은 콜백 함수를 의미하며 나머지들은 전부 객체를 가리킵니다. 이에 유의하여 타입을 설정해보시기 바랍니다.

// type successFn = ()=>void
// type errorFn =  ()=>void
// type optionsObj = ()=>void

// class GeoLocation {
    
//     getCurrentPosition(successFn:successFn,errorFn?:errorFn,optionsObj?:optionsObj){
        
//     }
//     watchPosition(successFn:successFn, errorFn?:errorFn, optionsObj?:optionsObj){

//     }
//     clearWatch(id:number){

//     }
// }

// geolocation.getCurrentPosition(successFn);
// geolocation.getCurrentPosition(successFn, errorFn);
// geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
// geolocation.watchPosition(success);
// geolocation.watchPosition(success, error);
// geolocation.watchPosition(success, error, options);
// geolocation.clearWatch(id);



// 참고 코드
//LocalStorage API
interface SStorage<T> {
    [key:string]: T
}

abstract class LLocalStorage<T> {
   private storage : SStorage<T> = {}
// 밑에처럼 컴파일됨.
//    constructor() {
//         this.storage = {};
//     }
   setItem(key:string, value:T){
        this.storage[key] = value;
   }
   clearItem(key:string){
        delete this.storage[key]
   }
   getItem(key:string):T {
        return this.storage[key]
   }
   clear(){
        this.storage = {}
   }
}


//Geolocation API
type successFn = (position:GeolocationPosition) => void
type errorFn = (positionError:GeolocationPositionError) => void
type optionsObj = {maximumAge:number,timeout:number,enableHighAccuracy:boolean}

class FakeGeolocation {
    getCurrentPosition(success: successFn): void
    getCurrentPosition(success: successFn, error:errorFn): void
    getCurrentPosition(success: successFn, error:errorFn, options:optionsObj): void
    getCurrentPosition(success: successFn, error?:errorFn, options?:optionsObj){
        //구현하는 식을 여기에 쓴다.
    }
    watchPosition(success: successFn): number
    watchPosition(success: successFn, error:errorFn): number
    watchPosition(success: successFn, error:errorFn, options:optionsObj): number
    watchPosition(success: successFn, error?:errorFn, options?:optionsObj){
        //구현하는 식을 여기에 쓴다.
        return 1;
    }
    clearWatch(id:number){}
}



