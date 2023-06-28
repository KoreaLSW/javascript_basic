const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); // 배열의 사이즈를 알려줌

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 추가, 삭제 - 좋지 않은 방식
fruits[4] = '🍓'; // 이미 선언된 배열에 덮어씌워질수있기때문에 이렇게 추가하는건 금지
console.log(fruits);

delete fruits[1];
console.log(fruits);
