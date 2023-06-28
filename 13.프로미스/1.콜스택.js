function a() {
    for (let i = 0; i < 1000000000; i++) {}
    return 1;
}

function b() {
    return a() + 1;
}

function c() {
    return b() + 1;
}

// 콜스택
// 이벤트루프
// Task Queue
const result = c();
console.log(result);
