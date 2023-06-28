const fruits = ['🍌', '🍓', '🍇', '🍓'];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// forEach : 배열을 돌면서 원하는것을 할때
fruits.forEach((value, index, array) => {
    console.log(value); // 배열의 값을 하나씩 가져옴
    console.log(index); // 배열의 값의 위치를 가져옴
    console.log(array); // 배열자체를 가져옴
});

console.clear();

// find : 조건에 맞는 아이템을 찾을때
const item1 = { name: '우유', price: 2 };
const item2 = { name: '쿠키', price: 3 };
const item3 = { name: '삼각김밥', price: 1 };
const products = [item1, item2, item3];

let result = products.find((value) => {
    //배열을 돌면서 조건에 맞는 값이 생기면 그 값을 return해줌
    return value.name === '쿠키';
});
console.log(result); // { name: '쿠키', price: 3 }

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => {
    return value.name === '삼각김밥';
});
console.log(result); // 2

// some : 배열의 아이템들이 부분적으로 조건에 맞는지 확인
result = products.some((item) => {
    return item.name === '쿠키';
});
console.log(result); // true

// every : 배열의 아이템들이 전부 조건에 맞는지 확인
result = products.every((item) => {
    return item.name === '쿠키';
});
console.log(result); // false

// filter : 조건에 맞는 모든 아이템들을 새로운 배열로 만들어서 반환
result = products.filter((item) => {
    return item.name === '쿠키';
});
console.log(result); // [ { name: '쿠키', price: 3 } ]

console.clear();

// map : 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result); // [ 2, 4, 6, 8, 10 ]

result = nums.map((item) => {
    if (item % 2 === 0) {
        return item * 2;
    } else {
        return item;
    }
});
console.log(result); // [ 1, 4, 3, 8, 5 ]

// flatmap: 중첩된 배열을 쫘악 펴줌
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort : 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // [ 0, 1, 10, 2, 4, 5 ]

// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 0, 1, 2, 4, 5, 10 ]

// reduce 배열의 요소들을 접어서 값을 하나로
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
    sum += value;
    return sum;
}, 0);
console.log(result); // 15
