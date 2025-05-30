const products = [
  { id: 1, name: 'Martynov_Serhii', price: 999 },
  { id: 2, name: 'Shafunov_Bogdan', price: 199 },
  { id: 3, name: 'Пенсил Дилары', price: 350 },
];

const productList = document.getElementById('product-list');

products.forEach(p => {
  const item = document.createElement('div');
  item.className = 'product';
  item.innerHTML = `
    <strong>${p.name}</strong><br>
    Ціна: ${p.price} грн<br>
    <button onclick="buy(${p.id})">Купити</button>
  `;
  productList.appendChild(item);
});

function buy(productId) {
  const product = products.find(p => p.id === productId);
  Telegram.WebApp.showAlert(`Ви купили ${product.name} за ${product.price} грн!`);
}
