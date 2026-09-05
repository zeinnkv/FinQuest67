// --- СОСТОЯНИЕ И LOCALSTORAGE ---
let balance = parseInt(localStorage.getItem("fin_balance")) || 0;
let completedTasks = JSON.parse(localStorage.getItem("fin_completed")) || [];

// Награды за статьи
const articleRewards = {
  1: 300, // Депозит (+300 ₸)
  2: 600  // Финансовая подушка (+600 ₸)
};

document.addEventListener("DOMContentLoaded", () => {
  updateUI();
});

// Обновление отображения денег и статуса
function updateUI() {
  document.getElementById("balance-amount").textContent = `${balance} ₸`;

  const statusEl = document.getElementById("user-status");
  if (balance >= 1200) statusEl.textContent = "Финансовый Гуру 🧠";
  else if (balance >= 500) statusEl.textContent = "Продвинутый 📈";
  else statusEl.textContent = "Новичок в финансах 🌱";

  // Блокировка уже выполненных заданий
  completedTasks.forEach(taskId => {
    const btn = document.getElementById(`btn-task-${taskId}`);
    const card = document.getElementById(`card-task-${taskId}`);
    if (btn && card) {
      btn.disabled = true;
      btn.textContent = "Прочитано ✓";
      card.classList.add("completed");
    }
  });
}

function saveState() {
  localStorage.setItem("fin_balance", balance);
  localStorage.setItem("fin_completed", JSON.stringify(completedTasks));
}

// --- ФУНКЦИЯ ДЛЯ ЧТЕНИЯ СТАТЕЙ С ПЕРЕНАПРАВЛЕНИЕМ ---
function readArticleAndEarn(taskId, articleUrl) {
  if (completedTasks.includes(taskId)) return;

  // 1. Добавляем награду
  const reward = articleRewards[taskId] || 0;
  balance += reward;
  completedTasks.push(taskId);

  // 2. Сохраняем состояние и обновляем UI
  saveState();
  updateUI();

  // 3. Открываем статью в новой вкладке браузера
  window.open(articleUrl, "_blank");
}

// --- ЛОГИКА МОДАЛЬНОГО ОКНА ДЛЯ АУДИТА ---
function openAuditModal() {
  if (completedTasks.includes(3)) return;
  document.getElementById("modal-audit").classList.add("active");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

function submitAudit(e) {
  e.preventDefault();
  if (completedTasks.includes(3)) return;

  balance += 500;
  completedTasks.push(3);
  saveState();
  updateUI();
  closeModal("modal-audit");
}
