// 조건문(switch)
// switch
// 정해진 범위안에 값에 대해 특정한 일을 해야 하는 경우.
let day = 1;
let dayName;
if (day === 0) {
    dayName = '월요일';
} else if (day === 1) {
    dayName = '화요일';
} else if (day === 2) {
    dayName = '수요일';
} else if (day === 3) {
    dayName = '목요일';
} else if (day === 4) {
    dayName = '금요일';
} else if (day === 5) {
    dayName = '토요일';
} else if (day === 6) {
    dayName = '일요일';
} else {
    dayName = '오류';
}
console.log(dayName);

switch (day) {
    case 0:
        dayName = '월요일';
        break;
    case 1:
        dayName = '화요일';
        break;
    case 2:
        dayName = '수요일';
        break;
    case 3:
        dayName = '목요일';
        break;
    case 4:
        dayName = '금요일';
        break;
    case 5:
        dayName = '토요일';
        break;
    case 6:
        dayName = '일요일';
        break;
    default:
        dayName = '오류';
}
console.log(dayName);

switch (day) {
    case 0:
        dayName = '월요일';
    case 1:
        dayName = '화요일';
    case 2:
        dayName = '수요일';
    case 3:
        dayName = '목요일';
    case 4:
        dayName = '금요일';
    case 5:
        dayName = '토요일';

    case 6:
        dayName = '일요일';
    default:
        dayName = '오류';
}
console.log(dayName);
