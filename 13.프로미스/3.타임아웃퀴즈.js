// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
    let number = seconds;
    if (number <= 0) {
        throw new Error('숫자가 0보다 작을 수 없습니다.');
    } else {
        number = number * 1000;
        callback(number);
    }
}

runInDelay(timer, 1);

function timer(second) {
    setTimeout(() => {
        console.log('호출됨');
    }, second);
}
