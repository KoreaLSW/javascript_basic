//  프로미스 : 무겁고 오래걸리는일을 비동기처리로 도와주는것
// then : 일이 끝나고 받는곳
// catch : 애러가 떴을때
// finally : 모든일이 끝났을때

// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자! ⏱
function runInDelay(seconds) {
    // resolve : 성공적으로 성공했을때
    // reject : 애러가 떳을때
    return new Promise((resolve, reject) => {
        if (!seconds || seconds < 0) {
            reject(new Error('seconds가 0보다 작음'));
        }
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

runInDelay(2)
    .then(() => console.log('타이머 완료!')) // 필요한 일을 수행
    .catch(console.error) // 에러 처리
    .finally(() => console.log('끝!')); // 최종적으로 무조건 호출!

// try {
//     runInDelay(() => {
//         console.log('타이머 완료!');
//     }, 2);
// } catch (error) {}
