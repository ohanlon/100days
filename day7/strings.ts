const strings: number[] = [10, 13, 17, 26, 36, 46];
console.log(strings);
const genericStrings: Array<number> = [10, 13, 17, 26, 36, 46];
genericStrings.push(1);
const emptyStrings: number[] = [];
const emptyGenericStrings2: Array<number> = new Array<number>();
const emptyGenericStrings: Array<number> = [];

emptyGenericStrings.push(30);
emptyGenericStrings.push(40,50,60);
console.log(emptyGenericStrings);

const popString = [ 30, 40, 50, 60 ];
popString.pop();
console.log(popString);

const sliceStrings = [ "item1", "item2", "item3", "item4", "item5" ];
const index = sliceStrings.indexOf("item2");
sliceStrings.splice(index, 1);
console.log(sliceStrings);