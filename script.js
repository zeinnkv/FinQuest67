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

  setupEventListeners();
});

function setupEventListeners() {
  const langSelect = document.getElementById("lang-selector");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      changeLanguage(e.target.value);
    });
  }

  const regForm = document.getElementById("reg-form");
  if (regForm) {
    regForm.addEventListener("submit", submitRegistration);
  }

  const wishForm = document.getElementById("wishlist-form");
  if (wishForm) {
    wishForm.addEventListener("submit", setWishlistGoal);
  }

  // Привязка кнопок заданий
  const btn1 = document.getElementById("btn-task-1");
  if (btn1) btn1.addEventListener("click", openAuditModal);

  const btn2 = document.getElementById("btn-task-2");
  if (btn2) btn2.addEventListener("click", openMarketModal);

  const btn3 = document.getElementById("btn-task-3");
  if (btn3) btn3.addEventListener("click", openSubscriptionModal);

  // Ссылки на статьи с перенаправлением на нужные сайты
  const btnInfo1 = document.getElementById("btn-info-1");
  if (btnInfo1) {
    btnInfo1.addEventListener("click", () => readArticleAndEarn(1, "https://www.bcc.kz/bcc-journal/category/glossary/deposit-2/"));
  }

  const btnInfo2 = document.getElementById("btn-info-2");
  if (btnInfo2) {
    btnInfo2.addEventListener("click", () => readArticleAndEarn(2, "https://www.nur.kz/nurfin/personal/2042493-finansovaya-podushka-bezopasnosti-kak-ee-sozdat-i-gde-hranit/"));
  }
}

// Регистрация
function submitRegistration(e) {
  e.preventDefault();
  const nameInput = document.getElementById("reg-name");
  const ageInput = document.getElementById("reg-age");
  const langInput = document.getElementById("reg-lang");

  if (!nameInput || !ageInput || !langInput) return;

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);
  const lang = langInput.value;

  if (!name || !age) return;

  userProfile = { name, age, lang };
  localStorage.setItem("fin_user_profile", JSON.stringify(userProfile));

  closeModal("modal-welcome");
  window.location.reload();
}

// Смена языка с перезагрузкой
function changeLanguage(lang) {
  if (!userProfile) {
    userProfile = { name: "Пользователь", age: 15, lang: lang };
  } else {
    userProfile.lang = lang;
  }

  localStorage.setItem("fin_user_profile", JSON.stringify(userProfile));
  window.location.reload();
}

// ==================== ОБНОВЛЕНИЕ ИНТЕРФЕЙСА ====================
function updateUI() {
  const lang = userProfile ? userProfile.lang : "ru";
  const t = translations[lang] || translations.ru;

  const userNameEl = document.getElementById("user-name");
  if (userNameEl) {
    userNameEl.textContent = (userProfile && userProfile.name) ? userProfile.name : t.newUser;
  }

  const statusEl = document.getElementById("user-status");
  if (statusEl) {
    if (balance >= 1500) statusEl.textContent = t.status3;
    else if (balance >= 700) statusEl.textContent = t.status2;
    else statusEl.textContent = t.status1;
  }

  const balanceAmountEl = document.getElementById("balance-amount");
  if (balanceAmountEl) balanceAmountEl.textContent = `${balance} ₸`;

  const balanceLabelEl = document.querySelector(".balance-label");
  if (balanceLabelEl) balanceLabelEl.textContent = t.balanceLabel;

  const tasksTitleEl = document.querySelector(".tasks-column h2");
  if (tasksTitleEl) tasksTitleEl.textContent = t.tasksTitle;

  const tasksDescEl = document.querySelector(".tasks-column .section-desc");
  if (tasksDescEl) tasksDescEl.textContent = t.tasksDesc;

  const infoTitleEl = document.querySelector(".info-column h2");
  if (infoTitleEl) infoTitleEl.textContent = t.knowledgeTitle;

  const infoDescEl = document.querySelector(".info-column .section-desc");
  if (infoDescEl) infoDescEl.textContent = t.knowledgeDesc;

  const task1Title = document.querySelector("#card-task-1 .card-title");
  if (task1Title) task1Title.textContent = t.task1Title;
  const task1Desc = document.querySelector("#card-task-1 .card-desc");
  if (task1Desc) task1Desc.textContent = t.task1Desc;

  const task2Title = document.querySelector("#card-task-2 .card-title");
  if (task2Title) task2Title.textContent = t.task2Title;
  const task2Desc = document.querySelector("#card-task-2 .card-desc");
  if (task2Desc && task2Desc.childNodes[0]) {
    task2Desc.childNodes[0].nodeValue = t.task2Desc + ` (${t.attemptsText}`;
  }

  const task3Title = document.querySelector("#card-task-3 .card-title");
  if (task3Title) task3Title.textContent = t.task3Title;
  const task3Desc = document.querySelector("#card-task-3 .card-desc");
  if (task3Desc) task3Desc.textContent = t.task3Desc;

  const wishBlockH3 = document.querySelector("#wishlist-block h3");
  if (wishBlockH3) wishBlockH3.textContent = t.wishTitle;
  const wishBlockP = document.querySelector("#wishlist-block p");
  if (wishBlockP) wishBlockP.textContent = t.wishDesc;

  const wishTitleInput = document.getElementById("wish-title-input");
  if (wishTitleInput) wishTitleInput.placeholder = t.wishPlaceholder;

  const wishBtn = document.querySelector("#wishlist-form button");
  if (wishBtn) wishBtn.textContent = t.wishBtn;

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

// ==================== МОДАЛЬНЫЕ ОКНА ====================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("active");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("active");
}

function closeOnOverlay(e, id) {
  if (e.target.classList.contains("modal-overlay")) closeModal(id);
}

// ==================== ВИШЛИСТ (ЦЕЛИ) ====================
function calculateSmartPrice(title) {
  const lower = title.toLowerCase();
  let basePrice = 15000;

  if (lower.includes("телефон") || lower.includes("айфон") || lower.includes("смартфон") || lower.includes("ноутбук") || lower.includes("macbook")) {
    basePrice = 45000;
  } else if (lower.includes("наушники") || lower.includes("кроссовки") || lower.includes("колонка") || lower.includes("планшет")) {
    basePrice = 20000;
  }

  const randomAddition = Math.floor(Math.random() * 30001);
  let finalPrice = basePrice + randomAddition;
  if (finalPrice < 10000) finalPrice = 10000;
  return finalPrice;
}

function setWishlistGoal(e) {
  if (e) e.preventDefault();
  const inputEl = document.getElementById("wish-title-input");
  if (!inputEl) return;

  const title = inputEl.value.trim();
  if (!title) return;

  wishlist = {
    title: title,
    price: calculateSmartPrice(title),
    saved: 0
  };

  saveState();
  updateUI();
  inputEl.value = "";
}

function resetWishlistGoal() {
  wishlist = null;
  localStorage.removeItem("fin_wishlist");
  updateUI();
}

function depositToWishlist() {
  if (!wishlist) return;

  const depositInput = document.getElementById("wish-deposit-input");
  if (!depositInput) return;

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

  balance -= amount;
  wishlist.saved += amount;

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

  let percent = Math.min(100, Math.round((wishlist.saved / wishlist.price) * 100));
  let remains = Math.max(0, wishlist.price - wishlist.saved);

  const displayTitle = document.getElementById("wish-display-title");
  if (displayTitle) displayTitle.textContent = wishlist.title;

  const displayPrice = document.getElementById("wish-display-price");
  if (displayPrice) displayPrice.textContent = `${wishlist.saved} / ${wishlist.price} ₸`;

  const progressFill = document.getElementById("wish-progress-fill");
  if (progressFill) progressFill.style.width = `${percent}%`;

  const percentText = document.getElementById("wish-percent-text");
  if (percentText) percentText.textContent = `${percent}%`;

  const remainsText = document.getElementById("wish-remains-text");
  if (remainsText) {
    if (wishlist.saved >= wishlist.price) {
      remainsText.textContent = t.wishDone;
    } else {
      remainsText.textContent = `${t.wishLeft}${remains} ₸`;
    }
  }
}

// ==================== ЗАДАНИЯ И СТАТЬИ ====================
function readArticleAndEarn(artId, url) {
  if (!readArticles.includes(artId)) {
    balance += artId === 1 ? 300 : 400;
    readArticles.push(artId);
    saveState();
    updateUI();
  }
  window.open(url, "_blank");
}

function openAuditModal() {
  if (!completedTasks.includes(1)) openModal("modal-audit");
}

function submitAudit(e) {
  if (e) e.preventDefault();
  if (completedTasks.includes(1)) return;
  balance += 500;
  completedTasks.push(1);
  saveState();
  updateUI();
  closeModal("modal-audit");
}

function openMarketModal() {
  if (!completedTasks.includes(2)) {
    loadMarketPair();
    openModal("modal-market");
  }
}

function loadMarketPair() {
  selectedProductIndex = null;
  currentMarketPair = marketCategories[0];
  const container = document.getElementById("products-container");
  if (!container) return;

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
  const prodCard = document.getElementById(`prod-${index}`);
  if (prodCard) prodCard.classList.add("selected");
}

function submitMarketChoice() {
  if (selectedProductIndex === currentMarketPair.correctIndex) {
    balance += 700;
    completedTasks.push(2);
    saveState();
    updateUI();
    closeModal("modal-market");
  } else {
    alert("Неверный выбор, попробуйте еще раз!");
  }
}

function openSubscriptionModal() {
  if (!completedTasks.includes(3)) {
    const task = subscriptionTasks[0];
    const condText = document.getElementById("sub-condition-text");
    if (condText) condText.textContent = task.condition;

    const qText = document.getElementById("sub-question-text");
    if (qText) qText.textContent = task.question;

    const container = document.getElementById("sub-options-container");
    if (container) {
      container.innerHTML = task.options.map((opt, i) => `
        <label style="display: block; margin-bottom: 8px; cursor: pointer;">
          <input type="radio" name="sub-opt" value="${i}"> ${opt}
        </label>
      `).join("");
    }

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
  } else {
    alert("Неверный ответ, попробуйте еще раз!");
  }
}
