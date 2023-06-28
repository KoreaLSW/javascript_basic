// set
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size); // 3

// 존재하는지 확인
console.log(set.has(2)); // true
console.log(set.has(5)); // false

// 순회
set.forEach((item) => console.log(item)); // 1 2 3
for (const value of set.values()) {
    console.log(value);
}

// 추가
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }
set.add(6); // set은 중복이 안됨
console.log(set); // Set(4) { 1, 2, 3, 6 }

// 삭제
set.delete(6);
console.log(set); // Set(3) { 1, 2, 3 }

// 전부삭제
set.clear();
console.log(set); // Set(0) {}

// 오브젝트
const obj1 = { name: '사과', price: 8 };
const obj2 = { name: '바나나', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs); // Set(2) { { name: '사과', price: 8 }, { name: '바나나', price: 5 } }

// 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// 퀴즈2
const obj3 = { name: '바나나', price: 5 };
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);
