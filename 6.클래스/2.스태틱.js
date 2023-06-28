// static 정적 프로퍼티, 메서드
class Fruit {
    static MAX_FRUITS = 5;
    // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    // 클래스 레벨의 메서드
    static makeRanomFruit() {
        // 클래스 레벨의 메서드에서는 this를 참조할 수 없음.
        console.log(this.MAX_FRUITS);
        return new Fruit('banana', '🍌');
    }

    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}

console.log(Fruit.makeRanomFruit());

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

apple.display();
console.log(orange);

Math.pow();
