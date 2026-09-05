// --- ИНИЦИАЛИЗАЦИЯ ДАННЫХ ПО УМОЛЧАНИЮ ---
const defaultTasks = [
  { id: 1, title: "Составить бюджет", desc: "Запиши свои доходы и расходы за неделю.", reward: 500, completed: false },
  { id: 2, title: "Что такое депозит?", desc: "Прочитай статью о том, как работают вклады.", reward: 300, completed: false },
  { id: 3, title: "Умный шопинг", desc: "Сравни цены в двух магазинах перед покупкой.", reward: 400, completed: false },
  { id: 4, title: "Финансовая подушка", desc: "Узнай, зачем нужен запас денег на черный день.", reward: 600, completed: false }
];

const defaultShopItems = [
  { id: 101, title: "Курс «Инвестиции 101»", desc: "Базовые знания о фондовом рынке.", price: 800, bought: false },
  { id: 102, title: "Книга «Самый богатый человек в Вавилоне»", desc: "Классика финансовой литературы.", price: 500, bought: false },
  { id: 103, title: "Мечта: Новый велосипед", desc: "Взнос в виртуальную копилку мечты.", price: 1000, bought: false }
];

// --- ЗАГРУЗКА СОСТОЯНИЯ ИЗ LOCALSTORAGE ---
let balance = parseInt(localStorage.getItem("balance")) || 0;
let tasks = JSON.parse(localStorage.getItem("tasks")) || defaultTasks;
let shopItems = JSON.parse(localStorage.getItem("shopItems")) || defaultShopItems;

// --- DOM ЭЛЕМЕНТЫ ---
const balanceElement = document.getElementById("balance-amount");
const userStatusElement = document.getElementById("user-status");
const tasksContainer = document.getElementById("tasks-container");
const shopContainer = document.getElementById("shop-container");

// --- ФУНКЦИЯ СОХРАНЕНИЯ ДАННЫХ ---
function saveData() {
  localStorage.setItem("balance", balance);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("shopItems", JSON.stringify(shopItems));
}

// --- ФУНКЦИЯ ОБНОВЛЕНИЯ БАЛАНСА И СТАТУСА ---
function updateUI() {
  balanceElement.textContent = `${balance} ₸`;

  // Автоматическое обновление статуса в зависимости от баланса
  if (balance >= 1500) {
    userStatusElement.textContent = "Финансовый гуру 🧠";
  } else if (balance >= 700) {
    userStatusElement.textContent = "Продвинутый копилка 📈";
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
      <div>
        <h3 class="card-title">${task.title}</h3>
        <p class="card-desc">${task.desc}</p>
      </div>
      <div class="card-footer">
        <span class="reward">+${task.reward} ₸</span>
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

// --- ОТРЕСОВКА СПИСКА МАГАЗИНА ---
function renderShop() {
  shopContainer.innerHTML = "";

  shopItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
      </div>
      <div class="card-footer">
        <span class="price">${item.price} ₸</span>
        <button 
          class="btn btn-shop" 
          ${item.bought ? "disabled" : ""} 
          onclick="buyItem(${item.id})">
          ${item.bought ? "Куплено ✓" : "Купить"}
        </button>
      </div>
    `;

    shopContainer.appendChild(card);
  });
}

// --- ЛОГИКА ВЫПОЛНЕНИЯ ЗАДАНИЯ ---
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

// --- ЛОГИКА ПОКУПКИ В МАГАЗИНЕ ---
function buyItem(id) {
  const item = shopItems.find(i => i.id === id);

  if (item && !item.bought) {
    if (balance >= item.price) {
      item.bought = true;
      balance -= item.price;

      saveData();
      updateUI();
      renderShop();
    } else {
      alert("Недостаточно средств на балансе!");
    }
  }
}

// --- ПЕРВОНАЧАЛЬНЫЙ ЗАПУСК ---
updateUI();
renderTasks();
renderShop();
