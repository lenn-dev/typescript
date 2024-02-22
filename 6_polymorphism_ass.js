// alt+shift+A 전체주석처리
//classes 그리고 interfaces 를 활용하여, 아래 API를 위한 '미니' 버전을 구현하세요.
// 1. LocalStorage API
// 2. Geolocation API
var LocalStorage1 = /** @class */ (function () {
    function LocalStorage1() {
        this.storage = {};
    }
    LocalStorage1.prototype.setItem = function (key, value) {
        this.storage[key] = value;
    };
    LocalStorage1.prototype.getItem = function (key) {
        return this.storage[key];
    };
    LocalStorage1.prototype.clearItem = function (key) {
        delete this.storage[key];
    };
    LocalStorage1.prototype.clear = function () {
        this.storage = {};
    };
    return LocalStorage1;
}());
var LLocalStorage = /** @class */ (function () {
    function LLocalStorage() {
        this.storage = {};
    }
    // 밑에처럼 컴파일됨.
    //    constructor() {
    //         this.storage = {};
    //     }
    LLocalStorage.prototype.setItem = function (key, value) {
        this.storage[key] = value;
    };
    LLocalStorage.prototype.clearItem = function (key) {
        delete this.storage[key];
    };
    LLocalStorage.prototype.getItem = function (key) {
        return this.storage[key];
    };
    LLocalStorage.prototype.clear = function () {
        this.storage = {};
    };
    return LLocalStorage;
}());
var FakeGeolocation = /** @class */ (function () {
    function FakeGeolocation() {
    }
    FakeGeolocation.prototype.getCurrentPosition = function (success, error, options) {
        //구현하는 식을 여기에 쓴다.
    };
    FakeGeolocation.prototype.watchPosition = function (success, error, options) {
        //구현하는 식을 여기에 쓴다.
        return 1;
    };
    FakeGeolocation.prototype.clearWatch = function (id) { };
    return FakeGeolocation;
}());
