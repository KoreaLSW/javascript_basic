// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수(오래된 고전적인 방법)
// 2. 클래스

// 생성자함수
class Fruit {
    // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

apple.display();

console.log(orange);

//obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: '길동이' };
