// ==========================================
//   ОБЩИЙ JAVASCRIPT — Магазин Мебели
// ==========================================

// ---- ТЕМА (Светлая / Тёмная) ----
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
  updateThemeButtons();
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const current = localStorage.getItem('theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
  updateThemeButtons();
}

function updateThemeButtons() {
  const theme = localStorage.getItem('theme') || 'light';
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.textContent = theme === 'dark' ? '☀' : '☾';
    btn.title = theme === 'dark' ? 'Светлая тема' : 'Тёмная тема';
  });
}

// ---- КОРЗИНА ----
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.classList.toggle('visible', total > 0);
  });
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty, name: product.name, price: product.price, category: product.category, image: product.image });
  }

  saveCart(cart);
  showToast('Товар добавлен в корзину!', 'success');
}

function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

function updateQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
}

// ---- УВЕДОМЛЕНИЯ ----
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ---- МОБИЛЬНОЕ МЕНЮ ----
function initBurger() {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Закрытие при клике на ссылку
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// ---- АКТИВНЫЙ ПУНКТ МЕНЮ ----
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === path);
  });
}

// ---- ПРОКРУТКА ШАПКИ ----
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 30
      ? '0 4px 20px rgba(0,0,0,0.08)'
      : 'none';
  });
}

// ---- АНИМАЦИЯ ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.product-card, .feature-card, .category-card, .team-card, .delivery-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ---- ГЕНЕРАЦИЯ КАРТОЧКИ ТОВАРА ----
function createProductCard(product) {
  const badgeHtml = product.badge
    ? `<div class="product-badge ${product.badge === 'Новинка' ? 'new' : product.badge === 'Акция' ? 'sale' : ''}">${product.badge}</div>`
    : '';

  const stockStatus = product.inStock ? '' : 'style="opacity:0.55"';

  return `
    <div class="product-card" ${stockStatus} data-id="${product.id}">
      <a class="product-image" href="product.html?id=${product.id}" aria-label="Открыть ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${badgeHtml}
      </a>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <a href="product.html?id=${product.id}" class="product-name">${product.name}</a>
        <div class="product-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-footer">
          <span class="product-price">${formatPrice(product.price)}</span>
          ${product.inStock
            ? `<button class="add-to-cart" onclick="handleAddToCart(${product.id}, this)">В корзину</button>`
            : `<span style="font-size:0.82rem;color:var(--text-muted)">Нет в наличии</span>`
          }
        </div>
      </div>
    </div>
  `;
}

function handleAddToCart(id, btn) {
  addToCart(id);
  btn.classList.add('added');
  btn.textContent = 'Добавлено!';
  setTimeout(() => {
    btn.classList.remove('added');
    btn.textContent = 'В корзину';
  }, 1800);
}

// ---- ИНИЦИАЛИЗАЦИЯ ОБЩЕГО ----
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateCartCount();
  initBurger();
  setActiveNav();
  initHeaderScroll();

  // Кнопка переключения темы
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // Запуск анимаций после небольшой задержки
  setTimeout(initScrollAnimations, 100);
});
