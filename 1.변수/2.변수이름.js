/**
 * 라틴문자(0-9, a-z, A-Z),
 * 대소문자를 구분함
 * 추천: camelCase(likeThis)
 * 한국어로쓰면 동작은 하는데 빠따로 엉덩이 맞음
 * 예약어 안됨
 * 숫자로 시작하면 안됨
 * 특수문자 안됨 (_, $)는 가능
 */

let apple;
let redApple;

// 나쁜예제
let number = 20; // 너무 추상적임

// 좋은예제
let age = 20; // 나이라는 의미가 부여되어있음

// 나쁜에제2
let audio1;
let audio2;

// 좋은예제
let backgroundAudio;
let windAudio;

// 꿀팁!
let audioBackground;
let audioWind;
