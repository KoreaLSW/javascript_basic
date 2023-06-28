function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
    return Promise.reject(new Error('can not find 🐓'));
}

// async function getA() {
//     const chicken = await getChicken() //
//         .catch((error) => {
//             console.log(error);
//             return '🐔';
//         });
//     const egg = await fetchEgg(chicken);
//     const fry = await fryEgg(egg);
//     return fry;
// }

// getA() //
//     .then((value) => console.log(value));

function makeFriedEgg() {
    return getChicken()
        .catch(() => '🐔')
        .then((chicken) => fetchEgg(chicken))
        .then((egg) => fryEgg(egg))
        .then((result) => {
            console.log(result);
            return result;
        });
}

makeFriedEgg().then(console.log);
