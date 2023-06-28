// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됩니다.
// 매개변수 기본값 Default Paramenters a = 1, b = 1
function add(a, b) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    return a + b;
}
add(1, 2, 3);

// Rest 매개변수 Rest parameters
function sum(a, b, ...numbers) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(numbers); // [3, 4, 5, 6, 7, 8, 9]
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
