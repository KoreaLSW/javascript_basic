// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']
let uniqueFruits = [];
fruits.forEach((e) => {
    if (!uniqueFruits.includes(e)) {
        uniqueFruits.push(e);
    }
});

console.log(uniqueFruits);

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3, 4]);
const set3 = new Set([]);
for (const i of set1) {
    for (const j of set2) {
        if (i === j) {
            set3.add(j);
        }
    }
}
console.log(set3);
