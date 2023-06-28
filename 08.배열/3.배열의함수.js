// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['바나나', '사과', '레몬'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('사과')); // 1

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('사과')); // true
console.log(fruits.includes('수박')); // false

// 주가 - 제일 뒤
let length = fruits.push('복숭아'); // 배열 자체를 업데이트하는 함수(추가되고나서 배열의 길이를 return함)
console.log(fruits); //[ '바나나', '사과', '레몬', '복숭아' ]
console.log(length); // 4

// 추가 - 제일 앞
let length2 = fruits.unshift('딸기'); // 배열 자체를 업데이트하는 함수(추가되고나서 배열의 길이를 return함)
console.log(fruits); //[ '딸기', '바나나', '사과', '레몬', '복숭아' ]
console.log(length2); // 5

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 업데이트하는 함수(어떤 아이템을 제거했는지 return함)
console.log(fruits); // [ '딸기', '바나나', '사과', '레몬' ]
console.log(lastItem); // 복숭아

// 제거 - 제일 앞
let firstItem = fruits.shift(); // 배열 자체를 업데이트하는 함수(어떤 아이템을 제거했는지 return함)
console.log(fruits); //  ['바나나', '사과', '레몬' ]
console.log(firstItem); // 딸기

// 중간에 추가 또는 삭제
//splice(어디서 시작할건지, 몇개를 삭제할건지)
let deletedItem = fruits.splice(1, 1); // 기존의 ['바나나', '사과', '레몬' ]에서 1번쨰에서 1개를 삭제해서 '사과'가 삭제됨
console.log(fruits); // [ '바나나', '레몬' ]
console.log(deletedItem);

fruits.splice(1, 1, '사과', '딸기'); // 시작한부분에서 1개를 삭제하고 '사과', '딸기'를 추가함
console.log(fruits); // [ '바나나', '사과', '딸기', '레몬' ]

console.clear();
console.log(fruits);

// 기존의 배열은 그대로 유지하고 잘라진 새로운 배열을 만들어서 리턴
let newArr = fruits.slice(0, 2); // 0번째부터 2번째전까지 잘라서 리턴
console.log(fruits); // [ '바나나', '사과', '딸기' ]
console.log(newArr); // [ '바나나', '사과' ]

let newArr2 = fruits.slice(2); // 숫자를 한개만 지정하면 첫번째부터 지정한숫자 전까지 잘라서 리턴
console.log(fruits); // [ '바나나', '사과', '딸기' ]
console.log(newArr2); // [ '딸기' ]

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ]
console.clear();

// 중첩 배열을 하나의 배열로 펴기
let arr = [
    [1, 2, 3],
    [4, [5, 6, 3, 4]],
];
console.log(arr); // [ [ 1, 2, 3 ], [ 4, [ 5, 6, 3, 4 ] ] ]
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6, 3, 4 ] ]
console.log(arr.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill(0); // 처음부터 끝까지 배열을 0으로 채움
console.log(arr); // [ 0, 0, 0, 0, 0, 0, 0, 0 ]

arr.fill('s', 1, 3); // 1부터 3전까지의 값을 s로 바꿈
console.log(arr); // [ 0, 's', 's', 0, 0, 0, 0, 0 ]

arr.fill('s', 1); // 1부터 끝까지 s로 바꿈
console.log(arr); //[ 0,'s', 's', 's','s', 's', 's', 's' ]

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text); // 0,s,s,s,s,s,s,s

text = arr.join(' | ');
console.log(text); // 0 | s | s | s | s | s | s | s
