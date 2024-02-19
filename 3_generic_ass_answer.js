//================== 정답코드 =====================
//전체 주석처리 shift+alt+a
/* //1. Last

type Last = <T>(items: T[]) => T;

const last: Last = (items) => items[items.length - 1];

const lastItem = last([1, 2, 3, 4, 5]);

console.log(`Last: ${lastItem}`);

//2. Prepend

type Prepend = <T>(items: T[], item: T) => T[];

const prepend: Prepend = (items, item) =>  [item, ...items]

const items = [1, 2, 3, 4, 5];

const newItems = prepend(items,0);

console.log(`Prepend: ${newItems}`)

//3. Mix

type Mix = <T>(a: T[], b: T[]) => T[]

const mix: Mix = (firstArr, secondArr) => [...firstArr, ...secondArr];

const mixed = mix([1, 2, 3], [4, 5, 6]);

console.log(`Mix: ${mixed}`)

//4. Count

type Count = <T>(items: T[]) => number;

const count: Count = (items) => items.length;

const counted = count([1, 2, 3, 4, 5]);

console.log(`Count :${counted}`);

//5. FindIndex

type FindIndex = <T>(items: T[], item:T) => number | boolean;

const find: FindIndex = (items, item) => {
    const index = items.indexOf(item)
    return  index === -1 ? false : index;
}

const found = find([1, 2, 3, 4], 1);

console.log(`FindIndex (found): ${found}`);

const notFound = find([1, 2, 3, 4], 5);

console.log(`FindIndex (not found): ${notFound}`);

//6. Slice

type Slice = <T>(items: T[], start: number, end?:number) => T[]

const slice : Slice = (items, start, end) => items.slice(start, end);

const sliced = slice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6);

console.log(`Slice ${sliced}`); */ 
