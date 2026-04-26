
// Render products
const productList = document.getElementById("productList");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

displayProducts(products);

// Search functionality
document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
});



// Example: Clickable footer links
document.querySelectorAll(".footer-section ul li").forEach(item => {
  item.addEventListener("click", () => {
    alert(`You clicked on ${item.textContent}`);
  });
});


//product button clickable 

// 1. Ek empty cart array banayein
let cart = [];

// 2. Button ko select karein
const addButtons = document.querySelectorAll('.product-btn');

// 3. Har button par click event lagayein
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Product ki details lein
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');

        // Product ko cart mein add karein
        const item = { name: name, price: price };
        cart.push(item);

        alert(name + " cart mein add ho gaya!");
        console.log(cart); // Cart check karne ke liye
    });
});



let cart = [];

// Elements ko select karein
const addButtons = document.querySelectorAll('.product-btn');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Click event handle karein
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        // Cart mein add karein
        cart.push({ name, price });

        // Screen update karein
        displayCart();
    });
});

// Cart ko display karne ka function
function displayCart() {
    // Purani list clear karein taake repeat na ho
    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        
        // Naya list item banayein
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
    });

    // Total price update karein
    totalPriceElement.textContent = total;
}


document.addEventListener('DOMContentLoaded', () => {
    // Pichla saara JavaScript code yahan likhein
});
document.addEventListener('DOMContentLoaded', () => {
    let cart = [];
    const addButtons = document.querySelectorAll('.product-btn');
    const cartItemsList = document.getElementById('cart-items');

    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log("Button Clicked!"); // Yeh test karne ke liye
            const name = e.target.getAttribute('data-name');
            const price = e.target.getAttribute('data-price');
            
            cart.push({ name, price });
            updateDisplay();
        });
    });

    function updateDisplay() {
        cartItemsList.innerHTML = cart.map(item => `<li>${item.name} - $${item.price}</li>`).join('');
    }
});












