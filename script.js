/* ------------------------------
   Central script for all pages
   ------------------------------ */

/* ---------- PRODUCTS DATA ----------
   For demo we include many sample parts across categories.
   You can expand or replace images with local / real images.
*/
const ALL_PRODUCTS = [
  // Engine (1-16)
  { id: 1, name: "Engine Oil Filter", price: 350, category: "Engine", img: "https://i5.walmartimages.com/seo/Engine-Oil-Filter_980011e0-5374-4b4a-b8f3-3d7d9d26fdc7.a060d70f995c0e9777df6fa207979a3e.jpeg" },
  { id: 2, name: "Fuel Injector", price: 1200, category: "Engine", img: "https://tse3.mm.bing.net/th/id/OIP.YLbfRi5czqN9QbNhrDziRgHaFN?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 3, name: "Spark Plug", price: 200, category: "Engine", img: "https://tse3.mm.bing.net/th/id/OIP.7A1aVajGC2PUJ2DXWis2bgHaE8?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 4, name: "Air Filter", price: 500, category: "Engine", img: "https://tse3.mm.bing.net/th/id/OIP.Q-ZBLBwb-YGNJnQz_DPXUwHaEZ?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 5, name: "Timing Belt", price: 750, category: "Engine", img: "https://tse3.mm.bing.net/th/id/OIP.piJMSBKZWIY0CCEFHFKbeAHaEY?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 6, name: "Car Water Pump", price: 950, category: "Engine", img: "https://tse3.mm.bing.net/th/id/OIP.ifHVmrWyC6WFu_8GwbV-9gHaFh?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 7, name: "Oil Pump", price: 1100, category: "Engine", img: "https://tse4.mm.bing.net/th/id/OIP.cVDhtUoq9SSmhykhUPCaVQHaE7?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 8, name: "Cylinder Head", price: 1800, category: "Engine", img: "https://thumbs.dreamstime.com/z/car-engine-cylinder-head-diagonal-view-44928996.jpg" },
  { id: 9, name: "Engine Mount", price: 600, category: "Engine", img: "https://tse1.mm.bing.net/th/id/OIP.BQI8p2XaKzaj6yCkhjeb_gHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 10, name: "Piston Kit", price: 2400, category: "Engine", img: "https://enginetech.com/wp-content/uploads/2019/02/Engine-Master-Kit-2-scaled.jpg" },
  { id: 11, name: "Valve Cover", price: 800, category: "Engine", img: "https://m.media-amazon.com/images/I/71L+nveFLOL._AC_SL1500_.jpg" },
  { id: 12, name: "Crankshaft", price: 2800, category: "Engine", img: "https://www.ebaymotorsblog.com/motors/blog/wp-content/uploads/2023/08/Brian_Crower_Honda_K20_Crankshaft-l1600.jpg" },
  { id: 13, name: "Camshaft", price: 2600, category: "Engine", img: "https://th.bing.com/th/id/R.13e33edc6277a4b2814939c4ae81f829?rik=%2bBCR6rSpzDrGag&riu=http%3a%2f%2fwww.junauto.co.jp%2fgallery%2fvalvetrain%2fcamshaft_1nz.jpg&ehk=5yjTq1bxrQ1BAYnNLkPvk4RR3o3S6EXVTmO0VKRWftc%3d&risl=&pid=ImgRaw&r=0" },
  { id: 14, name: "Turbocharger", price: 4800, category: "Engine", img: "https://tse1.mm.bing.net/th/id/OIP.u5NoW6BYSQJaJC9yIiOCIAHaFj?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 15, name: "Exhaust Manifold", price: 1200, category: "Engine", img: "https://th.bing.com/th/id/OIP.asJebeeYYanZlo8R4XJSSQHaEp?o=7&cb=ucfimg2rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 16, name: "Radiator", price: 2100, category: "Engine", img: "https://th.bing.com/th/id/OIP.xKNBtH6ZGDJHyN7nCfk4zAHaEK?o=7&cb=ucfimg2rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },

  // Electrical (17-32)
  { id: 17, name: "Car Battery", price: 3500, category: "Electrical", img: "https://tse3.mm.bing.net/th/id/OIP.r7besyxFZY79CnGiwo_kywHaFA?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 18, name: "Alternator", price: 4200, category: "Electrical", img: "https://th.bing.com/th/id/OIP.KXq_hh6OR0jy_wO3W8yIXgHaE8?o=7&cb=ucfimg2rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 19, name: "Starter Motor", price: 2500, category: "Electrical", img: "https://tse2.mm.bing.net/th/id/OIP.oHZvn4WyazuMDS9EanF2xgHaFg?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 20, name: "Headlight Bulb", price: 300, category: "Electrical", img: "https://th.bing.com/th/id/OIP.2G93qL0svBtYYlbkYx-GqAHaHa?o=7&cb=ucfimg2rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 21, name: "Tail Light", price: 450, category: "Electrical", img: "https://th.bing.com/th/id/OIP.DqjHuhuOD7BGjreQsZpYegHaFC?o=7&cb=ucfimg2rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 22, name: "Fuse Box", price: 650, category: "Electrical", img: "https://img1.exportersindia.com/product_images/bc-full/2022/1/3676021/fuse-box-1643283459-6175266.jpeg" },
  { id: 23, name: "Ignition Coil", price: 950, category: "Electrical", img: "https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2023/06/13101358/Auto-Anatomy-Ignition-Coil-_-Body-2-12-6-23-1024x640.jpg" },
  { id: 24, name: "Car Horn", price: 400, category: "Electrical", img: "https://m.media-amazon.com/images/I/61v3W6UbqzL._AC_.jpg" },
  { id: 25, name: "Relay Switch", price: 250, category: "Electrical", img: "https://m.media-amazon.com/images/I/61pQwZf6H4L._AC_SL1001_.jpg" },
  { id: 26, name: "Wiring Harness", price: 800, category: "Electrical", img: "https://tse4.mm.bing.net/th/id/OIP.FhK0JegxSZVzXBC4d8GF5wHaFB?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 27, name: "Dashboard Display", price: 3200, category: "Electrical", img: "https://tse3.mm.bing.net/th/id/OIP.P1Zn41kYH5f_IjGfEoru_wHaFj?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 28, name: "AC Compressor", price: 4500, category: "Electrical", img: "https://tse1.mm.bing.net/th/id/OIP.l4hg0xB13Be_9yzJ9dTYLgHaF_?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 29, name: "Power Window Motor", price: 1500, category: "Electrical", img: "https://picsum.photos/300?29" },
  { id: 30, name: "Indicator Light", price: 220, category: "Electrical", img: "https://picsum.photos/300?30" },
  { id: 31, name: "ECU Module", price: 5800, category: "Electrical", img: "https://picsum.photos/300?31" },
  { id: 32, name: "Speed Sensor", price: 900, category: "Electrical", img: "https://picsum.photos/300?32" },

  // Brakes (33-48)
  { id: 33, name: "Brake Pads", price: 1200, category: "Brakes", img: "https://th.bing.com/th/id/R.fc0e4335fe31bdc6c2c4a66411625990?rik=oeNl6nDlQDOKxQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-mOeoVqw4k14%2fUdPYabz_8mI%2fAAAAAAAAA2o%2f5soG1vuHUzQ%2fs1600%2fbrake%2bpad.jpg&ehk=WOiS%2bC2Y%2bzoA2sqv9pqxXdzxX5YqUT3C%2faD5tdk9LQE%3d&risl=&pid=ImgRaw&r=0" },
  { id: 34, name: "Brake Disc", price: 1600, category: "Brakes", img: "https://th.bing.com/th/id/OIP.aqIKoFd8gIa0X63lYPJ2wgHaHa?o=7&cb=ucfimg2rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 35, name: "Brake Caliper", price: 2500, category: "Brakes", img: "https://stewart-switch.com/pictures/automotive-brake-caliper-1.jpg" },
  { id: 36, name: "Brake Fluid", price: 400, category: "Brakes", img: "https://tse3.mm.bing.net/th/id/OIP.mcWGHTIL4Ab_wW-Hc52PigHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 37, name: "Shock Absorber", price: 3200, category: "Brakes", img: "https://picsum.photos/300?37" },
  { id: 38, name: "Coil Spring", price: 2800, category: "Brakes", img: "https://picsum.photos/300?38" },
  { id: 39, name: "Suspension Arm", price: 2600, category: "Brakes", img: "https://picsum.photos/300?39" },
  { id: 40, name: "Brake Booster", price: 2300, category: "Brakes", img: "https://picsum.photos/300?40" },
  { id: 41, name: "ABS Sensor", price: 850, category: "Brakes", img: "https://picsum.photos/300?41" },
  { id: 42, name: "Hand Brake Lever", price: 900, category: "Brakes", img: "https://picsum.photos/300?42" },
  { id: 43, name: "Disc Rotor", price: 1400, category: "Brakes", img: "https://picsum.photos/300?43" },
  { id: 44, name: "Wheel Bearing", price: 1200, category: "Brakes", img: "https://picsum.photos/300?44" },
  { id: 45, name: "Steering Rack", price: 3400, category: "Brakes", img: "https://picsum.photos/300?45" },
  { id: 46, name: "Ball Joint", price: 700, category: "Brakes", img: "https://picsum.photos/300?46" },
  { id: 47, name: "Suspension Link Rod", price: 950, category: "Brakes", img: "https://picsum.photos/300?47" },
  { id: 48, name: "Brake Line Hose", price: 450, category: "Brakes", img: "https://picsum.photos/300?48" },

  // Tyres (49-64)
  { id: 49, name: "Front Tyre 15\"", price: 4000, category: "Tyres", img: "https://maxmotorsport.co.za/cdn/shop/files/15_-Vitour-Tyres-20492161.jpg?v=1708007971&width=1445" },
  { id: 50, name: "Rear Tyre 15\"", price: 4200, category: "Tyres", img: "https://picsum.photos/300?50" },
  { id: 51, name: "All-Season Tyre 16\"", price: 4800, category: "Tyres", img: "https://picsum.photos/300?51" },
  { id: 52, name: "Alloy Wheel 15\"", price: 5000, category: "Tyres", img: "https://picsum.photos/300?52" },
  { id: 53, name: "Spare Tyre", price: 3500, category: "Tyres", img: "https://picsum.photos/300?53" },
  { id: 54, name: "Tire Inflator Pump", price: 900, category: "Tyres", img: "https://picsum.photos/300?54" },
  { id: 55, name: "Tyre Pressure Gauge", price: 400, category: "Tyres", img: "https://picsum.photos/300?55" },
  { id: 56, name: "Wheel Alignment Kit", price: 1500, category: "Tyres", img: "https://picsum.photos/300?56" },
  { id: 57, name: "Wheel Balancer", price: 2900, category: "Tyres", img: "https://picsum.photos/300?57" },
  { id: 58, name: "Tubeless Repair Kit", price: 650, category: "Tyres", img: "https://picsum.photos/300?58" },
  { id: 59, name: "Rim Protector", price: 300, category: "Tyres", img: "https://picsum.photos/300?59" },
  { id: 60, name: "Wheel Nut Set", price: 700, category: "Tyres", img: "https://picsum.photos/300?60" },
  { id: 61, name: "Tyre Cleaner Brush", price: 350, category: "Tyres", img: "https://picsum.photos/300?61" },
  { id: 62, name: "Wheel Bearing Grease", price: 250, category: "Tyres", img: "https://picsum.photos/300?62" },
  { id: 63, name: "Wheel Spacer", price: 1100, category: "Tyres", img: "https://picsum.photos/300?63" },
  { id: 64, name: "Tyre Valve Caps", price: 200, category: "Tyres", img: "https://picsum.photos/300?64" }
];

/* ---------- UTILITIES ---------- */
function formatCurrency(n){ return '₹' + Number(n).toLocaleString('en-IN'); }
function findProductById(id){ return ALL_PRODUCTS.find(p => p.id === Number(id)); }

/* ---------- NAV CART COUNT & AUTH ---------- */
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')||'[]');
  document.querySelectorAll('#navCartCount, #prodCartCount').forEach(el=>{
    if(el) el.textContent = cart.length;
  });
}
function getLoggedInUser(){ return JSON.parse(localStorage.getItem('loggedInUser')||'null'); }

/* ---------- HOME: Featured & Slider (index.html) ---------- */
function showFeaturedOnHome(){
  const featured = [1,17,33,49,14,27]; // sample featured ids
  const container = document.getElementById('featuredProducts');
  if(!container) return;
  container.innerHTML = featured.map(id => {
    const p = findProductById(id);
    return `<div class="product">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${formatCurrency(p.price)}</p>
      <button onclick="addToCartById(${p.id})">Add to Cart</button>
      <button onclick="window.location.href='product-detail.html?id=${p.id}'">View</button>
    </div>`;
  }).join('');
}

/* slider */
function initSlider(){
  const slides = document.querySelectorAll('.slide');
  if(!slides || slides.length===0) return;
  let idx = 0;
  setInterval(()=> {
    slides.forEach(s => s.classList.remove('active'));
    idx = (idx+1) % slides.length;
    slides[idx].classList.add('active');
  },4000);
}

/* live search on home */
function liveSearchHome(){
  const q = document.getElementById('searchBox').value.toLowerCase();
  if(!q){ showFeaturedOnHome(); return; }
  const results = ALL_PRODUCTS.filter(p=>p.name.toLowerCase().includes(q));
  const container = document.getElementById('featuredProducts');
  if(!container) return;
  container.innerHTML = results.slice(0,12).map(p=>`
    <div class="product">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${formatCurrency(p.price)}</p>
      <button onclick="addToCartById(${p.id})">Add to Cart</button>
      <button onclick="window.location.href='product-detail.html?id=${p.id}'">View</button>
    </div>
  `).join('');
}
function searchProductsHome(){ const q=document.getElementById('searchBox').value.trim(); if(q) window.location.href='products.html?search='+encodeURIComponent(q); }

/* ---------- PRODUCTS PAGE (products.html) ---------- */
function renderProductList(){
  const listEl = document.getElementById('productList');
  if(!listEl) return;

  // read query params for initial search
  const params = new URLSearchParams(window.location.search);
  const initialSearch = params.get('search') || '';

  const cat = document.getElementById('catFilter') ? document.getElementById('catFilter').value : '';
  const sortBy = document.getElementById('sortBy') ? document.getElementById('sortBy').value : 'featured';
  const searchQ = (document.getElementById('prodSearch') ? document.getElementById('prodSearch').value : '') || initialSearch;

  let rows = ALL_PRODUCTS.slice();

  if(cat) rows = rows.filter(r => r.category === cat);
  if(searchQ) rows = rows.filter(r => r.name.toLowerCase().includes(searchQ.toLowerCase()));
  if(sortBy==='price_asc') rows.sort((a,b)=>a.price-b.price);
  if(sortBy==='price_desc') rows.sort((a,b)=>b.price-a.price);

  listEl.innerHTML = rows.map(p => `
    <div class="product">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${formatCurrency(p.price)}</p>
      <div style="display:flex;gap:6px;justify-content:center">
        <button onclick="addToCartById(${p.id})">Add to Cart</button>
        <button onclick="window.location.href='product-detail.html?id=${p.id}'">Details</button>
        <button onclick="addToWishlist(${p.id})">♡ Wish</button>
      </div>
    </div>
  `).join('');
}

/* quick filter handler */
function filterProducts(){ renderProductList(); updateCartCount(); }

/* ---------- PRODUCT DETAIL PAGE ---------- */
function renderProductDetail(){
  const detailEl = document.getElementById('productDetail');
  if(!detailEl) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = findProductById(id);
  if(!p){ detailEl.innerHTML = '<p>Product not found.</p>'; return; }

  detailEl.innerHTML = `
    <div class="product-detail-card">
      <div class="detail-img"><img src="${p.img}" alt="${p.name}"></div>
      <div class="detail-info">
        <h2>${p.name}</h2>
        <p class="muted">Category: ${p.category}</p>
        <h3>${formatCurrency(p.price)}</h3>
        <p><strong>Specifications</strong></p>
        <ul>
          <li>High-quality OEM compatible part</li>
          <li>1 year warranty (demo)</li>
          <li>Compatible with multiple models</li>
        </ul>
        <div style="margin-top:12px">
          <button onclick="addToCartById(${p.id})">Add to Cart</button>
          <button onclick="addToWishlist(${p.id})">Add to Wishlist</button>
        </div>
      </div>
    </div>
  `;
}

/* ---------- CART OPERATIONS ---------- */
function getCart(){ return JSON.parse(localStorage.getItem('cart')||'[]'); }
function setCart(c){ localStorage.setItem('cart', JSON.stringify(c)); updateCartCount(); }

function addToCartById(id){
  const p = findProductById(id);
  if(!p) return alert('Product not found');
  const cart = getCart();
  cart.push({ id: p.id, name: p.name, price: p.price, img: p.img });
  setCart(cart);
  alert(p.name + ' added to cart');
}

/* render cart page */
function renderCartPage(){
  const container = document.getElementById('cartItems');
  const summary = document.getElementById('cartSummary');
  if(!container) return;
  const cart = getCart();
  if(cart.length===0){
    container.innerHTML = '<p>Your cart is empty.</p>';
    if(summary) summary.innerHTML = '';
    return;
  }
  container.innerHTML = cart.map((it, idx) => `
    <div class="cart-item">
      <div style="display:flex;gap:10px;align-items:center">
        <img src="${it.img}" alt="${it.name}" style="width:70px;height:60px;object-fit:cover;border-radius:6px">
        <div>
          <p style="margin:0"><strong>${it.name}</strong></p>
          <p style="margin:0;color:#555">${formatCurrency(it.price)}</p>
        </div>
      </div>
      <div>
        <button onclick="removeFromCart(${idx})" style="background:#ff4d4d;color:white;border:none;padding:6px 10px;border-radius:6px;cursor:pointer">Remove</button>
      </div>
    </div>
  `).join('');
  const total = cart.reduce((s,i)=>s+i.price,0);
  if(summary) summary.innerHTML = `<h3>Total: ${formatCurrency(total)}</h3><div style="text-align:right"><button onclick="goToCheckout()">Proceed to Checkout</button></div>`;
}

/* remove item */
function removeFromCart(index){
  const cart = getCart();
  cart.splice(index,1);
  setCart(cart);
  renderCartPage();
}

/* go to checkout */
function goToCheckout(){
  const user = getLoggedInUser();
  if(!user){
    if(confirm('Please login before checkout. Go to login?')) window.location.href='login.html';
    return;
  }
  window.location.href='checkout.html';
}

/* ---------- CHECKOUT & ORDERS ---------- */
function handleCheckoutForm(){
  const form = document.getElementById('checkoutForm');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const user = getLoggedInUser();
    const cart = getCart();
    if(cart.length===0){ alert('Cart empty'); return; }
    const total = cart.reduce((s,i)=>s+i.price,0);
    const order = {
      id: 'ORD-'+Date.now(),
      email: user ? user.email : 'guest',
      date: new Date().toLocaleString(),
      items: cart,
      total: total,
      shipping: {
        name: document.getElementById('shipName').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        zipcode: document.getElementById('zipcode').value
      }
    };
    const orders = JSON.parse(localStorage.getItem('orders')||'[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cart');
    alert('✅ Order placed. Order ID: '+order.id);
    window.location.href='orders.html';
  });
}

/* render my orders page */
function renderOrdersPage(){
  const user = getLoggedInUser();
  if(!user){ /* redirect to login */ return; }
  const all = JSON.parse(localStorage.getItem('orders')||'[]');
  const list = all.filter(o=>o.email===user.email);
  const container = document.getElementById('ordersList');
  if(!container) return;
  if(list.length===0) { container.innerHTML = '<p style="text-align:center">You have no orders yet.</p>'; return; }
  container.innerHTML = list.map((o, idx)=>`
    <div class="order-card">
      <div class="order-header">
        <p><strong>Order #${o.id}</strong></p>
        <p class="order-date">${o.date}</p>
      </div>
      <div class="order-items">
        ${o.items.slice(0,3).map(it=>`
          <div class="order-item">
            <img src="${it.img}" alt="${it.name}">
            <div>
              <p class="item-name">${it.name}</p>
              <p class="item-price">${formatCurrency(it.price)}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="order-footer">
        <p><strong>Total:</strong> ${formatCurrency(o.total)}</p>
        <button onclick="viewOrderDetails('${o.id}')">View Details</button>
      </div>
    </div>
  `).join('');
}

/* view details alert/modal (simple) */
function viewOrderDetails(orderId){
  const all = JSON.parse(localStorage.getItem('orders')||'[]');
  const o = all.find(x=>x.id===orderId);
  if(!o) return alert('Order not found');
  const lines = [
    `Order: ${o.id}`,
    `Date: ${o.date}`,
    `Total: ${formatCurrency(o.total)}`,
    `Shipping: ${o.shipping.name}, ${o.shipping.address}, ${o.shipping.city} - ${o.shipping.zipcode}`,
    'Items:'
  ];
  o.items.forEach(it => lines.push(` - ${it.name} (${formatCurrency(it.price)})`));
  alert(lines.join('\n'));
}

/* ---------- WISHLIST ---------- */
function addToWishlist(id){
  const p = findProductById(id);
  if(!p) return alert('Product not found');
  const list = JSON.parse(localStorage.getItem('wishlist')||'[]');
  if(list.find(x=>x.id===p.id)) return alert('Already in wishlist');
  list.push({id:p.id,name:p.name,price:p.price,img:p.img});
  localStorage.setItem('wishlist', JSON.stringify(list));
  alert('Added to wishlist');
}
function renderWishlist(){
  const container = document.getElementById('wishlistItems');
  if(!container) return;
  const list = JSON.parse(localStorage.getItem('wishlist')||'[]');
  if(list.length===0) { container.innerHTML='<p>Your wishlist is empty.</p>'; return; }
  container.innerHTML = list.map((it,idx)=>`
    <div class="wishlist-item">
      <div style="display:flex;gap:10px;align-items:center">
        <img src="${it.img}" style="width:70px;height:60px;object-fit:cover;border-radius:6px">
        <div>
          <p style="margin:0"><strong>${it.name}</strong></p>
          <p style="margin:0;color:#555">${formatCurrency(it.price)}</p>
        </div>
      </div>
      <div>
        <button onclick="addToCartById(${it.id})">Add to Cart</button>
        <button onclick="removeFromWishlist(${idx})" style="background:#ff4d4d;color:#fff;border:none;padding:6px 8px;border-radius:6px">Remove</button>
      </div>
    </div>
  `).join('');
}
function removeFromWishlist(index){
  const list = JSON.parse(localStorage.getItem('wishlist')||'[]');
  list.splice(index,1);
  localStorage.setItem('wishlist', JSON.stringify(list));
  renderWishlist();
}

/* ---------- AUTH (signup/login/logout) ---------- */
function initAuthForms(){
  // signup
  const signup = document.getElementById('signupForm');
  if(signup){
    signup.addEventListener('submit', e=>{
      e.preventDefault();
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const password = document.getElementById('signupPassword').value;
      const users = JSON.parse(localStorage.getItem('users')||'[]');
      if(users.find(u=>u.email===email)) return alert('User exists. Login instead.');
      users.push({name,email,password});
      localStorage.setItem('users', JSON.stringify(users));
      alert('Account created. Please login.');
      window.location.href='login.html';
    });
  }

  // login
  const login = document.getElementById('loginForm');
  if(login){
    login.addEventListener('submit', e=>{
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      const users = JSON.parse(localStorage.getItem('users')||'[]');
      const u = users.find(x=>x.email===email && x.password===password);
      if(!u) return alert('Invalid credentials');
      localStorage.setItem('loggedInUser', JSON.stringify(u));
      alert('Login successful');
      window.location.href='index.html';
    });
  }
}

function logout(){
  localStorage.removeItem('loggedInUser');
  alert('Logged out');
  window.location.href='index.html';
}

/* ---------- PAGE INIT ---------- */
function pageInit(){
  updateCartCount();
  // run page specific renderers
  if(document.getElementById('featuredProducts')) { showFeaturedOnHome(); initSlider(); }
  if(document.getElementById('productList')) renderProductList();
  if(document.getElementById('productDetail')) renderProductDetail();
  if(document.getElementById('cartItems')) renderCartPage();
  if(document.getElementById('checkoutForm')) handleCheckoutForm();
  if(document.getElementById('ordersList')) renderOrdersPage();
  if(document.getElementById('wishlistItems')) renderWishlist();
  initAuthForms();
}

/* ---------- helper for product search redirect ---------- */
function filterProducts(){ renderProductList(); updateCartCount(); }

/* ---------- live search on products page ---------- */
function filterProductsByInput(){
  renderProductList();
}

/* ---------- search handlers ---------- */
function liveSearch() {
  const el = document.getElementById('searchBox');
  if(!el) return;
  const q = el.value.toLowerCase();
  const results = ALL_PRODUCTS.filter(p=>p.name.toLowerCase().includes(q));
  const container = document.getElementById('featuredProducts');
  if(!container) return;
  container.innerHTML = results.slice(0,12).map(p=>`
    <div class="product">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${formatCurrency(p.price)}</p>
      <button onclick="addToCartById(${p.id})">Add to Cart</button>
    </div>
  `).join('');
}
function liveSearchHome(){ liveSearch(); }
function searchProductsHome(){ const q=document.getElementById('searchBox').value; if(q) window.location.href='products.html?search='+encodeURIComponent(q); }

/* ---------- ready ---------- */
document.addEventListener('DOMContentLoaded', pageInit);
