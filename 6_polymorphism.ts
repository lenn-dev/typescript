// 다형성, 제네릭, 클래스, 인터페이스 모두 합쳐보기
// 다형성을 실현하기 위해 제네릭을 씀
// 제네릭은 concrete타입이 아닌 placeholder로써 입력값을 들어온 그 때에 타입을 확인하여 concrete 타입으로 바꿔줌
// 로컬 스토리지 API 와 비슷한 API 만들어 보기
// 타입만 좀 써보고 실제 구현은 안함 C++ 하지 않기 때문에

// Storage는 TS에 이미 정의된 인터페이스이다
// override 하길 원치 않기 때문에 여기선 이름을 다르게 하여
// 나만의 인터페이스를 만들 것임. 
interface SStorage<T> {
    // 무제한의 key를 받고, 타입을 알때
    //[key:string]: T
}

// LocalStorage 에 각각의 타입만을 위한 스토리지를 만들고 싶다.
// 따라서 LocalStorage 를 초기화(initiate)할때 
// 타입스크립트에세 T라고 불리는 제네릭을 받을 계획이라고 알려줄 것임
// 클래스네임에 들어온 제네릭을 인터페이스로 보내줄 것임
// 그리고 그 인터페이스는 제네릭을 이용함
class LocalStorage2<T>{
    private storage : SStorage<T> ={}
    set(key:string,value:T){
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T{
        return this.storage[key]
    }
    clear(){
        this.storage ={}
    }
}

const stringStorage = new LocalStorage2<string>()
stringStorage.get("key")
stringStorage.set("hello","how are you")

const booleanStorage = new LocalStorage2<boolean>()
booleanStorage.get("xxx")
booleanStorage.set("key",true)
