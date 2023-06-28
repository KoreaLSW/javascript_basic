// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter {
    constructor(count) {
        if (count > 0 && typeof count === 'number') {
            this.count = count;
        } else {
            this.count = 0;
        }
    }

    plus = () => {
        this.count += 1;
    };

    minus = () => {
        this.count -= 1;
    };
    plint = () => {
        console.log(this.count);
    };
}

const count = new Counter('123');
count.plus();
count.plus();
count.plus();
count.plint();
