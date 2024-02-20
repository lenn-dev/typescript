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