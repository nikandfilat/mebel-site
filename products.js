// ==========================================
//   ДАННЫЕ ТОВАРОВ — Магазин Мебели
//   Изображения встроены в код (SVG data URI)
//   Работают без интернета
// ==========================================

// Генератор SVG-изображения для товара
function makeSvgImage(name, category, color1, color2, icon) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="100%" stop-color="${color2}"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#g)" rx="0"/>
    <rect x="30" y="30" width="540" height="340" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" rx="4"/>
    <text x="300" y="165" text-anchor="middle" font-family="Georgia,serif" font-size="56" fill="rgba(255,255,255,0.85)">${icon}</text>
    <text x="300" y="225" text-anchor="middle" font-family="Georgia,serif" font-size="24" fill="rgba(255,255,255,0.92)" font-weight="bold">${name}</text>
    <text x="300" y="260" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" fill="rgba(255,255,255,0.55)" letter-spacing="3">${category.toUpperCase()}</text>
  </svg>`;
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}

// Цветовые схемы по категориям
const COLORS = {
  'Диваны':  ['#a0724e', '#6b4528'],
  'Кресла':  ['#b07858', '#7a4e30'],
  'Столы':   ['#8a6840', '#5c4420'],
  'Стулья':  ['#9a8060', '#6a5038'],
  'Кровати': ['#6878a0', '#445070'],
  'Шкафы':   ['#6a5848', '#40302a'],
};

// Иконки по категориям
const ICONS = {
  'Диваны':  '🛋',
  'Кресла':  '🪑',
  'Столы':   '🪵',
  'Стулья':  '🪑',
  'Кровати': '🛏',
  'Шкафы':   '🗄',
};

const PRODUCTS = [
  {
    id: 1,
    name: "Диван «Орфей»",
    category: "Диваны",
    price: 68900,
    material: "Велюр, массив дуба",
    dimensions: "240×95×85 см",
    color: "Серо-бежевый",
    description: "Роскошный трёхместный диван с мягкими подушками и прочным каркасом из массива дуба. Обивка из высококачественного велюра приятна на ощупь и устойчива к истиранию. Идеально подходит для просторных гостиных.",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    badge: "Хит",
    get image() { return makeSvgImage(this.name, this.category, ...COLORS['Диваны'], ICONS['Диваны']); }
  },
  {
    id: 2,
    name: "Кресло «Амарант»",
    category: "Кресла",
    price: 32400,
    material: "Натуральная кожа, металл",
    dimensions: "85×80×90 см",
    color: "Коньяк",
    description: "Элегантное кресло с обивкой из натуральной кожи. Металлические ножки с золотым покрытием придают интерьеру изысканность. Эргономичная спинка обеспечивает комфорт при длительном сидении.",
    rating: 4.6,
    reviews: 87,
    inStock: true,
    badge: "Новинка",
    get image() { return makeSvgImage(this.name, this.category, ...COLORS['Кресла'], ICONS['Кресла']); }
  },
  {
    id: 3,
    name: "Стол «Кедр»",
    category: "Столы",
    price: 44500,
    material: "Массив кедра",
    dimensions: "180×90×76 см",
    color: "Натуральный",
    description: "Обеденный стол из цельного кедра с минималистичным дизайном. Натуральная текстура дерева создаёт тёплую атмосферу в столовой. Покрыт экологичным маслом для защиты поверхности.",
    rating: 4.9,
    reviews: 203,
    inStock: true,
    badge: "Хит",
    get image() { return makeSvgImage(this.name, this.category, ...COLORS['Столы'], ICONS['Столы']); }
  },
  {
    id: 4,
    name: "Стул «Ивори»",
    category: "Стулья",
    price: 12800,
    material: "Ткань, дерево бук",
    dimensions: "46×52×88 см",
    color: "Слоновая кость",
    description: "Изящный стул со мягким сиденьем и спинкой из натуральной ткани. Ножки из гнутого бука обеспечивают устойчивость и лёгкость конструкции. Продаётся комплектом от 2 штук.",
    rating: 4.4,
    reviews: 56,
    inStock: true,
    badge: null,
    get image() { return makeSvgImage(this.name, this.category, ...COLORS['Стулья'], ICONS['Стулья']); }
  },
  {
    id: 5,
    name: "Кровать «Мираж»",
    category: "Кровати",
    price: 89900,
    material: "Массив ясеня, ткань",
    dimensions: "160×200 см",
    color: "Светло-серый",
    description: "Кровать-платформа с мягким изголовьем, обитым премиальной тканью. Каркас из массива ясеня рассчитан на нагрузку до 500 кг. Основание с ортопедическими ламелями для здорового сна.",
    rating: 4.7,
    reviews: 168,
    inStock: true,
    badge: "Акция",
    get image() { return makeSvgImage(this.name, this.category, ...COLORS['Кровати'], ICONS['Кровати']); }
  },
  {
    id: 6,
    name: "Шкаф «Триумф»",
    category: "Шкафы",
    price: 74200,
    material: "МДФ, зеркало",
    dimensions: "180×60×220 см",
    color: "Белый / Зеркало",
    description: "Просторный трёхдверный шкаф-купе с зеркальными фасадами, визуально увеличивающими пространство. Внутренняя отделка включает штангу, полки и ящики. Система плавного закрывания дверей.",
    rating: 4.5,
    reviews: 91,
    inStock: true,
    badge: null,
    get image() { return makeSvgImage(this.name, this.category, ...COLORS['Шкафы'], ICONS['Шкафы']); }
  },
  {
    id: 7,
    name: "Диван «Лофт»",
    category: "Диваны",
    price: 54600,
    material: "Рогожка, металл",
    dimensions: "210×88×80 см",
    color: "Антрацит",
    description: "Диван в стиле лофт с металлическими ножками и обивкой из прочной рогожки. Лаконичный дизайн вписывается в современные интерьеры. Съёмные чехлы легко стираются в стиральной машине.",
    rating: 4.6,
    reviews: 112,
    inStock: true,
    badge: null,
    get image() { return makeSvgImage(this.name, this.category, '#6a5040', '#3e2c1c', ICONS['Диваны']); }
  },
  {
    id: 8,
    name: "Кресло «Венеция»",
    category: "Кресла",
    price: 28900,
    material: "Микрофибра, дерево",
    dimensions: "80×78×95 см",
    color: "Терракота",
    description: "Уютное кресло с округлыми формами и насыщенным цветом терракоты. Покрытие из микрофибры устойчиво к загрязнениям. Деревянные ножки с резными деталями придают изделию характер.",
    rating: 4.7,
    reviews: 74,
    inStock: false,
    badge: null,
    get image() { return makeSvgImage(this.name, this.category, '#c06848', '#8a4030', ICONS['Кресла']); }
  },
  {
    id: 9,
    name: "Журнальный стол «Агат»",
    category: "Столы",
    price: 18700,
    material: "Стекло, металл",
    dimensions: "110×60×45 см",
    color: "Прозрачный / Золото",
    description: "Элегантный журнальный столик с закалённым стеклом толщиной 10 мм. Металлическое основание с золотым напылением придаёт изделию премиальный вид. Лёгкий в уходе и долговечный.",
    rating: 4.3,
    reviews: 45,
    inStock: true,
    badge: "Новинка",
    get image() { return makeSvgImage(this.name, this.category, '#9c7c40', '#6a5020', ICONS['Столы']); }
  },
  {
    id: 10,
    name: "Стул «Скандинавия»",
    category: "Стулья",
    price: 9800,
    material: "Пластик, дерево бук",
    dimensions: "44×50×84 см",
    color: "Белый / Натуральный",
    description: "Классический скандинавский стул с цельным пластиковым сиденьем и деревянными ножками. Прочная конструкция выдерживает до 150 кг. Стекируется для экономии пространства.",
    rating: 4.5,
    reviews: 239,
    inStock: true,
    badge: null,
    get image() { return makeSvgImage(this.name, this.category, '#b09878', '#7a6848', ICONS['Стулья']); }
  },
  {
    id: 11,
    name: "Кровать «Онейро»",
    category: "Кровати",
    price: 62400,
    material: "Массив дуба",
    dimensions: "140×200 см",
    color: "Дуб натуральный",
    description: "Кровать из цельного массива дуба с высоким изголовьем. Каждый элемент обработан вручную. Натуральное дерево безопасно для здоровья и не содержит вредных лаков.",
    rating: 4.8,
    reviews: 98,
    inStock: true,
    badge: null,
    get image() { return makeSvgImage(this.name, this.category, '#506080', '#304058', ICONS['Кровати']); }
  },
  {
    id: 12,
    name: "Шкаф «Модерн»",
    category: "Шкафы",
    price: 38500,
    material: "ЛДСП, металл",
    dimensions: "120×45×200 см",
    color: "Чёрный / Дуб",
    description: "Двухдверный шкаф в стиле модерн с матовыми фасадами и металлической фурнитурой. Вместительное внутреннее пространство с двумя отделениями: со штангой и с полками.",
    rating: 4.4,
    reviews: 61,
    inStock: true,
    badge: null,
    get image() { return makeSvgImage(this.name, this.category, '#503c30', '#2c2018', ICONS['Шкафы']); }
  },
  {
    id: 13,
    name: "Диван «Романтика»",
    category: "Диваны",
    price: 79900,
    material: "Натуральная кожа, дерево",
    dimensions: "260×100×88 см",
    color: "Тёмно-коричневый",
    description: "Угловой диван из натуральной итальянской кожи. Механизм трансформации позволяет разложить его в полноценное спальное место. Ящик для хранения постельных принадлежностей в основании.",
    rating: 4.9,
    reviews: 186,
    inStock: true,
    badge: "Хит",
    get image() { return makeSvgImage(this.name, this.category, '#8c5e3c', '#5a3a20', ICONS['Диваны']); }
  },
  {
    id: 14,
    name: "Кресло «Кокон»",
    category: "Кресла",
    price: 42100,
    material: "Шерсть, ротанг",
    dimensions: "110×90×130 см",
    color: "Молочный",
    description: "Подвесное кресло-кокон из натурального ротанга с мягкой шерстяной подушкой. Создаёт уютное укромное место для отдыха. Подходит для использования в помещении.",
    rating: 4.6,
    reviews: 53,
    inStock: true,
    badge: "Новинка",
    get image() { return makeSvgImage(this.name, this.category, '#c09868', '#8a6838', ICONS['Кресла']); }
  },
  {
    id: 15,
    name: "Стол «Лаура»",
    category: "Столы",
    price: 36200,
    material: "Мрамор, металл",
    dimensions: "140×80×76 см",
    color: "Белый мрамор / Золото",
    description: "Обеденный стол с натуральным мраморным столешницей и металлическим основанием. Каждый стол уникален благодаря природному рисунку мрамора. Лёгкий в уходе, устойчив к влаге и теплу.",
    rating: 4.7,
    reviews: 77,
    inStock: false,
    badge: null,
    get image() { return makeSvgImage(this.name, this.category, '#a89060', '#706040', ICONS['Столы']); }
  }
];

// Категории
const CATEGORIES = ["Все", "Диваны", "Кресла", "Столы", "Стулья", "Кровати", "Шкафы"];

// Подсчёт товаров по категориям
function getCategoryCounts() {
  const counts = { "Все": PRODUCTS.length };
  CATEGORIES.slice(1).forEach(cat => {
    counts[cat] = PRODUCTS.filter(p => p.category === cat).length;
  });
  return counts;
}

// Форматирование цены
function formatPrice(price) {
  return price.toLocaleString('ru-RU') + ' ₽';
}

// Генерация звёзд рейтинга
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}
