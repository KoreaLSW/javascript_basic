// 문자열타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는법
string = "'안녕!'";
console.log(string);

// 이스케이프 표현
string = '안녕!\n길동아!\t\tㅋㅋ\\';
console.log(string);
console.log('\u09AC'); // 유니코드

// 템플릿 리터럴(Template Literal) ``
let id = '철수';
let greetings = "'안녕!, '" + id + '반가워\n즐거운 하루!';
console.log(greetings);

greetings = `'안녕, ${id}🖐
즐거운 하루 보내! `;
console.log(greetings);
