// ==================== СОСТОЯНИЕ И LOCALSTORAGE ====================
let userProfile = JSON.parse(localStorage.getItem("fin_user_profile")) || null;
let balance = parseInt(localStorage.getItem("fin_balance")) || 0;
let completedTasks = JSON.parse(localStorage.getItem("fin_completed_tasks")) || [];
let readArticles = JSON.parse(localStorage.getItem("fin_read_articles")) || [];
let wishlist = JSON.parse(localStorage.getItem("fin_wishlist")) || null;

// Состояние для Задания 2 (Супермаркет)
let marketAttempts = parseInt(localStorage.getItem("fin_market_attempts")) || 2;
let currentMarketPair = null;
let selectedProductIndex = null;

// Состояние для Задания 3 (Подписки)
let currentSubTask = null;

// ==================== БАЗА ДАННЫХ СУПЕРМАРКЕТА ====================
const marketCategories = [
  {
    category: "Молоко",
    prod1: { name: "Молоко «Фермерское»", price: 600, volume: 1000, gmo: "Нет", brand: "Местный", quality: "Высокое", unit: "л" },
    prod2: { name: "Молоко «Ультра»", price: 540, volume: 800, gmo: "Нет", brand: "Известный", quality: "Стандарт", unit: "л" },
    correctIndex: 0
  },
  {
    category: "Мясо (Фарш)",
    prod1: { name: "Фарш «Домашний» 800г", price: 2400, volume: 800, gmo: "Нет", brand: "Премиум", quality: "Отличное", unit: "кг" },
    prod2: { name: "Фарш «Сочный» 1000г", price: 2800, volume: 1000, gmo: "Нет", brand: "Эконом", quality: "Среднее", unit: "кг" },
    correctIndex: 1
  },
  {
    category: "Печенье",
    prod1: { name: "Печенье «Choco» 400г", price: 900, volume: 400, gmo: "Нет", brand: "Импорт", quality: "Высокое", unit: "кг" },
    prod2: { name: "Печенье «Choco» 200г", price: 500, volume: 200, gmo: "Нет", brand: "Импорт", quality: "Высокое", unit: "кг" },
    correctIndex: 0
  },
  {
    category: "Подсолнечное масло",
    prod1: { name: "Масло «Zlata» 900мл", price: 810, volume: 900, gmo: "Нет", brand: "Популярный", quality: "Высокое", unit: "л" },
    prod2: { name: "Масло «Sun» 1000мл", price: 850, volume: 1000, gmo: "Нет", brand: "Новый", quality: "Высокое", unit: "л" },
    correctIndex: 1
  }
];

// ==================== БАЗА ДАННЫХ ПОДПИСОК ====================
const subscriptionTasks = [
  {
    condition: "Музыкальный сервис стоит 1 500 ₸/мес на одного человека. Семейный тариф на 4 человек стоит 2 800 ₸/мес.",
    question: "Сколько сэкономит КАЖДЫЙ из 4 друзей в месяц, если они перейдут на семейную подписку?",
    options: ["A) 500 ₸", "B) 800 ₸", "C) 1 300 ₸"],
    correct: 1
  },
  {
    condition: "Онлайн-кинотеатр стоит 2 000 ₸/мес. Тариф «Друзья» на 5 человек стоит 4 500 ₸/мес.",
    question: "Какова выгода каждого человека в месяц при разделении тарифа на 5 человек?",
    options: ["A) 1 100 ₸", "B) 900 ₸", "C) 1 500 ₸"],
    correct: 0
  },
  {
    condition: "Облако на 100 ГБ стоит 800 ₸/мес. Семейный тариф на 2 ТБ стоит 3 000 ₸/мес и делится на 6 человек.",
    question: "Сколько платит один человек на семейном тарифе?",
    options: ["A) 600 ₸", "B) 500 ₸", "C) 400 ₸"],
    correct: 1
  },
  {
    condition: "Игровой пасс стоит 3 600 ₸/мес. Годовой абонемент со скидкой стоит 28 800 ₸.",
    question: "Сколько сэкономит игрок в пересчете на один месяц при покупке годовой подписки?",
    options: ["A) 1 200 ₸", "B) 800 ₸", "C) 2 400 ₸"],
    correct: 0
  },
  {
    condition: "Подписка на книги стоит 1 800 ₸/мес. При оплате за 3 месяца студентам дают скидку 30%.",
    question: "Сколько составит экономия за 3 месяца со скидкой?",
    options: ["A) 1 620 ₸", "B) 1 800 ₸", "C) 1 200 ₸"],
    correct: 0
  },
  {
    condition: "Фитнес-приложение стоит 1 200 ₸/мес. Парный тариф на двоих стоит 1 600 ₸/мес.",
    question: "Сколько сэкономит каждый из пары друзей?",
    options: ["A) 200 ₸", "B) 400 ₸", "C) 600 ₸"],
    correct: 1
  },
  {
    condition: "Курсы стоят 4 000 ₸/мес. Групповой доступ на 8 человек стоит 16 000 ₸/мес.",
    question: "Сколько составит экономия каждого ученика в месяц?",
    options: ["A) 2 000 ₸", "B) 2 500 ₸", "C) 1 800 ₸"],
    correct: 0
  }
];

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener("DOMContentLoaded", () => {
  // Если профиля нет — показываем окно регистрации
  if (!userProfile) {
    openModal("modal-welcome");
  } else {
    updateUI();
  }
});

function submitRegistration(e) {
  e.preventDefault();
  const name = document.getElementById("reg-name").value.trim();
  const age = parseInt(document.getElementById("reg-age").value);
  const lang = document.getElementById("reg-lang").value;

  if (!name || !age) return;

  userProfile = { name, age, lang };
  localStorage.setItem("fin_user_profile", JSON.stringify(userProfile));

  closeModal("modal-welcome");
  updateUI();
}

function updateUI() {
  if (userProfile && userProfile.name) {
    document.getElementById("user-name").textContent = userProfile.name;
  }

  document.getElementById("balance-amount").textContent = `${balance} ₸`;
  document.getElementById("attempts-left").textContent = marketAttempts;

  // Статус
  const statusEl = document.getElementById("user-status");
  if (balance >= 1500) statusEl.textContent = "Финансовый Гуру 🧠";
  else if (balance >= 700) statusEl.textContent = "Продвинутый 📈";
  else statusEl.textContent = "Новичок в финансах 🌱";

  // Блокировка выполненных БОЛЬШИХ ЗАДАНИЙ
  completedTasks.forEach(taskId => {
    const btn = document.getElementById(`btn-task-${taskId}`);
    const card = document.getElementById(`card-task-${taskId}`);
    if (btn && card) {
      btn.disabled = true;
      btn.textContent = "Выполнено ✓";
      card.classList.add("completed");
    }
  });

  // Блокировка прочитанных СТАТЕЙ
  readArticles.forEach(artId => {
    const btn = document.getElementById(`btn-info-${artId}`);
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Прочитано ✓";
    }
  });

  // Обновление отображения вишлиста
  updateWishlistUI();
}

function saveState() {
  localStorage.setItem("fin_balance", balance);
  localStorage.setItem("fin_completed_tasks", JSON.stringify(completedTasks));
  localStorage.setItem("fin_read_articles", JSON.stringify(readArticles));
  localStorage.setItem("fin_market_attempts", marketAttempts);
  localStorage.setItem("fin_wishlist", JSON.stringify(wishlist));
}

// ==================== МОДАЛКИ (ОТКРЫТИЕ / ЗАКРЫТИЕ) ====================
function openModal(id) {
  document.getElementById(id).classList.add("active");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

function closeOnOverlay(e, id) {
  if (e.target.classList.contains("modal-overlay")) {
    closeModal(id);
  }
}

// ==================== АВТО-ОЦЕНКА ЦЕНЫ ДЛЯ ВИШЛИСТА ====================
function calculateSmartPrice(title) {
  const lower = title.toLowerCase();

  // Расчет по ключевым словам
  if (lower.includes("телефон") || lower.includes("айфон") || lower.includes("смартфон") || lower.includes("ноутбук") || lower.includes("пк") || lower.includes("компьютер") || lower.includes("playstation") || lower.includes("консоль")) {
    return 48000;
  }
  if (lower.includes("наушники") || lower.includes("airpods") || lower.includes("часы") || lower.includes("кроссовки") || lower.includes("колонка")) {
    return 25000;
  }
  if (lower.includes("игра") || lower.includes("книга") || lower.includes("рюкзак") || lower.includes("худи") || lower.includes("мышка") || lower.includes("клавиатура")) {
    return 12000;
  }

  // Случайная цена от 15 000 до 35 000 ₸
  const randomPrice = Math.floor(Math.random() * 21) * 1000 + 15000;
  return randomPrice;
}

function setWishlistGoal(e) {
  e.preventDefault();
  const title = document.getElementById("wish-title-input").value.trim();

  if (!title) return;

  const calculatedPrice = calculateSmartPrice(title);

  wishlist = { title, price: calculatedPrice };
  saveState();
  updateUI();
}

function resetWishlistGoal() {
  wishlist = null;
  localStorage.removeItem("fin_wishlist");
  document.getElementById("wishlist-form").classList.remove("hidden");
  document.getElementById("wishlist-progress-box").classList.add("hidden");
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

  let percent = Math.min(100, Math.round((balance / wishlist.price) * 100));
  let remains = Math.max(0, wishlist.price - balance);

  document.getElementById("wish-display-title").textContent = wishlist.title;
  document.getElementById("wish-display-price").textContent = `${wishlist.price} ₸`;
  document.getElementById("wish-progress-fill").style.width = `${percent}%`;
  document.getElementById("wish-percent-text").textContent = `${percent}% накоплено`;
  document.getElementById("wish-remains-text").textContent = percent >= 100 ? "Цель достигнута! 🎉" : `Осталось: ${remains} ₸`;
}

// ==================== БАЗА ЗНАНИЙ (СТАТЬИ) ====================
function readArticleAndEarn(artId, url) {
  if (!readArticles.includes(artId)) {
    const reward = artId === 1 ? 300 : 400;
    balance += reward;
    readArticles.push(artId);
    saveState();
    updateUI();
  }
  window.open(url, "_blank");
}

// ==================== ЗАДАНИЕ 1: АУДИТ ====================
function openAuditModal() {
  if (completedTasks.includes(1)) return;
  openModal("modal-audit");
}

function submitAudit(e) {
  e.preventDefault();
  if (completedTasks.includes(1)) return;

  balance += 500;
  completedTasks.push(1);
  saveState();
  updateUI();
  closeModal("modal-audit");
}

// ==================== ЗАДАНИЕ 2: СУПЕРМАРКЕТ ====================
function openMarketModal() {
  if (completedTasks.includes(2)) return;
  loadMarketPair();
  openModal("modal-market");
}

function loadMarketPair() {
  selectedProductIndex = null;
  document.getElementById("market-feedback").className = "feedback-msg";
  document.getElementById("market-submit-btn").classList.remove("hidden");
  document.getElementById("market-retry-btn").classList.add("hidden");

  const randIdx = Math.floor(Math.random() * marketCategories.length);
  currentMarketPair = marketCategories[randIdx];

  const container = document.getElementById("products-container");
  container.innerHTML = `
    <div class="product-card" id="prod-0" onclick="selectProduct(0)">
      <div class="product-title">${currentMarketPair.prod1.name}</div>
      <div class="product-spec">
        • Цена: ${currentMarketPair.prod1.price} ₸<br>
        • Объём/Вес: ${currentMarketPair.prod1.volume} ${currentMarketPair.prod1.unit}<br>
        • Бренд: ${currentMarketPair.prod1.brand}<br>
        • ГМО: ${currentMarketPair.prod1.gmo}<br>
        • Качество: ${currentMarketPair.prod1.quality}
      </div>
    </div>
    <div class="product-card" id="prod-1" onclick="selectProduct(1)">
      <div class="product-title">${currentMarketPair.prod2.name}</div>
      <div class="product-spec">
        • Цена: ${currentMarketPair.prod2.price} ₸<br>
        • Объём/Вес: ${currentMarketPair.prod2.volume} ${currentMarketPair.prod2.unit}<br>
        • Бренд: ${currentMarketPair.prod2.brand}<br>
        • ГМО: ${currentMarketPair.prod2.gmo}<br>
        • Качество: ${currentMarketPair.prod2.quality}
      </div>
    </div>
  `;
}

function selectProduct(index) {
  selectedProductIndex = index;
  document.querySelectorAll(".product-card").forEach(c => c.classList.remove("selected"));
  document.getElementById(`prod-${index}`).classList.add("selected");
}

function submitMarketChoice() {
  const feedback = document.getElementById("market-feedback");

  if (selectedProductIndex === null) {
    feedback.textContent = "Выберите один из товаров для проверки!";
    feedback.className = "feedback-msg error";
    return;
  }

  const p1 = currentMarketPair.prod1;
  const p2 = currentMarketPair.prod2;
  const unitPrice1 = Math.round((p1.price / p1.volume) * 1000);
  const unitPrice2 = Math.round((p2.price / p2.volume) * 1000);

  if (selectedProductIndex === currentMarketPair.correctIndex) {
    feedback.textContent = `Отлично! Верный выбор. Цена за 1 кг/л: ${unitPrice1} ₸ vs ${unitPrice2} ₸.`;
    feedback.className = "feedback-msg success";

    balance += 700;
    completedTasks.push(2);
    saveState();
    updateUI();
    setTimeout(() => closeModal("modal-market"), 2000);
  } else {
    marketAttempts--;
    saveState();
    updateUI();

    if (marketAttempts > 0) {
      feedback.textContent = `Ой, неправильно! Вы не получаете 700 ₸. Попробуйте еще раз. Разбор: у первого товара цена за 1 л/кг — ${unitPrice1} ₸, а у второго — ${unitPrice2} ₸.`;
      feedback.className = "feedback-msg error";
      document.getElementById("market-submit-btn").classList.add("hidden");
      document.getElementById("market-retry-btn").classList.remove("hidden");
    } else {
      feedback.textContent = `Закончились попытки! Задание заблокировано.`;
      feedback.className = "feedback-msg error";
      document.getElementById("market-submit-btn").disabled = true;
      document.getElementById("btn-task-2").disabled = true;
    }
  }
}

function retryMarketTask() {
  loadMarketPair();
}

// ==================== ЗАДАНИЕ 3: ПОДПИСКИ ====================
function openSubscriptionModal() {
  if (completedTasks.includes(3)) return;

  const randIdx = Math.floor(Math.random() * subscriptionTasks.length);
  currentSubTask = subscriptionTasks[randIdx];

  document.getElementById("sub-condition-text").textContent = currentSubTask.condition;
  document.getElementById("sub-question-text").textContent = currentSubTask.question;
  document.getElementById("sub-feedback").className = "feedback-msg";

  const optionsContainer = document.getElementById("sub-options-container");
  optionsContainer.innerHTML = "";

  currentSubTask.options.forEach((opt, idx) => {
    optionsContainer.innerHTML += `
      <label class="option-label">
        <input type="radio" name="sub_option" value="${idx}">
        <span class="custom-radio"></span>
        <span class="option-text">${opt}</span>
      </label>
    `;
  });

  openModal("modal-subscription");
}

function submitSubscriptionAnswer() {
  const selected = document.querySelector('input[name="sub_option"]:checked');
  const feedback = document.getElementById("sub-feedback");

  if (!selected) {
    feedback.textContent = "Выберите вариант ответа!";
    feedback.className = "feedback-msg error";
    return;
  }

  if (parseInt(selected.value) === currentSubTask.correct) {
    feedback.textContent = "Правильно! +600 ₸ начислено 🎉";
    feedback.className = "feedback-msg success";

    balance += 600;
    completedTasks.push(3);
    saveState();
    updateUI();
    setTimeout(() => closeModal("modal-subscription"), 1800);
  } else {
    feedback.textContent = "Неверно! Попробуйте посчитать ещё раз.";
    feedback.className = "feedback-msg error";
  }
}
