// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다.
const fruits = ['사과', '키위', '딸기', '바나나'];
const [first, second, ...others] = fruits;

console.log(fruits[0]); // 사과
console.log(first); // 사과
console.log(second); // 키위
console.log(others); // [ '딸기', '바나나' ]

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
    return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
    console.log('이름', name);
    console.log('나이', age);
    console.log('직업', job);
}
display(ellie);

const { name, age, job: occuption, pet = '누렁이' } = ellie;
console.log(name);
console.log(age);
console.log(occuption);
console.log(pet);
