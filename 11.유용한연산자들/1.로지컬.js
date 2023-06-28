// 논리연산자
// && 그리고
// || 또는
// 단축평가
const obj1 = { name: '강아지' };
const obj2 = { name: '고양이', owner: '엘리' };

if (obj1 || obj2) {
    console.log('둘다 true!');
}

let result = obj1 && obj2;
console.log(result);

result = obj1 || obj2;
console.log(result);

// 활용예
// && 조건이 true일때, 무언가를 해야 할 경우
// || 조건이 false일때, 무언가를 해야 할 경우
function changeOwner(animal) {
    if (!animal.owner) {
        throw new Error('주인이 없음');
    }
    animal.owner = '바뀐주인!';
}

function makeNewOwner(animal) {
    if (animal.owner) {
        throw new Error('주인이 있음');
    }
    animal.owner = '새로운주인!';
}
console.clear();

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

// obj1.owner || changeOwner(obj1);
// obj2.owner || changeOwner(obj2);
// console.log(obj1);
// console.log(obj2);

// null 또는 indefined인 경우를 확인할때
let item = { price: 1 };
const price = item && item.price;
console.log(item);

// 기본값을 설정
// default parameter 전달하지 않거나, indefined 설정
// || 값이 false한 경우 설정 : 0, -0, null, undefined, ''
function print(message) {
    const text = message || 'Hello';
    console.log(text);
}

print();
print(undefined);
print(null);
print(0);

function print2(message = 'Hi') {
    const text = message || 'Hello';
    console.log(text);
}

print2();
print2(undefined);
print2(null);
print2(0);
