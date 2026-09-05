// ==================== СЛОВАРЬ ПЕРЕВОДОВ (i18n) ====================
const translations = {
  ru: {
    newUser: "Юный Инвестор",
    status1: "Новичок в финансах 🌱",
    status2: "Продвинутый 📈",
    status3: "Финансовый Гуру 🧠",
    balanceLabel: "Ваш баланс:",
    tasksTitle: "🎯 Практические задания",
    tasksDesc: "Выполняйте квесты и зарабатывайте виртуальные деньги!",
    task1Title: "📊 Аудит карманных расходов",
    task1Desc: "Запишите свои траты за последние 3 дня и распределите их по 3 категориям: «Нужно», «Хочу» и «Инвестиции».",
    task2Title: "🛒 Инспекция супермаркета",
    task2Desc: "Сравните два товара, рассчитайте стоимость за 1 л/кг и выберите выгодный вариант.",
    attemptsText: "Попыток: ",
    task3Title: "🎧 Охота за подписками",
    task3Desc: "Посчитайте траты на популярные сервисы и найдите способ сэкономить на семейном тарифе.",
    btnDoTask: "Выполнить задание",
    btnCompleted: "Выполнено ✓",
    btnRead: "Читать статью",
    btnReadDone: "Прочитано ✓",
    knowledgeTitle: "📚 База знаний & Цели",
    knowledgeDesc: "Читайте достоверные статьи и копите на мечту.",
    wishTitle: "🎯 Моя главная цель (Вишлист)",
    wishDesc: "Впишите желаемый предмет. Система сама оценит его реальную стоимость (от 10 000 ₸ и выше):",
    wishPlaceholder: "Название (напр. Наушники, Кроссовки)",
    wishBtn: "Загадать мечту 🚀",
    wishReset: "Сбросить цель 🔄",
    wishDone: "Цель полностью достигнута! 🎉",
    wishLeft: "Осталось: ",
    wishSaved: "Уже отложено: ",
    depositBtn: "Отложить",
    depositPlaceholder: "Сумма для пополнения (₸)",
    errorNoMoney: "У вас недостаточно средств на балансе!",
    errorInvalidAmount: "Введите корректную сумму для откладывания!"
  },
  kk: {
    newUser: "Жас Инвестор",
    status1: "Қаржыдағы бастаушы 🌱",
    status2: "Тәжірибелі 📈",
    status3: "Қаржы Гуруы 🧠",
    balanceLabel: "Сіздің балансыңыз:",
    tasksTitle: "🎯 Практикалық тапсырмалар",
    tasksDesc: "Квесттерді орындап, виртуалды ақша табыңыз!",
    task1Title: "📊 Қалта шығындарының аудиті",
    task1Desc: "Соңғы 3 күндегі шығындарыңызды жазып, 3 санатқа бөліңіз: «Қажет», «Қалаймын» және «Инвестиция».",
    task2Title: "🛒 Супермаркет инспекциясы",
    task2Desc: "Екі тауарды салыстырып, 1 л/кг құнын есептеңіз де, тиімдісін таңдаңыз.",
    attemptsText: "Мүмкіндіктер: ",
    task3Title: "🎧 Жазылымдарға аңшылық",
    task3Desc: "Сервистерге кететін шығынды есептеп, отбасылық тариф арқылы үнемдеу жолын табыңыз.",
    btnDoTask: "Тапсырманы орындау",
    btnCompleted: "Орындалды ✓",
    btnRead: "Мақаланы оқу",
    btnReadDone: "Оқылды ✓",
    knowledgeTitle: "📚 Білім базасы & Мақсаттар",
    knowledgeDesc: "Пайдалы мақалаларды оқып, арманыңызға ақша жинаңыз.",
    wishTitle: "🎯 Мекемедегі мақсатым (Wishlist)",
    wishDesc: "Қалаған заттың атын жазыңыз. Жүйе оның бағасын есептейді (10 000 ₸ бастап):",
    wishPlaceholder: "Атауы (мыс. Құлаққап, Кроссовки)",
    wishBtn: "Армандау 🚀",
    wishReset: "Мақсатты нөлдеу 🔄",
    wishDone: "Мақсатқа толық жеттіңіз! 🎉",
    wishLeft: "Қалды: ",
    wishSaved: "Қазірдің өзінде жиналды: ",
    depositBtn: "Салу",
    depositPlaceholder: "Толықтыру сомасы (₸)",
    errorNoMoney: "Балансыңызда қаражат жеткіліксіз!",
    errorInvalidAmount: "Дұрыс соманы енгізіңіз!"
  },
  en: {
    newUser: "Young Investor",
    status1: "Finance Beginner 🌱",
    status2: "Advanced 📈",
    status3: "Finance Guru 🧠",
    balanceLabel: "Your balance:",
    tasksTitle: "🎯 Practical Quests",
    tasksDesc: "Complete quests and earn virtual money!",
    task1Title: "📊 Pocket Expenses Audit",
    task1Desc: "Track your expenses for the last 3 days into 3 categories: Needs, Wants, and Investments.",
    task2Title: "🛒 Supermarket Inspection",
    task2Desc: "Compare two items, calculate the unit price per 1L/kg, and pick the best deal.",
    attemptsText: "Attempts left: ",
    task3Title: "🎧 Subscription Hunt",
    task3Desc: "Calculate expenses for digital services and save with a family plan.",
    btnDoTask: "Start Quest",
    btnCompleted: "Completed ✓",
    btnRead: "Read Article",
    btnReadDone: "Read ✓",
    knowledgeTitle: "📚 Knowledge Base & Goals",
    knowledgeDesc: "Read trusted articles and save up for your dream.",
    wishTitle: "🎯 My Main Goal (Wishlist)",
    wishDesc: "Type your desired item. The system will calculate its estimated price (from 10,000 ₸+):",
    wishPlaceholder: "Name (e.g. Headphones, Sneakers)",
    wishBtn: "Set Goal 🚀",
    wishReset: "Reset Goal 🔄",
    wishDone: "Goal fully achieved! 🎉",
    wishLeft: "Remains: ",
    wishSaved: "Already saved: ",
    depositBtn: "Deposit",
    depositPlaceholder: "Deposit amount (₸)",
    errorNoMoney: "You don't have enough balance!",
    errorInvalidAmount: "Please enter a valid amount!"
  }
};

// ==================== СОСТОЯНИЕ И LOCALSTORAGE ====================
let userProfile = JSON.parse(localStorage.getItem("fin_user_profile")) || null;
let balance = parseInt(localStorage.getItem("fin_balance")) || 0;
let completedTasks = JSON.parse(localStorage.getItem("fin_completed_tasks")) || [];
let readArticles = JSON.parse(localStorage.getItem("fin_read_articles")) || [];

// Теперь wishlist хранит название, сгенерированную цену и уже отложенную сумму (saved)
let wishlist = JSON.parse(localStorage.getItem("fin_wishlist")) || null;

let marketCategories = [
  {
    category: "Молоко",
    prod1: { name: "Молоко «Фермерское»", price: 600, volume: 1000, unit: "л" },
    prod2: { name: "Молоко «Ультра»", price: 540, volume: 800, unit: "л" },
    correctIndex: 0
  }
];

let subscriptionTasks = [
  {
    condition: "Музыкальный сервис стоит 1 500 ₸/мес на одного человека. Семейный тариф на 4 человек стоит 2 800 ₸/мес.",
    question: "Сколько сэкономит КАЖДЫЙ из 4 друзей в месяц, если они перейдут на семейную подписку?",
    options: ["A) 500 ₸", "B) 800 ₸", "C) 1 300 ₸"],
    correct: 1
  }
];

let selectedProductIndex = null;
let currentMarketPair = null;

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener("DOMContentLoaded", () => {
  if (!userProfile) {
    openModal("modal-welcome");
  } else {
    const langSelect = document.getElementById("lang-selector");
    if (langSelect) langSelect.value = userProfile.lang || "ru";
    updateUI();
  }
});

// Отправка формы регистрации
function submitRegistration(e) {
  e.preventDefault();
  const name = document.getElementById("reg-name").value.trim();
  const age = parseInt(document.getElementById("reg-age").value);
  const lang = document.getElementById("reg-lang").value;

  if (!name || !age) return;

  userProfile = { name, age, lang };
  localStorage.setItem("fin_user_profile", JSON.stringify(userProfile));

  const langSelect = document.getElementById("lang-selector");
  if (langSelect) langSelect.value = lang;

  closeModal("modal-welcome");
  updateUI();
}

// Переключение языка вручную
function changeLanguage(lang) {
  if (!userProfile) {
    userProfile = { name: "Пользователь", age: 15, lang: lang };
  } else {
    userProfile.lang = lang;
  }

  localStorage.setItem("fin_user_profile", JSON.stringify(userProfile));
  updateUI();
}

// ==================== ОБНОВЛЕНИЕ ИНТЕРФЕЙСА ====================
function updateUI() {
  const lang = userProfile ? userProfile.lang : "ru";
  const t = translations[lang] || translations.ru;

  // Имя и статус
  if (userProfile && userProfile.name) {
    document.getElementById("user-name").textContent = userProfile.name;
  } else {
    document.getElementById("user-name").textContent = t.newUser;
  }

  const statusEl = document.getElementById("user-status");
  if (balance >= 1500) statusEl.textContent = t.status3;
  else if (balance >= 700) statusEl.textContent = t.status2;
  else statusEl.textContent = t.status1;

  // Баланс
  document.getElementById("balance-amount").textContent = `${balance} ₸`;

  // Перевод текста статических элементов
  document.querySelector(".balance-label").textContent = t.balanceLabel;
  document.querySelector(".tasks-column h2").textContent = t.tasksTitle;
  document.querySelector(".tasks-column .section-desc").textContent = t.tasksDesc;
  document.querySelector(".info-column h2").textContent = t.knowledgeTitle;
  document.querySelector(".info-column .section-desc").textContent = t.knowledgeDesc;

  document.querySelector("#card-task-1 .card-title").textContent = t.task1Title;
  document.querySelector("#card-task-1 .card-desc").textContent = t.task1Desc;

  document.querySelector("#card-task-2 .card-title").textContent = t.task2Title;
  document.querySelector("#card-task-2 .card-desc").childNodes[0].nodeValue = t.task2Desc + ` (${t.attemptsText}`;

  document.querySelector("#card-task-3 .card-title").textContent = t.task3Title;
  document.querySelector("#card-task-3 .card-desc").textContent = t.task3Desc;

  document.querySelector("#wishlist-block h3").textContent = t.wishTitle;
  document.querySelector("#wishlist-block p").textContent = t.wishDesc;
  document.getElementById("wish-title-input").placeholder = t.wishPlaceholder;
  document.querySelector("#wishlist-form button").textContent = t.wishBtn;

  // Кнопка и инпут пополнения копилки в HTML (если присутствуют)
  const depositInput = document.getElementById("wish-deposit-input");
  if (depositInput) depositInput.placeholder = t.depositPlaceholder;

  // Состояние кнопок заданий
  for (let i = 1; i <= 3; i++) {
    const btn = document.getElementById(`btn-task-${i}`);
    const card = document.getElementById(`card-task-${i}`);
    if (btn && card) {
      if (completedTasks.includes(i)) {
        btn.disabled = true;
        btn.textContent = t.btnCompleted;
        card.classList.add("completed");
      } else {
        btn.disabled = false;
        btn.textContent = t.btnDoTask;
      }
    }
  }

  // Состояние кнопок статей
  for (let i = 1; i <= 2; i++) {
    const btn = document.getElementById(`btn-info-${i}`);
    if (btn) {
      if (readArticles.includes(i)) {
        btn.disabled = true;
        btn.textContent = t.btnReadDone;
      } else {
        btn.disabled = false;
        btn.textContent = `${t.btnRead} (+${i === 1 ? 300 : 400} ₸)`;
      }
    }
  }

  updateWishlistUI();
}

function saveState() {
  localStorage.setItem("fin_balance", balance);
  localStorage.setItem("fin_completed_tasks", JSON.stringify(completedTasks));
  localStorage.setItem("fin_read_articles", JSON.stringify(readArticles));
  localStorage.setItem("fin_wishlist", JSON.stringify(wishlist));
}

// ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================
function openModal(id) { document.getElementById(id).classList.add("active"); }
function closeModal(id) { document.getElementById(id).classList.remove("active"); }
function closeOnOverlay(e, id) { if (e.target.classList.contains("modal-overlay")) closeModal(id); }

// ==================== НОВАЯ ЛОГИКА ВИШЛИСТА ====================

// Генерация случайной цены от 10 000 ₸ и выше (с учетом умных ключевых слов или случайного разброса)
function calculateSmartPrice(title) {
  const lower = title.toLowerCase();
  let basePrice = 15000;

  if (lower.includes("телефон") || lower.includes("айфон") || lower.includes("смартфон") || lower.includes("ноутбук") || lower.includes("macbook")) {
    basePrice = 45000;
  } else if (lower.includes("наушники") || lower.includes("кроссовки") || lower.includes("колонка") || lower.includes("планшет")) {
    basePrice = 20000;
  }

  // Добавляем случайную надбавку от 0 до 15 000 тенге, чтобы цена всегда была динамической (от 10000 и выше)
  const randomAddition = Math.floor(Math.random() * 30001);
  let finalPrice = basePrice + randomAddition;
  
  if (finalPrice < 10000) finalPrice = 10000;
  return finalPrice;
}

function setWishlistGoal(e) {
  e.preventDefault();
  const title = document.getElementById("wish-title-input").value.trim();
  if (!title) return;

  wishlist = {
    title: title,
    price: calculateSmartPrice(title),
    saved: 0 // Изначально отложено 0 тенге
  };

  saveState();
  updateUI();
  document.getElementById("wish-title-input").value = "";
}

function resetWishlistGoal() {
  wishlist = null;
  localStorage.removeItem("fin_wishlist");
  updateUI();
}

// Функция пополнения копилки из общего баланса игрока
function depositToWishlist() {
  if (!wishlist) return;

  const depositInput = document.getElementById("wish-deposit-input");
  const amount = parseInt(depositInput.value);
  const lang = userProfile ? userProfile.lang : "ru";
  const t = translations[lang] || translations.ru;

  if (isNaN(amount) || amount <= 0) {
    alert(t.errorInvalidAmount);
    return;
  }

  if (amount > balance) {
    alert(t.errorNoMoney);
    return;
  }

  // Списываем с общего баланса и добавляем в копилку мечты
  balance -= amount;
  wishlist.saved += amount;

  // Ограничиваем, чтобы накопленная сумма не превышала 100% стоимости (по желанию)
  if (wishlist.saved > wishlist.price) {
    wishlist.saved = wishlist.price;
  }

  depositInput.value = "";
  saveState();
  updateUI();
}

function updateWishlistUI() {
  const lang = userProfile ? userProfile.lang : "ru";
  const t = translations[lang] || translations.ru;

  const form = document.getElementById("wishlist-form");
  const progressBox = document.getElementById("wishlist-progress-box");

  if (!wishlist) {
    if (form) form.classList.remove("hidden");
    if (progressBox) progressBox.classList.add("hidden");
    return;
  }

  if (form) form.classList.add("hidden");
  if (progressBox) progressBox.classList.remove("hidden");

  // Расчет прогресса на основе СКОЛЬКО ОТЛОЖЕНО в копилку, а не общего баланса
  let percent = Math.min(100, Math.round((wishlist.saved / wishlist.price) * 100));
  let remains = Math.max(0, wishlist.price - wishlist.saved);

  document.getElementById("wish-display-title").textContent = wishlist.title;
  document.getElementById("wish-display-price").textContent = `${wishlist.saved} / ${wishlist.price} ₸`;
  document.getElementById("wish-progress-fill").style.width = `${percent}%`;
  document.getElementById("wish-percent-text").textContent = `${percent}%`;
  
  if (wishlist.saved >= wishlist.price) {
    document.getElementById("wish-remains-text").textContent = t.wishDone;
  } else {
    document.getElementById("wish-remains-text").textContent = `${t.wishLeft}${remains} ₸`;
  }
}

// ==================== ДЕЙСТВИЯ ЗАДАНИЙ И СТАТЕЙ ====================
function readArticleAndEarn(artId, url) {
  if (!readArticles.includes(artId)) {
    balance += artId === 1 ? 300 : 400;
    readArticles.push(artId);
    saveState();
    updateUI();
  }
  window.open(url, "_blank");
}

function openAuditModal() { if (!completedTasks.includes(1)) openModal("modal-audit"); }
function submitAudit(e) {
  e.preventDefault();
  if (completedTasks.includes(1)) return;
  balance += 500;
  completedTasks.push(1);
  saveState();
  updateUI();
  closeModal("modal-audit");
}

function openMarketModal() { if (!completedTasks.includes(2)) { loadMarketPair(); openModal("modal-market"); } }
function loadMarketPair() {
  selectedProductIndex = null;
  currentMarketPair = marketCategories[0];
  const container = document.getElementById("products-container");
  container.innerHTML = `
    <div class="product-card" id="prod-0" onclick="selectProduct(0)">
      <div class="product-title">${currentMarketPair.prod1.name}</div>
      <div class="product-spec">• Цена: ${currentMarketPair.prod1.price} ₸ (${currentMarketPair.prod1.volume}${currentMarketPair.prod1.unit})</div>
    </div>
    <div class="product-card" id="prod-1" onclick="selectProduct(1)">
      <div class="product-title">${currentMarketPair.prod2.name}</div>
      <div class="product-spec">• Цена: ${currentMarketPair.prod2.price} ₸ (${currentMarketPair.prod2.volume}${currentMarketPair.prod2.unit})</div>
    </div>
  `;
}
function selectProduct(index) {
  selectedProductIndex = index;
  document.querySelectorAll(".product-card").forEach(c => c.classList.remove("selected"));
  document.getElementById(`prod-${index}`).classList.add("selected");
}
function submitMarketChoice() {
  if (selectedProductIndex === currentMarketPair.correctIndex) {
    balance += 700;
    completedTasks.push(2);
    saveState();
    updateUI();
    closeModal("modal-market");
  }
}

function openSubscriptionModal() {
  if (!completedTasks.includes(3)) {
    const task = subscriptionTasks[0];
    document.getElementById("sub-condition-text").textContent = task.condition;
    document.getElementById("sub-question-text").textContent = task.question;

    const container = document.getElementById("sub-options-container");
    container.innerHTML = task.options.map((opt, i) => `
      <label style="display: block; margin-bottom: 8px; cursor: pointer;">
        <input type="radio" name="sub-opt" value="${i}"> ${opt}
      </label>
    `).join("");

    openModal("modal-subscription");
  }
}

function submitSubscriptionAnswer() {
  const selected = document.querySelector('input[name="sub-opt"]:checked');
  if (!selected) return;

  if (parseInt(selected.value) === subscriptionTasks[0].correct) {
    balance += 600;
    completedTasks.push(3);
    saveState();
    updateUI();
    closeModal("modal-subscription");
