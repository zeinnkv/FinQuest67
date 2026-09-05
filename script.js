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
    wishReset: "Сбросить цель (деньги вернутся) 🔄",
    wishDone: "Цель полностью достигнута! 🎉",
    wishLeft: "Осталось: ",
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
    wishReset: "Мақсатты нөлдеу (ақша қайтарылады) 🔄",
    wishDone: "Мақсатқа толық жеттіңіз! 🎉",
    wishLeft: "Қалды: ",
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
    wishReset: "Reset Goal (money refunded) 🔄",
    wishDone: "Goal fully achieved! 🎉",
    wishLeft: "Remains: ",
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

// Данные для аудита расходов
let auditEntries = [];

// Пул заданий «Супермаркет» для разных попыток
let marketRounds = [
  {
    subtitle: "Попытка 1: Сравните молочную продукцию:",
    prod1: { name: "Молоко «Фермерское»", brand: "Dairy Farm", quality: "ГОСТ, высший сорт", price: 600, volume: 1000, unit: "л", emoji: "🥛" },
    prod2: { name: "Молоко «Ультра»", brand: "BioLife", quality: "ТУ, стандарт", price: 540, volume: 800, unit: "л", emoji: "🥛" },
    correctIndex: 0 // Первое выгоднее: 600₸ за 1л против 675₸ за 1л
  },
  {
    subtitle: "Попытка 2: Сравните сладости и печенье:",
    prod1: { name: "Печенье «Юбилейное»", brand: "Большевик", quality: "Классическое, ГОСТ", price: 450, volume: 500, unit: "г", emoji: "🍪" },
    prod2: { name: "Печенье «ChocoPie»", brand: "Orion", quality: "Премиум импорт", price: 750, volume: 360, unit: "г", emoji: "🍫" },
    correctIndex: 0 // Первое выгоднее: 900₸ за 1кг против ~2083₸ за 1кг
  }
];
let marketAttemptCount = parseInt(localStorage.getItem("fin_market_attempt")) || 0;
let selectedProductIndex = null;
let currentMarketPair = null;

// Пул из 7+ актуальных подписок
let subscriptionPool = [
  {
    condition: "Музыкальный стриминг стоит 1 500 ₸/мес на одного человека. Семейный тариф на 4 человек стоит 2 800 ₸/мес.",
    question: "Сколько сэкономит КАЖДЫЙ пользователь в месяц при переходе на семейный тариф?",
    options: ["A) 500 ₸", "B) 800 ₸", "C) 1 300 ₸"],
    correct: 1
  },
  {
    condition: "Кинотеатр онлайн стоит 2 400 ₸/мес индивидуально, а годовая подписка сразу на год стоит 18 000 ₸.",
    question: "Сколько тенге вы сэкономите за год, если купите годовую подписку вместо ежемесячной оплаты?",
    options: ["A) 6 000 ₸", "B) 10 800 ₸", "C) 12 000 ₸"],
    correct: 1
  },
  {
    condition: "Игровой сервис стоит 3 000 ₸/мес. При покупке через совместный аккаунт на двоих затраты делятся поровну.",
    question: "Каковы будут расходы каждого участника за 6 месяцев?",
    options: ["A) 9 000 ₸", "B) 18 000 ₸", "C) 4 500 ₸"],
    correct: 0
  },
  {
    condition: "Облачное хранилище на 200 ГБ стоит 1 200 ₸/мес. Тариф на 2 ТБ (в 10 раз больше места) стоит 3 600 ₸/мес.",
    question: "Какова выгода за 1 ГБ в месяц у большого тарифа по сравнению с малым?",
    options: ["A) В 3 раза дешевле за 1 ГБ", "B) Одинаково", "C) Дороже в 2 раза"],
    correct: 0
  },
  {
    condition: "Электронная библиотека стоит 1 800 ₸/мес. По промокоду студенту дают скидку 25% на весь год.",
    question: "Какой станет ежемесячная плата со скидкой?",
    options: ["A) 1 200 ₸", "B) 1 350 ₸", "C) 1 500 ₸"],
    correct: 1
  },
  {
    condition: "Подписка на ИИ-помощника стоит 8 000 ₸/мес. Студенческий склад на 4 человек обойдется в 12 000 ₸/мес суммарно.",
    question: "Сколько сэкономит каждый из 4 друзей за один месяц?",
    options: ["A) 2 000 ₸", "B) 5 000 ₸", "C) 3 000 ₸"],
    correct: 1
  },
  {
    condition: "Фитнес-приложение с планом тренировок стоит 2 500 ₸/мес или 20 000 ₸ единоразово за бессрочный доступ.",
    question: "Через сколько месяцев окупится единоразовая покупка бессрочного доступа?",
    options: ["A) 6 месяцев", "B) 8 месяцев", "C) 10 месяцев"],
    correct: 1
  }
];
let currentSubTask = null;

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
  if (regForm) regForm.addEventListener("submit", submitRegistration);

  const wishForm = document.getElementById("wishlist-form");
  if (wishForm) wishForm.addEventListener("submit", setWishlistGoal);

  // Кнопки заданий
  const btn1 = document.getElementById("btn-task-1");
  if (btn1) btn1.addEventListener("click", openAuditModal);

  const btn2 = document.getElementById("btn-task-2");
  if (btn2) btn2.addEventListener("click", openMarketModal);

  const btn3 = document.getElementById("btn-task-3");
  if (btn3) btn3.addEventListener("click", openSubscriptionModal);

  // Статьи
  const btnInfo1 = document.getElementById("btn-info-1");
  if (btnInfo1) btnInfo1.addEventListener("click", () => readArticleAndEarn(1, "https://www.bcc.kz/bcc-journal/category/glossary/deposit-2/"));

  const btnInfo2 = document.getElementById("btn-info-2");
  if (btnInfo2) btnInfo2.addEventListener("click", () => readArticleAndEarn(2, "https://www.nur.kz/nurfin/personal/2042493-finansovaya-podushka-bezopasnosti-kak-ee-sozdat-i-gde-hranit/"));
}

function submitRegistration(e) {
  e.preventDefault();
  const nameInput = document.getElementById("reg-name");
  const ageInput = document.getElementById("reg-age");
  const langInput = document.getElementById("reg-lang");

  if (!nameInput || !ageInput || !langInput) return;

  userProfile = {
    name: nameInput.value.trim(),
    age: parseInt(ageInput.value),
    lang: langInput.value
  };

  localStorage.setItem("fin_user_profile", JSON.stringify(userProfile));
  closeModal("modal-welcome");
  window.location.reload();
}

function changeLanguage(lang) {
  if (!userProfile) userProfile = { name: "Пользователь", age: 15, lang: lang };
  else userProfile.lang = lang;

  localStorage.setItem("fin_user_profile", JSON.stringify(userProfile));
  window.location.reload();
}

// ==================== ОБНОВЛЕНИЕ UI ====================
function updateUI() {
  const lang = userProfile ? userProfile.lang : "ru";
  const t = translations[lang] || translations.ru;

  const userNameEl = document.getElementById("user-name");
  if (userNameEl) userNameEl.textContent = (userProfile && userProfile.name) ? userProfile.name : t.newUser;

  const statusEl = document.getElementById("user-status");
  if (statusEl) {
    if (balance >= 1500) statusEl.textContent = t.status3;
    else if (balance >= 700) statusEl.textContent = t.status2;
    else statusEl.textContent = t.status1;
  }

  const balanceAmountEl = document.getElementById("balance-amount");
  if (balanceAmountEl) balanceAmountEl.textContent = `${balance} ₸`;

  const marketAttemptsEl = document.getElementById("market-attempts-count");
  if (marketAttemptsEl) marketAttemptsEl.textContent = Math.max(0, 2 - marketAttemptCount);

  // Статус кнопок заданий
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

  // Статус статей
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
  localStorage.setItem("fin_market_attempt", marketAttemptCount);
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

// ==================== ВИШЛИСТ С ВОЗВРАТОМ СРЕДСТВ ====================
function calculateSmartPrice(title) {
  const lower = title.toLowerCase();
  let basePrice = 15000;
  if (lower.includes("телефон") || lower.includes("айфон") || lower.includes("ноутбук")) basePrice = 45000;
  else if (lower.includes("наушники") || lower.includes("кроссовки") || lower.includes("колонка")) basePrice = 20000;
  return basePrice + Math.floor(Math.random() * 20000);
}

function setWishlistGoal(e) {
  if (e) e.preventDefault();
  const inputEl = document.getElementById("wish-title-input");
  if (!inputEl) return;
  const title = inputEl.value.trim();
  if (!title) return;

  wishlist = { title: title, price: calculateSmartPrice(title), saved: 0 };
  saveState();
  updateUI();
  inputEl.value = "";
}

function resetWishlistGoal() {
  if (wishlist && wishlist.saved > 0) {
    // Возвращаем отложенные деньги обратно на основной баланс
    balance += wishlist.saved;
  }
  wishlist = null;
  localStorage.removeItem("fin_wishlist");
  saveState();
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
  if (wishlist.saved > wishlist.price) wishlist.saved = wishlist.price;

  depositInput.value = "";
  saveState();
  updateUI();
}

function updateWishlistUI() {
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

  document.getElementById("wish-display-title").textContent = wishlist.title;
  document.getElementById("wish-display-price").textContent = `${wishlist.saved} / ${wishlist.price} ₸`;
  document.getElementById("wish-progress-fill").style.width = `${percent}%`;
  document.getElementById("wish-percent-text").textContent = `${percent}%`;

  const remainsText = document.getElementById("wish-remains-text");
  const lang = userProfile ? userProfile.lang : "ru";
  const t = translations[lang] || translations.ru;

  if (wishlist.saved >= wishlist.price) {
    remainsText.textContent = t.wishDone;
  } else {
    remainsText.textContent = `${t.wishLeft}${remains} ₸`;
  }
}

// ==================== ЗАДАНИЕ 1: АУДИТ РАСХОДОВ ====================
function openAuditModal() {
  if (!completedTasks.includes(1)) {
    auditEntries = [];
    renderAuditList();
    openModal("modal-audit");
  }
}

function addAuditItem() {
  const nameInput = document.getElementById("audit-item-name");
  const priceInput = document.getElementById("audit-item-price");
  const catSelect = document.getElementById("audit-item-cat");

  const name = nameInput.value.trim();
  const price = parseInt(priceInput.value);
  const category = catSelect.value;

  if (!name || isNaN(price) || price <= 0) {
    alert("Пожалуйста, введите название и корректную сумму траты!");
    return;
  }

  auditEntries.push({ name, price, category });
  nameInput.value = "";
  priceInput.value = "";
  renderAuditList();
}

function renderAuditList() {
  const listContainer = document.getElementById("audit-items-list");
  if (!listContainer) return;

  if (auditEntries.length === 0) {
    listContainer.innerHTML = "<em>Пока ничего не добавлено... Введите снеки, книги или обложки.</em>";
    return;
  }

  listContainer.innerHTML = auditEntries.map((item, idx) => `
    <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #313244;">
      <span><strong>${item.name}</strong> — ${item.price} ₸</span>
      <span style="color: #89b4fa; font-weight: bold;">[${item.category}]</span>
    </div>
  `).join("");
}

function submitAuditFinal() {
  if (auditEntries.length < 3) {
    alert("Добавьте хотя бы 3 разные траты (например, снеки, книги, обложку), чтобы завершить аудит!");
    return;
  }
  balance += 500;
  completedTasks.push(1);
  saveState();
  updateUI();
  closeModal("modal-audit");
}

// ==================== ЗАДАНИЕ 2: СУПЕРМАРКЕТ (С ПОПЫТКАМИ И НОВЫМИ ПРОДУКТАМИ) ====================
function openMarketModal() {
  if (!completedTasks.includes(2)) {
    if (marketAttemptCount >= 2) {
      alert("Попытки закончились! Задание считается выполненным или пропущенным.");
      return;
    }
    loadMarketPair();
    openModal("modal-market");
  }
}

function loadMarketPair() {
  selectedProductIndex = null;
  // Выбираем раунд в зависимости от номера попытки (0 или 1)
  currentMarketPair = marketRounds[marketAttemptCount % marketRounds.length];

  const subtitleEl = document.getElementById("market-subtitle");
  if (subtitleEl) subtitleEl.textContent = currentMarketPair.subtitle;

  const container = document.getElementById("products-container");
  if (!container) return;

  container.innerHTML = `
    <div class="product-card" id="prod-0" onclick="selectProduct(0)">
      <div class="product-img">${currentMarketPair.prod1.emoji}</div>
      <div class="product-title">${currentMarketPair.prod1.name}</div>
      <div class="product-spec">Бренд: ${currentMarketPair.prod1.brand}<br>Качество: ${currentMarketPair.prod1.quality}<br>Цена: <b>${currentMarketPair.prod1.price} ₸</b> (${currentMarketPair.prod1.volume}${currentMarketPair.prod1.unit})</div>
    </div>
    <div class="product-card" id="prod-1" onclick="selectProduct(1)">
      <div class="product-img">${currentMarketPair.prod2.emoji}</div>
      <div class="product-title">${currentMarketPair.prod2.name}</div>
      <div class="product-spec">Бренд: ${currentMarketPair.prod2.brand}<br>Качество: ${currentMarketPair.prod2.quality}<br>Цена: <b>${currentMarketPair.prod2.price} ₸</b> (${currentMarketPair.prod2.volume}${currentMarketPair.prod2.unit})</div>
    </div>
  `;
}

function selectProduct(index) {
  selectedProductIndex = index;
  document.querySelectorAll(".product-card").forEach(c => c.classList.remove("selected"));
  const card = document.getElementById(`prod-${index}`);
  if (card) card.classList.add("selected");
}

function submitMarketChoice() {
  if (selectedProductIndex === null) {
    alert("Выберите один из вариантов товара!");
    return;
  }

  if (selectedProductIndex === currentMarketPair.correctIndex) {
    balance += 700;
    completedTasks.push(2);
    saveState();
    updateUI();
    closeModal("modal-market");
    alert("Верно! Вы отлично рассчитали выгодную стоимость за единицу товара 🎉");
  } else {
    marketAttemptCount++;
    saveState();
    updateUI();
    
    if (marketAttemptCount >= 2) {
      closeModal("modal-market");
      alert("Неправильно. К сожалению, попытки закончились.");
    } else {
      alert("Неправильный выбор! Переходим ко второй попытке с другим продуктом.");
      loadMarketPair();
    }
  }
}

// ==================== ЗАДАНИЕ 3: ПОДПИСКИ (7+ АКТУАЛЬНЫХ) ====================
function openSubscriptionModal() {
  if (!completedTasks.includes(3)) {
    // Рандомно выбираем одно из 7 заданий подписок
    const randomIndex = Math.floor(Math.random() * subscriptionPool.length);
    currentSubTask = subscriptionPool[randomIndex];

    const condText = document.getElementById("sub-condition-text");
    if (condText) condText.textContent = currentSubTask.condition;

    const qText = document.getElementById("sub-question-text");
    if (qText) qText.textContent = currentSubTask.question;

    const container = document.getElementById("sub-options-container");
    if (container) {
      container.innerHTML = currentSubTask.options.map((opt, i) => `
        <label style="display: block; margin-bottom: 8px; cursor: pointer; background: #313244; padding: 10px; border-radius: 8px;">
          <input type="radio" name="sub-opt" value="${i}" style="margin-right: 8px;"> ${opt}
        </label>
      `).join("");
    }

    openModal("modal-subscription");
  }
}

function submitSubscriptionAnswer() {
  const selected = document.querySelector('input[name="sub-opt"]:checked');
  if (!selected) {
    alert("Выберите вариант ответа!");
    return;
  }

  if (parseInt(selected.value) === currentSubTask.correct) {
    balance += 600;
    completedTasks.push(3);
    saveState();
    updateUI();
    closeModal("modal-subscription");
    alert("Отлично! Задание по подпискам успешно пройдено 🚀");
  } else {
    alert("Неверный ответ! Попробуйте еще раз.");
  }
}

// Статьи
function readArticleAndEarn(artId, url) {
  if (!readArticles.includes(artId)) {
    balance += artId === 1 ? 300 : 400;
    readArticles.push(artId);
    saveState();
    updateUI();
  }
  window.open(url, "_blank");
}
