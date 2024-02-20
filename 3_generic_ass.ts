// 현재까지 배운 것을 토대로, 아래 함수들에 대한 구현과 함께 호출 시그니처(call signatures) 를 작성해주세요
// 1. last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
// 2. prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 배열을 return해야 합니다.
// 3. mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
// 4. count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
// 5. findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 
//    존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
// 6. slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 
//    두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 
//    매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 
//    이때 세번째 매개변수는 필수 매개변수가 아닙니다.
//=============================================================================================================

// 1. last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
function last<T>(arr:T[]){
    return arr[arr.length-1]
}
const a_ = [1,2,3];
const b_ = ["a","b","c"];
console.log(last(a_));
console.log(last(b_));

// 2. prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 배열을 return해야 합니다.
type Prepend = <T> (arr : T[], item : T) => T[];

const prepend: Prepend = (items,item) => [item,...items];

const items = [1,2,3,4,5];
const newItems = prepend(items,0);
console.log(newItems);



// 3. mix(arr,arr) : 두개의 배열을 매개변수로 받아, 
// 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.

type Mix = <T> (arr:T[], arr1:T[]) => T[];
const mix : Mix = (arr,arr1) => [...arr,...arr1];
const arr = [1,2,3];
const arr1 = [4,5,6];
const mixedArr = mix(arr,arr1);
console.log (mixedArr);

// 4. count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.

// type Count = <T>(arr:T[]) => T;
// const count : Count = (arr) => arr.length;
function count <T>(arr:T[]) {
    return arr.length;
}
const arr2 = [1,2,3];
console.log(count(arr2));

// 5. findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 
//    첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한 후 
//    존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.

function findIndex<T>(arr:T[],item:T){
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]===item){return i;}
    //     else {return null;}
    // }
    if(arr.indexOf(item)===-1){return null}
    return arr.indexOf(item)
}

// type FindIndex = <T> (arr:T[], item:T) => T;
// const findIndex : FindIndex =(arr,item) => arr.indexOf(item); 

const arr3 =[1,2,3,4,5,6]
const found1 = findIndex(arr3,3);
const found2 = findIndex(arr3,7);
console.log(found1)
console.log(found2)

// 6. slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 
//    두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 
//    매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 
//    이때 세번째 매개변수는 필수 매개변수가 아닙니다.

type Slice ={
    <T>(arr:T[], startIndex:number, endIndex:number): T[]
}
const slice : Slice = (arr,b,c?)=>{
     if(c)return arr.slice(b,c)
     return arr.slice(b)
}
const arr4=["a","b","a","na","n","a","h","f"];
console.log(slice(arr4,1,6));


