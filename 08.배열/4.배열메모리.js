// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, clice, spread(...). Object,assign

const pizza = { name: '피자', price: 2, onwer: { name: 'Ellie' } };
const ramen = { name: '라면', price: 3 };
const sushi = { name: '스시', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);

// shallow copy
pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);
