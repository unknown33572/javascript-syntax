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

const coin = 800;
let productLength = product.length;

for(let i = 0; i < productLength; i++) {
  if(product[i].price <= coin) {
    console.log(product[i].name);
  }
}