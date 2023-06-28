// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('자자!');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('자자!');
//     }
//     play() {
//         console.log('놀자!');
//     }
// }

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('먹자!');
    }
    sleep() {
        console.log('자자!');
    }
}

class Tiger extends Animal {
    hunt() {
        console.log('사냥하자!');
    }
}

const tiger = new Tiger('노랑이');
//console.log(tiher);
//tiger.sleep();
//tiger.eat();

class Dog extends Animal {
    constructor(color, ownerName) {
        super(color);
        this.ownerName = ownerName;
    }
    play() {
        console.log('놀자!');
    }

    // 부모클래스에 있는 함수를 자식클래스에서 똑같은 이름의 함수로 덮어씌움
    // 오버라이딩
    eat() {
        super.eat();
        console.log('강아지가 먹는다!');
    }
}

const dog = new Dog('빨강이', '사람');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
