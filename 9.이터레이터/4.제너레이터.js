// const multiple = {
//     [Symbol.iterator]() {
//         const max = 10;
//         let num = 0;
//         return {
//             next() {
//                 return { value: num++ * 2, done: num > max };
//             },
//         };
//     },
// };

function* multipleGenerator() {
    try {
        for (let i = 0; i < 10; i++) {
            console.log(i);
            yield i ** 2; // 사용자가 next()를 호출할때만 한번씩 순회함.
        }
    } catch (error) {
        console.error(error);
    }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
//multiple.return(); // return을하면 순회를 끝낸다
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);
