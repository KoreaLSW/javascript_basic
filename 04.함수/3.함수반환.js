// return을 명시적으로 하지 않으면 자동으로 indefined이 반환됨!
function add(a, b) {
    return a + b;
    //return undefined;
}

const result = add(1, 2);
console.log(result);

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍 종료함.
function print(num) {
    console.log(num);
}

function add2(a, b) {
    if (a < 0) {
        return;
    }
    return a + b;
}
console.log(add2(-1, 1));

print('프린터');
