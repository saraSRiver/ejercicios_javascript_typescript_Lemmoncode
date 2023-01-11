function head(){
    const array = [1,2,3,4];
    let [first] = array;
    console.log('head: ' + first);
}
head();

function tail(){
    const array = [1,2,3,4];
    let [primer, ...resto] = array;
    console.log('tail: ' + resto);
}
tail();

function init(){
    const array = [1,2,3,4];
    console.log('init: ' + array.slice(0,-1));
}
init();

function last(){
    const array = [1,2,3,4];
    console.log('last: ' +  array.slice(3));
}
last();

function concat(){
    const array = [1,2,3,4];
    const array2 = [5,6,7,8];
    console.log([...array,...array2]);
}
concat();

function concat2(){
    const array = [1,2,3,4];
    const array2 = [5,6,7,8];
    const array3 = [9,10,11,12];
    const array4 = [13,14,15,16];
    console.log([...array,...array2,...array3,...array4]);
}
concat2();


