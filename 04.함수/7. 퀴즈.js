// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함.
// 5, 순회하는 숫자를 다 출력하고 싶음.
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음.
// function iterate(max, action);

function iterate(max, action) {
    for (let i = 0; i < max; i++) {
        action(i);
    }
}

function print(a) {
    console.log(a + 1);
}

function printX2(a) {
    console.log((a + 1) * 2);
}

iterate(5, print);
setTimeout(() => {
    console.log('zz');
}, 1234);
