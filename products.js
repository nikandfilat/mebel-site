// ==========================================
//   ДАННЫЕ ТОВАРОВ — Магазин Мебели
// ==========================================

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
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&q=80"
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
