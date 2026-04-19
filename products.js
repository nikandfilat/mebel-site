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

const PRODUCT_PHOTOS = {
  1: "https://cdn2.divan.ru/img/v1/_oVejLxiGe3QfvKehOKdAs6K8JC2oyU0QC0GIeVxEfc/pd:0:0:0:0/rs:fill:1268:840:1:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQxNzUwMDcuanBn.jpg",
  2: "https://avatars.mds.yandex.net/get-mpic/15250760/2a00000198341a5c6a40809f268d01a88588/orig",
  3: "https://lifemebel.ru/photo/stoly/dlya_kuhni/derevyannye/derevyannyy_stol_miramar_mdi_dt_mrm_14_shpon_orekha_f_chernyy_matovyy_lak_240kh109kh75/derevyannyy_stol_miramar_mdi_dt_mrm_14_shpon_orekha_f_chernyy_matovyy_lak_240kh109kh75_997_660_1_0_5253168.jpg",
  4: "https://meb-legko.ru/upload/iblock/07d/xqrnaeaazvi4u0ghs3ps3s9x9wn2kxnu.jpg",
  5: "https://hoff.ru/upload/iblock/6be/58lt1akwlx5l6q1jclc06rfn2c5lxzgj.jpg",
  6: "https://parlahost.ru/wp-content/uploads/2025/08/00113-2905817075.jpg",
  7: "https://avatars.mds.yandex.net/get-mpic/5032583/img_id7278130300952158131.jpeg/orig",
  8: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
  9: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=900&q=85",
  10: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=85",
  11: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=85",
  12: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85",
  13: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=85",
  14: "https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?auto=format&fit=crop&w=900&q=85",
  15: "https://images.unsplash.com/photo-1721614663945-05af24728c6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

const PRODUCTS = [
  {
    id: 1,
    name: "Диван «Орфей»",
    category: "Диваны",
    price: 68900,
    material: "Велюр, массив дуба",
    dimensions: "240×95×85 см",
    color: "Хаки",
    description: "Роскошный трёхместный диван с мягкими подушками и прочным каркасом из массива дуба. Обивка из высококачественного велюра приятна на ощупь и устойчива к истиранию. Идеально подходит для просторных гостиных.",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    badge: "Хит",
    image: PRODUCT_PHOTOS[1]
  },
  {
    id: 2,
    name: "Кресло «Амарант»",
    category: "Кресла",
    price: 32400,
    material: "Натуральная кожа, обивка, металл",
    dimensions: "85×80×90 см",
    color: "Шампанский",
    description: "Элегантное кресло с обивкой из натуральной кожи. Металлические ножки с золотым покрытием придают интерьеру изысканность. Эргономичная спинка обеспечивает комфорт при длительном сидении.",
    rating: 4.6,
    reviews: 87,
    inStock: true,
    badge: "Новинка",
    image: PRODUCT_PHOTOS[2]
  },
  {
    id: 3,
    name: "Стол «Кедр»",
    category: "Столы",
    price: 44500,
    material: "Массив кедра",
    dimensions: "40×40×50 см",
    color: "Натуральный",
    description: "Обеденный стол из цельного кедра с минималистичным дизайном. Натуральная текстура дерева создаёт тёплую атмосферу в столовой. Покрыт экологичным маслом для защиты поверхности. Идеально для небольших помещений",
    rating: 4.9,
    reviews: 203,
    inStock: true,
    badge: "Хит",
    image: PRODUCT_PHOTOS[3]
  },
  {
    id: 4,
    name: "Стул «Ивори»",
    category: "Стулья",
    price: 12800,
    material: "Древесина бука",
    dimensions: "46×52×88 см",
    color: "Слоновая кость",
    description: "Изящный стул с мягким сиденьем и со спинкой из натурального дерева. Ножки из гнутого бука обеспечивают устойчивость и лёгкость конструкции. Продаётся комплектом от 2 штук.",
    rating: 4.4,
    reviews: 56,
    inStock: true,
    badge: null,
    image: PRODUCT_PHOTOS[4]
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
    image: PRODUCT_PHOTOS[5]
  },
  {
    id: 6,
    name: "Туалетный столик «Берёза»",
    category: "Столы",
    price: 74200,
    material: "МДФ, зеркало",
    dimensions: "120×60×220 см",
    color: "Белый / Зеркало",
    description: "Модель выполнена из прочного МДФ в современном дизайне — идеально подойдёт для хранения косметики и аксессуаров, поможет поддерживать порядок и сэкономит пространство",
    rating: 4.5,
    reviews: 91,
    inStock: true,
    badge: null,
    image: PRODUCT_PHOTOS[6]
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
    image: PRODUCT_PHOTOS[7]
  },
  {
    id: 8,
    name: "Кресло «Венеция»",
    category: "Кресла",
    price: 28900,
    material: "Микрофибра, дерево",
    dimensions: "80×78×95 см",
    color: "Желтый",
    description: "Уютное кресло с округлыми формами и насыщенным желтым цветом. Покрытие из микрофибры устойчиво к загрязнениям. Деревянные ножки с резными деталями придают изделию характер.",
    rating: 4.7,
    reviews: 74,
    inStock: false,
    badge: null,
    image: PRODUCT_PHOTOS[8]
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
    image: PRODUCT_PHOTOS[9]
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
    image: PRODUCT_PHOTOS[10]
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
    image: PRODUCT_PHOTOS[11]
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
    image: PRODUCT_PHOTOS[12]
  },
  {
    id: 13,
    name: "Диван «Романтика»",
    category: "Диваны",
    price: 79900,
    material: "Натуральная кожа, дерево",
    dimensions: "260×100×88 см",
    color: "Серый",
    description: "Диван из натуральной итальянской кожи. Механизм трансформации позволяет разложить его в полноценное спальное место. Ящик для хранения постельных принадлежностей в основании.",
    rating: 4.9,
    reviews: 186,
    inStock: true,
    badge: "Хит",
    image: PRODUCT_PHOTOS[13]
  },
  {
    id: 14,
    name: "Кресло «Кокон»",
    category: "Кресла",
    price: 42100,
    material: "Шерсть, ротанг",
    dimensions: "110×90×130 см",
    color: "Бежевый",
    description: "Подвесное кресло-кокон из натурального ротанга с мягкой шерстяной подушкой. Создаёт уютное укромное место для отдыха. Подходит для использования в помещении.",
    rating: 4.6,
    reviews: 53,
    inStock: true,
    badge: "Новинка",
    image: PRODUCT_PHOTOS[14]
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
    image: PRODUCT_PHOTOS[15]
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
