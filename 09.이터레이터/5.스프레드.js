// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 펼쳐 질 수 있다.
// function(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018 추가됨
function add(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
    console.log(nums);
}
sum(1, 2, 0, 1, 2, 3, 4, 5);

// Array Concat
const fruits1 = ['사과', '키위'];
const fruits2 = ['딸기', '바나나'];
let arr = fruits1.concat(fruits2);
console.log(arr); // [ '사과', '키위', '딸기', '바나나' ]

arr = [...fruits1, ...fruits2];
console.log(arr); // [ '사과', '키위', '딸기', '바나나' ]

// Object
const ellie = { name: 'Ellie', age: 20, home: { address: 'home' } };
const updated = {
    ...ellie,
    job: 's/w',
};
console.log(ellie); // { name: 'Ellie', age: 20, home: { address: 'home' } }
console.log(updated); // { name: 'Ellie', age: 20, home: { address: 'home' }, job: 's/w' }
