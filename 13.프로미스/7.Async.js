function getBanana() {
    return new Promise((resolve) => {
        resolve('banana');
    });
}

function getApple() {
    return new Promise((resolve) => {
        resolve('apple');
    });
}

function getOrange() {
    return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기.
async function fetchFruits() {
    const banana = await getBanana();
    const apple = await getApple();
    return [banana, apple];

    // return getBanana() //
    //     .then((banana) =>
    //         getApple() //
    //             .then((apple) => [banana, apple])
    //     );
}

console.log('1');
fetchFruits() //
    .then((fruit) => console.log(fruit));
console.log('3');
