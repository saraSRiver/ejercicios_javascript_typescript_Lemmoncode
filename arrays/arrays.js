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
    array.pop();
    console.log('init: ' + array);
}
init();

function last(){
    const array = [1,2,3,4];
    console.log('last: ' +  array.pop());
}
last();

function concat(){
    const array = [1,2,3,4];
    const array2 = [5,6,7,8];
    console.log([...array,...array2]);
}
concat();



