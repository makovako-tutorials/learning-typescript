var fn = () => "response";

var a: number;

var myArray: number[] = [1, 2, 3];

var myTuple: [number, boolean] = [12, true];

function add(a: number, b: number) {
  return a + b;
}

function add2(a, b, c?) {
  return a + b;
}

function add3(a, b, c = 0) {
  return a + b + c;
}

function one(): number {
    return 1;
}

console.log(add2(1, 2));
console.log(add2(1, 2, 3));

console.log(add3(1,2));
console.log(add3(1,2,3));

var sum = add(1, 2);

console.log(sum);

var b = true; // implicit typing to boolean, cannot assign anything else

var c : any;

c = true;
c = 10;

var d : number | string;

d = 10;
d = 'Hello';
// d = true //does not work


