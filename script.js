const deals = [
    { name: "Smart watches", discount: "25%", image: "assets/image 35.svg" },
    { name: "Laptops", discount: "15%", image: "assets/image 34.svg" },
    { name: "GoPro cameras", discount: "40%", image: "assets/image 28.svg" },
    { name: "Headphones", discount: "25%", image: "assets/image 29.svg" },
    { name: "Canon cameras", discount: "25%", image: "assets/image 23.svg" },
  ];
  
  const homeOutdoor = [
    { name: "Soft chairs", price: 19.00, image: "assets/interior/2.svg" },
    { name: "Sofa & chair", price: 19.00, image: "assets/interior/1.svg" },
    { name: "Kitchen dishes", price: 19.00, image: "assets/interior/8.svg" },
    { name: "Smart watches", price: 19.00, image: "assets/interior/6.svg" },
    { name: "Kitchen mixer", price: 100.00, image: "assets/interior/9.svg" },
    { name: "Blenders", price: 39.00, image: "assets/interior/4.svg" },
    { name: "Home appliance", price: 19.00, image: "assets/interior/3.svg" },
    { name: "Coffee maker", price: 10.00, image: "assets/interior/7.svg" },
  ];
  
  const electronics = [
    { name: "iPhone XS", price: 19.00, image: "assets/tech/1.svg" },
    { name: "iPad pro", price: 19.00, image: "assets/tech/2.svg" },
    { name: "Smartphones", price: 19.00, image: "assets/tech/3.svg" },
    { name: "Smartphones", price: 19.00, image: "assets/tech/4.svg" },
    { name: "Headphones", price: 100.00, image: "assets/tech/5.svg" },
    { name: "Cameras", price: 39.00, image: "assets/tech/6.svg" },
    { name: "Laptops & PC", price: 19.00, image: "assets/tech/7.svg" },
    { name: "Smart watches", price: 10.00, image: "assets/tech/8.svg" },
  ];
  
  const recommended = [
    { price: 10.30, desc: "Jeans shorts for men blue color", image: "assets/cloth/1.svg" },
    { price: 10.30, desc: "Jeans shorts for men blue color", image: "assets/cloth/2.svg" },
    { price: 12.50, desc: "Jeans shorts for men blue color", image: "assets/cloth/3.svg" },
    { price: 34.00, desc: "Jeans shorts for men blue color", image: "assets/cloth/2.svg" },
    { price: 99.00, desc: "Jeans shorts for men blue color", image: "assets/cloth/5.svg" },
    { price: 9.99, desc: "Jeans shorts for men blue color", image: "assets/cloth/4.svg" },
    { price: 8.99, desc: "Jeans shorts for men blue color", image: "assets/cloth/6.svg" },
    { price: 10.30, desc: "Jeans shorts for men blue color", image: "assets/cloth/4.svg" },
    { price: 10.30, desc: "Jeans shorts for men blue color", image: "assets/cloth/7.svg" },
    { price: 80.95, desc: "Jeans shorts for men blue color", image: "assets/cloth/1.svg" },
  ];
  
  function renderDeals() {
    const container = document.getElementById("deals-grid");
    if (!container) return;
    container.innerHTML = "";
    deals.forEach(deal => {
      container.innerHTML += `
        <div class="deal-card">
          <img src="${deal.image}" alt="${deal.name}">
          <h3>${deal.name}</h3>
          <div class="discount">-${deal.discount}</div>
        </div>
      `;
    });
  }
  
  function renderHomeOutdoor() {
    const container = document.getElementById("home-outdoor-grid");
    if (!container) return;
    container.innerHTML = "";
    homeOutdoor.forEach(product => {
      container.innerHTML += `
        <article class="product-card">
          <div class="product-card__content">
            <div class="product-card__info">
              <h3 class="product-card__title">${product.name}</h3>
              <p class="product-card__price">From <br>USD ${product.price.toFixed(2)}</p>
            </div>
            <img src="${product.image}" alt="${product.name}" class="product-card__image" />
          </div>
        </article>
      `;
    });
  }
  
  function renderElectronics() {
    const container = document.getElementById("electronics-grid");
    if (!container) return;
    container.innerHTML = "";
    electronics.forEach(product => {
      container.innerHTML += `
        <article class="product-card">
          <div class="product-card__content">
            <div class="product-card__info">
              <h3 class="product-card__title">${product.name}</h3>
              <p class="product-card__price">From <br>USD ${product.price.toFixed(2)}</p>
            </div>
            <img src="${product.image}" alt="${product.name}" class="product-card__image" />
          </div>
        </article>
      `;
    });
  }
  
  function renderRecommended() {
    const container = document.getElementById("recommended-grid");
    if (!container) return;
    container.innerHTML = "";
    recommended.forEach(item => {
      container.innerHTML += `
        <article class="product-container">
          <div class="product-image-wrapper">
            <img src="${item.image}" alt="${item.desc}" class="product-image">
          </div>
          <p class="product-price">$${item.price.toFixed(2)}</p>
          <h3 class="product-name">${item.desc}</h3>
        </article>
      `;
    });
  }
  
  function startCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 4);
    endDate.setHours(endDate.getHours() + 5);
    endDate.setMinutes(endDate.getMinutes() + 12);
    endDate.setSeconds(endDate.getSeconds() + 59);
  
    const countdown = setInterval(() => {
      const now = new Date();
      const distance = endDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = days.toString().padStart(2, "0");
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  
      if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown-timer").innerHTML = "Offer Expired";
      }
    }, 1000);
  }
  
  function searchProducts() {
    const query = document.getElementById("search-input").value.toLowerCase();
    console.log("Search query:", query);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderDeals();
    renderHomeOutdoor();
    renderElectronics();
    renderRecommended();
    startCountdown();
  });