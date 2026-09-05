// --- ИНИЦИАЛИЗАЦИЯ ДАННЫХ ПО УМОЛЧАНИЮ ---
const defaultTasks = [
  { id: 1, title: "Составить бюджет", desc: "Запиши свои доходы и расходы за неделю.", reward: 500, completed: false },
  { id: 2, title: "Что такое депозит?", desc: "Прочитай статью о том, как работают вклады.", reward: 300, completed: false },
  { id: 3, title: "Умный шопинг", desc: "Сравни цены в двух магазинах перед покупкой.", reward: 400, completed: false },
  { id: 4, title: "Финансовая подушка", desc: "Узнай, зачем нужен запас денег на черный день.", reward: 600, completed: false }
];

// --- ЗАГРУЗКА СОСТОЯНИЯ ИЗ LOCALSTORAGE ---
let balance = parseInt(localStorage.getItem("balance")) || 2000; // Стартовый капитал для теста
let tasks = JSON.parse(localStorage.getItem("tasks")) || defaultTasks;
// Теперь сохраняем одну единственную цель (или null, если её нет)
let activeWish = JSON.parse(localStorage.getItem("activeWish")) || {
  title: "Планшет iPad",
  targetPrice: 100000,
  currentSaved: 15000
};

// --- DOM ЭЛЕМЕНТЫ ---
const balanceElement = document.getElementById("balance-amount");
const userStatusElement = document.getElementById("user-status");
const tasksContainer = document.getElementById("tasks-container");
const wishlistContainer = document.getElementById("wishlist-container");
const formContainer = document.getElementById("form-container");

// --- ФУНКЦИЯ СОХРАНЕНИЯ ДАННЫХ ---
function saveData() {
  localStorage.setItem("balance", balance);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("activeWish", JSON.stringify(activeWish));
}

// --- ФУНКЦИЯ ОБНОВЛЕНИЯ БАЛАНСА И СТАТУСА ---
function updateUI() {
  balanceElement.textContent = `${balance} ₸`;

  if (balance >= 3000) {
    userStatusElement.textContent = "Финансовый гуру 🧠";
  } else if (balance >= 1500) {
    userStatusElement.textContent = "Продвинутый копильщик 📈";
  } else {
    userStatusElement.textContent = "Новичок в финансах 🌱";
  }
}

// --- ОТРЕСОВКА СПИСКА ЗАДАНИЙ ---
function renderTasks() {
  tasksContainer.innerHTML = "";

  tasks.forEach(task => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-top">
        <div>
          <h3 class="card-title">${task.title}</h3>
          <p class="card-desc">${task.desc}</p>
        </div>
        <span class="reward">+${task.reward} ₸</span>
      </div>
      <div class="card-footer" style="justify-content: flex-end;">
        <button 
          class="btn" 
          ${task.completed ? "disabled" : ""} 
          onclick="completeTask(${task.id})">
          ${task.completed ? "Выполнено ✓" : "Выполнить"}
        </button>
      </div>
    `;

    tasksContainer.appendChild(card);
  });
}

// --- ОТРЕСОВКА ЕДИНСТВЕННОЙ ЦЕЛИ В ВИШЛИСТЕ ---
function renderWishlist() {
  wishlistContainer.innerHTML = "";

  if (!activeWish) {
    // Если цели нет — показываем форму создания
    formContainer.style.display = "block";
    return;
  }

  // Если цель есть — скрываем форму создания
  formContainer.style.display = "none";

  // Вычисляем процент выполнения
  let percent = Math.round((activeWish.currentSaved / activeWish.targetPrice) * 100);
  if (percent > 100) percent = 100;

  const isCompleted = activeWish.currentSaved >= activeWish.targetPrice;

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div>
      <div class="card-top">
        <h3 class="card-title">${activeWish.title}</h3>
        <span style="font-size: 13px; color: #38bdf8; font-weight: 600;">${activeWish.currentSaved} / ${activeWish.targetPrice} ₸ (${percent}%)</span>
      </div>
      <div class="progress-container">
        <div class="progress-bar" style="width: ${percent}%;"></div>
      </div>
    </div>
    <div class="card-footer">
      <p class="card-desc">${isCompleted ? "🎉 Ура! Цель достигнута!" : "Внеси сумму со своего счета (безвозвратно):"}</p>
      ${!isCompleted ? `
        <div class="wish-actions">
          <input type="number" id="input-wish-amount" placeholder="Сумма ₸" min="100" />
          <button class="btn" onclick="contributeToWish()">Внести</button>
        </div>
      ` : `
        <button class="btn" style="background: #ef4444;" onclick="deleteWish()">Завершить и выбрать новую</button>
      `}
    </div>
  `;

  wishlistContainer.appendChild(card);
}

// --- ВЫПОЛНЕНИЕ ЗАДАНИЯ ---
function completeTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task && !task.completed) {
    task.completed = true;
    balance += task.reward;

    saveData();
    updateUI();
    renderTasks();
  }
}

// --- ДОБАВЛЕНИЕ НОВОЙ МЕЧТЫ ---
function addNewWish() {
  const titleInput = document.getElementById("wish-title-input");
  const priceInput = document.getElementById("wish-price-input");

  const title = titleInput.value.trim();
  const price = parseInt(priceInput.value);

  if (!title) {
    alert("Пожалуйста, введите название мечты!");
    return;
  }

  if (isNaN(price) || price < 1000) {
    alert("Минимальная стоимость цели должна быть от 1000 ₸!");
    return;
  }

  activeWish = {
    title: title,
    targetPrice: price,
    currentSaved: 0
  };

  saveData();
  renderWishlist();

  // Очищаем инпуты
  titleInput.value = "";
  priceInput.value = "";
}

// --- ВНЕСЕНИЕ ДЕНЕГ В ЕДИНСТВЕННУЮ ЦЕЛЬ ---
function contributeToWish() {
  const inputEl = document.getElementById("input-wish-amount");
  const amount = parseInt(inputEl.value);

  if (isNaN(amount) || amount <= 0) {
    alert("Введите корректную сумму для вклада!");
    return;
  }

  if (amount > balance) {
    alert("У вас недостаточно средств на балансе! Выполняйте задания, чтобы заработать.");
    return;
  }

  // Списываем с баланса (безвозвратно) и добавляем к единственной цели
  balance -= amount;
  activeWish.currentSaved += amount;

  saveData();
  updateUI();
  renderWishlist();
}

// --- УДАЛЕНИЕ ДОСТИГНУТОЙ ЦЕЛИ ---
function deleteWish() {
  activeWish = null; // Сбрасываем цель, чтобы появилась форма для новой
  saveData();
  renderWishlist();
}

// --- ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ ---
updateUI();
renderTasks();
renderWishlist();
