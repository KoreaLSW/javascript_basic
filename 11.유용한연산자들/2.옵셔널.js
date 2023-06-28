// 옵셔널 체이닝 연산자
// ES11
// ?.

// null 또는 indefined인 경우를 확인할때
let item = { price: 1 };
const price = item?.price;
console.log(item);

let obj = { name: '강아지', owner: { name: '엘리' } };
function printName(obj) {
    //const ownerName = obj && obj.owner && obj.owner.name;
    const ownerName = obj?.owner?.name;
    console.log(ownerName);
}

printName();
