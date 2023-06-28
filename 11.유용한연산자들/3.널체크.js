// ES11
// ?? : null, undefined인 경우
// || false한 경우 설정 : 0, -0, ''...
let num = 0;
console.log(num || '-1'); // -1
console.log(num ?? '-1'); // 0
