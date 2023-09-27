// let inputPrice = 5000;
// let coinUnit = 500;
// let coinCount = 0;

// while(inputPrice > 0) {
//   inputPrice -= coinUnit;
//   coinCount++;
// }

// console.log(coinCount); // 10

let inputPrice = 5000;
let coinUnit = [500, 100, 50, 10];
let coinCount = [0, 0, 0, 0];

let product = [
  {
    name: '핫식스',
    price: 1200,
  },
  {
    name: '코카콜라',
    price: 1100,
  },
  {
    name: '삼다수',
    price: 700,
  },
  {
    name: '포카리스웨트',
    price: 1000,
  },
  {
    name: '밀키스',
    price: 700,
  },
  {
    name: '레쓰비',
    price: 800,
  },
  {
    name: '환타',
    price: 1200,
  },
  {
    name: '스프라이트',
    price: 900,
  }
];

let selectedProductPrice = product[2].price; // 선택한 상품의 가격

while (selectedProductPrice > 0) {
  for (let i = 0; i < coinUnit.length; i++) {
    if (selectedProductPrice >= coinUnit[i]) {
      const count = Math.floor(selectedProductPrice / coinUnit[i]);
      coinCount[i] += count;
      selectedProductPrice -= coinUnit[i] * count;
    }
  }
}

console.log("해당 상품 " + `${product[2].name}` + "을(를) 구매하시면 " + "500원 "+ coinCount[0] + "개" + " 100원 " + coinCount[1] + "개" + 
" 50원 "+ coinCount[2] + "개" + " 10원 " + coinCount[3] + "개의 동전이 필요합니다.");