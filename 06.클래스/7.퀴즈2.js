// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Staff {
    constructor(name, department, workingHours) {
        this.name = name;
        this.department = department;
        this.workingHours = workingHours;
    }
}

class FullTimeStaff extends Staff {
    #PAY_RATE = 10000;
    constructor(name, department, workingHours) {
        super(name, department, workingHours);
    }

    salary = () => {
        return this.workingHours * this.#PAY_RATE;
    };
}

class PartTimeStaff extends Staff {
    #PAY_RATE = 8000;
    constructor(name, department, workingHours) {
        super(name, department, workingHours);
    }

    salary = () => {
        return this.workingHours * this.#PAY_RATE;
    };
}

const fullTime = new FullTimeStaff('이상우', '개발팀', 120);
console.log(fullTime.salary());

const partTime = new PartTimeStaff('홍길동', '디자인팀', 50);
console.log(partTime.salary());
