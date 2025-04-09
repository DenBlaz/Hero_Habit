
const modal = document.getElementById("profile-modal");
const openModalBtn = document.getElementById("open-modal");
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  openModalBtn.classList.add("circled");
});
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    openModalBtn.classList.remove("circled");
  }z
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleIcon = document.getElementById("toggle-icon");
  const closeIcon = document.getElementById("close");
  const panel = document.getElementById("toggle-panel");
  const overlay = document.getElementById("overlay");
  const profileOption = document.getElementById("ViewProfileOption");
  const passwordOption = document.getElementById("ChangePassword");
  const profileSection = document.querySelector(".settings-profile-usage");
  const passwordSection = document.querySelector(".settings-change-password");

  profileOption.classList.add("active");
  profileSection.style.display = "block";
  passwordSection.style.display = "none";

  toggleIcon.addEventListener("click", () => {
    panel.style.display = "block";
    overlay.style.display = "block";
  });
  closeIcon.addEventListener("click", () => {
    panel.style.display = "none";
    overlay.style.display = "none";
  });
  overlay.addEventListener("click", () => {
    panel.style.display = "none";
    overlay.style.display = "none";
  });

  profileOption.addEventListener("click", function () {
    profileOption.classList.add("active");
    passwordOption.classList.remove("active");
    profileSection.style.display = "block";
    passwordSection.style.display = "none";
  });
  passwordOption.addEventListener("click", function () {
    passwordOption.classList.add("active");
    profileOption.classList.remove("active");
    profileSection.style.display = "none";
    passwordSection.style.display = "block";
  });
});

const timeColumns = document.querySelectorAll(".time-column");
timeColumns.forEach((column) => {
  for (let i = 1; i <= 24; i++) {
    const timeSlot = document.createElement("div");
    timeSlot.className = "time-slot";
    if (column.id === "time-column") {
      if (i <= 12) {
        timeSlot.textContent = `${i} am`;
      } else {
        timeSlot.textContent = `${i - 12} pm`;
      }
    }
    column.appendChild(timeSlot);
  }
});

const buttons = document.querySelectorAll(".space");
let activeButton = null;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (activeButton) {
      activeButton.style.backgroundColor = "";
      activeButton.style.color = "";
      activeButton.style.borderBottom = "";
    }
    activeButton = button;
    button.style.backgroundColor = "rgba(228, 222, 249)";
    button.style.color = "#000000";
    button.style.borderBottom = "2px solid #8364E8";
  });
});

const taskForm = document.getElementById("addTaskForm");
const titleText = document.querySelector(".title-task p");
const inputFields = document.querySelectorAll(".add-task input, .add-task textarea");
if (taskForm) taskForm.style.display = "none";

function toggleTaskForm(changeTitle = false, changePlaceholder = false) {
  if (taskForm.style.display === "none" || taskForm.style.display === "") {
    taskForm.style.display = "block";
    if (changeTitle && titleText) titleText.textContent = "Edit Task";
    if (changePlaceholder) {
      inputFields.forEach((input) => {
        input.style.setProperty("--placeholder-color", "black");
        input.style.color = "black";
      });
    }
  } else {
    taskForm.style.display = "none";
    if (titleText) titleText.textContent = "Add a Task";
    inputFields.forEach((input) => {
      input.style.setProperty("--placeholder-color", "");
      input.style.color = "";
    });
  }
}

function addClickListener(selector, changeTitle = false, changePlaceholder = false) {
  document.querySelectorAll(selector).forEach((element) => {
    element.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleTaskForm(changeTitle, changePlaceholder);
    });
  });
}

addClickListener(".side-bar", true, true);
addClickListener(".task", true, true);

const addTaskButton = document.getElementById("addTaskButton");
if (addTaskButton) {
  addTaskButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleTaskForm(false, false);
  });
}

document.querySelector(".title-task .icon")?.addEventListener("click", function () {
  taskForm.style.display = "none";
  if (titleText) titleText.textContent = "Add a Task";
  inputFields.forEach((input) => {
    input.style.setProperty("--placeholder-color", "");
    input.style.color = "";
  });
});

document.querySelector(".cancel-button")?.addEventListener("click", function () {
  taskForm.style.display = "none";
  if (titleText) titleText.textContent = "Add a Task";
  inputFields.forEach((input) => {
    input.style.setProperty("--placeholder-color", "");
    input.style.color = "";
  });
});

document.addEventListener("click", function (event) {
  if (
    taskForm.style.display === "block" &&
    !taskForm.contains(event.target) &&
    !event.target.closest(".side-bar") &&
    !event.target.closest(".task") &&
    event.target !== addTaskButton
  ) {
    taskForm.style.display = "none";
    if (titleText) titleText.textContent = "Add a Task";
    inputFields.forEach((input) => {
      input.style.setProperty("--placeholder-color", "");
      input.style.color = "";
    });
  }
});

const toggleButton = document.getElementById("toggleView");
const calendarView = document.getElementById("calendarView");
const taskView = document.getElementById("taskView");
const toggleIcon = document.getElementById("toggleIcon");
const toggleText = document.getElementById("toggleText");
const dateDay = document.getElementById("dateDay");
const dateMonth = document.getElementById("dateMonth");
const dueDateSection = document.getElementById("dueDateSection");
const dueDateInput = document.getElementById("dueDate");
const startDateInput = document.getElementById("startDate");
const finishDateInput = document.getElementById("finishDate");
const taskType = document.getElementById("taskType");
const addTask = document.querySelector(".add-task");
let currentMode = "day";

toggleButton.addEventListener("click", function () {
  const isMonthlyView = toggleButton.classList.toggle("activebutton");
  console.log("Switching mode. Is monthly view:", isMonthlyView);
  if (isMonthlyView) {
    currentMode = "month";
    calendarView.classList.add("hidden");
    taskView.classList.remove("hidden");
    toggleIcon.classList.add("flip-image");
    toggleText.textContent = "Show tasks for days";
    dateDay.classList.add("hidden");
    dateMonth.classList.remove("hidden");
    dueDateSection.classList.add("hidden");
    dueDateInput.removeAttribute("required");
    startDateInput.setAttribute("required", "");
    finishDateInput.setAttribute("required", "");
    taskType.value = "long";
    addTask.style.height = "370px";
    console.log("Switched to Long Tasks. taskType:", taskType.value);
  } else {
    currentMode = "day";
    calendarView.classList.remove("hidden");
    taskView.classList.add("hidden");
    toggleIcon.classList.remove("flip-image");
    toggleText.textContent = "Show tasks for months";
    dateDay.classList.remove("hidden");
    dateMonth.classList.add("hidden");
    dueDateSection.classList.remove("hidden");
    dueDateInput.setAttribute("required", "");
    startDateInput.removeAttribute("required");
    finishDateInput.removeAttribute("required");
    taskType.value = "daily";
    addTask.style.height = "470px";
    console.log("Switched to Daily Tasks. taskType:", taskType.value);
  }
});

function setTaskMode(mode) {
  console.log("Setting initial mode to:", mode);
  if (mode === "month") {
    currentMode = "month";
    calendarView.classList.add("hidden");
    taskView.classList.remove("hidden");
    toggleIcon.classList.add("flip-image");
    toggleText.textContent = "Show tasks for days";
    dateDay.classList.add("hidden");
    dateMonth.classList.remove("hidden");
    dueDateSection.classList.add("hidden");
    dueDateInput.removeAttribute("required");
    startDateInput.setAttribute("required", "");
    finishDateInput.setAttribute("required", "");
    taskType.value = "long";
    addTask.style.height = "370px";
  } else {
    currentMode = "day";
    calendarView.classList.remove("hidden");
    taskView.classList.add("hidden");
    toggleIcon.classList.remove("flip-image");
    toggleText.textContent = "Show tasks for months";
    dateDay.classList.remove("hidden");
    dateMonth.classList.add("hidden");
    dueDateSection.classList.remove("hidden");
    dueDateInput.setAttribute("required", "");
    startDateInput.removeAttribute("required");
    finishDateInput.removeAttribute("required");
    taskType.value = "daily";
    addTask.style.height = "470px";
  }
  console.log("Initial taskType:", taskType.value);
}
setTaskMode("{{ task_type|default:'day' }}");

const images = document.querySelectorAll(".at-icon");
images[0].src = images[0].dataset.chosen;
images.forEach((img) => {
  img.addEventListener("click", () => {
    images.forEach((i) => {
      i.src = i.dataset.default;
      i.classList.remove("chosen");
    });
    img.src = img.dataset.chosen;
    img.classList.add("chosen");
    document.getElementById("characteristic").value = img.getAttribute("data-category");
  });
});