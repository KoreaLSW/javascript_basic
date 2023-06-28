// 동등 비교 관계 연산자
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 둘다 다름
console.log(2 == 2); // 값이 같은가
console.log(2 != 2); // 값이 다른가
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2'); // 타입은 다르지만 2라는 값이 같기때문에 true가 나옴
console.log(2 === '2'); // 2라는 값은 같지만 타입이 다르기때문에 false가 나옴
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);

const obj1 = {
    name: 'js',
};

const obj2 = {
    name: 'js',
};

console.log(obj1 == obj2);
console.log(obj1 === obj2);

const obj3 = obj2;
console.log(obj3 == obj2);
