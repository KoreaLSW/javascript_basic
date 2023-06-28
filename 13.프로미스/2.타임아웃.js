function execute() {
    console.log('1');
    // 3초뒤에 콜백함수를 실행해줘!
    setTimeout(() => {
        console.log(2);
    }, 3000);
    console.log(3);
}

execute();

// execute() 실행
// console.log('1'); 실행
// setTimeout(); 3초 대기 후 콜스텍큐에 들어옴
// console.log('3'); 실행
// 3초뒤 setTimeout()가 살행되어 console.log('2'); 실행
