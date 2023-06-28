/**
 * 글로벌 컨텍스트의 this
 *  - 브라우저 :
 *  - 노드 : 모듈
 */
const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);

console.clear();

/**
 * 함수 내붕서의 this
 */
function fun() {
    console.log(this);
}
fun();
