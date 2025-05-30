const products = [
  { id: 1, name: 'Футболка', price: 500 },
  { id: 2, name: 'Кепка', price: 300 },
  { id: 3, name: 'Чашка', price: 150 },
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