// 이터러블 하다는건 순회가 가능하다는것
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알 수 잇음
// 순회가 가능하면 무엇을 할 수 있나? for..or, spread

const array = [1, 2, 3];
for (const item of array) {
    console.log(item);
}

const obj = { 0: 1, 1: 2 };
for (const item in obj) {
    console.log(item);
}

const iterator = array.values();
while (true) {
    const item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}

// for (const item of iterator) {
//     console.log(item);
// }
