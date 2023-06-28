const map = new Map([
    ['key1', '🍎'],
    ['key2', '🍌'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size); //2

// 존재하는지 확인
console.log(map.has('key1')); // true
console.log(map.has('key5')); // false

// 순회
map.forEach((value, key) => console.log(key, value)); // key1 🍎 key2 🍌
console.log(map.keys()); // [Map Iterator] { 'key1', 'key2' }
console.log(map.values()); // [Map Iterator] { '🍎', '🍌' }
console.log(map.entries()); // [Map Entries] { [ 'key1', '🍎' ], [ 'key2', '🍌' ] }

// 찾기
console.log(map.get('key1')); // 🍎
console.log(map.get('key2')); // 🍌
console.log(map.get('key3')); // undefined

// 추가
map.set('key3', '🥝');
console.log(map); // Map(3) { 'key1' => '🍎', 'key2' => '🍌', 'key3' => '🥝' }

// 삭제
map.delete('key3');
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 전부 삭제
map.clear();
console.log(map); // Map(0) {}

// 오브젝트와의 큰 차이점??
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', pirce: 10, description: '맛있는우유' };
const obj = {
    [key]: milk,
};
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]);
