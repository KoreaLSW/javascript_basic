function loop() {
    const array = [];
    for (i = 0; i < 5; i++) {
        array.push(function () {
            console.log(i);
        });
    }
    return array;
}
const array = loop();
array.forEach((func) => func());
console.log(array[0]());
