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
// LocalStorage Interface
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        this.items = {};
    }
    return LocalStorage;
}());
var SuperStorage = /** @class */ (function (_super) {
    __extends(SuperStorage, _super);
    function SuperStorage() {
        return _super.call(this) || this;
    }
    SuperStorage.prototype.key = function (index) {
        return Object.keys(this.items)[index];
    };
    SuperStorage.prototype.length = function () {
        return Object.keys(this.items).length;
    };
    SuperStorage.prototype.getItem = function (key) {
        return this.items[key];
    };
    SuperStorage.prototype.setItem = function (key, value) {
        this.items[key] = value;
    };
    SuperStorage.prototype.removeItem = function (key) {
        delete this.items[key];
    };
    SuperStorage.prototype.clear = function () {
        this.items = {};
    };
    return SuperStorage;
}(LocalStorage));
var Geolocator = /** @class */ (function () {
    function Geolocator() {
        this.getCurrentPosition = function (success, error, options) {
            return; // Implementation goes here :)
        };
        this.watchPosition = function (success, error, options) {
            return 1; // Implementation goes here :)
        };
        this.clearWatch = function (id) { };
    }
    return Geolocator;
}());
