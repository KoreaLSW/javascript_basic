// 삼항 조건 연산자
// 조건식 ? 참인경우 : 거짓인경우

let fruit = 'orange';

if (fruit === 'apple') {
    console.log('사과');
} else if (fruit === 'orange') {
    console.log('오렌지');
} else {
    console.log('이도저도아님');
}

fruit === 'apple' ? console.log('사과') : console.log('오렌지');

let emoji = fruit === 'apple' ? '사과' : 'ㅋ';
console.log(emoji);
