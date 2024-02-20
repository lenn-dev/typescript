// 다형성, 제네릭, 클래스, 인터페이스 모두 합쳐보기
// 다형성을 실현하기 위해 제네릭을 씀
// 제네릭은 concrete타입이 아닌 placeholder로써 입력값을 들어온 그 때에 타입을 확인하여 concrete 타입으로 바꿔줌
// 로컬 스토리지 API 와 비슷한 API 만들어 보기
// 타입만 좀 써보고 실제 구현은 안함 C++ 하지 않기 때문에
// LocalStorage 에 각각의 타입만을 위한 스토리지를 만들고 싶다.
// 따라서 LocalStorage 를 초기화(initiate)할때 
// 타입스크립트에세 T라고 불리는 제네릭을 받을 계획이라고 알려줄 것임
// 클래스네임에 들어온 제네릭을 인터페이스로 보내줄 것임
// 그리고 그 인터페이스는 제네릭을 이용함
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        this.storage = {};
    }
    LocalStorage.prototype.set = function (key, value) {
        this.storage[key] = value;
    };
    LocalStorage.prototype.remove = function (key) {
        delete this.storage[key];
    };
    LocalStorage.prototype.get = function (key) {
        return this.storage[key];
    };
    LocalStorage.prototype.clear = function () {
        this.storage = {};
    };
    return LocalStorage;
}());
var stringStorage = new LocalStorage();
stringStorage.get("key");
stringStorage.set("hello", "how are you");
var booleanStorage = new LocalStorage();
booleanStorage.get("xxx");
booleanStorage.set("key", true);
