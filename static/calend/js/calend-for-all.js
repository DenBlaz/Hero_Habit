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
  }
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
  for (let i = 0; i <= 23; i++) {
    const timeSlot = document.createElement("div");
    timeSlot.className = "time-slot";

    if (column.id === "time-column") {
      if (i === 0) {
        timeSlot.textContent = `12 am`;
      } else if (i < 12) {
        timeSlot.textContent = `${i} am`;
      } else if (i === 12) {
        timeSlot.textContent = `12 pm`;
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

const images = document.querySelectorAll(".at-icon");
images[0].src = images[0].dataset.chosen;
images.forEach((img) => {
  img.addEventListener("click", () => {
    images.forEach((img) => {
      img.src = img.dataset.default;
      img.classList.remove("chosen");
    });
    img.src = img.dataset.chosen;
    img.classList.add("chosen");
  });
});

const taskForm = document.getElementById("addTaskForm");
const titleText = document.querySelector(".title-task p");
const inputFields = document.querySelectorAll(".add-task input, .add-task textarea");

if (taskForm) {
  taskForm.style.visibility = "hidden";
}

function toggleTaskForm(changeTitle = false, changePlaceholder = false) {
  if (taskForm.style.visibility === "hidden" || taskForm.style.visibility === "") {
    taskForm.style.visibility = "visible";
    taskForm.style.position = "absolute";
    if (changeTitle && titleText) {
      titleText.textContent = "Edit Task";
    }
    if (changePlaceholder) {
      inputFields.forEach((input) => {
        input.style.setProperty("--placeholder-color", "black");
        input.style.color = "black";
      });
    }
  } else {
    taskForm.style.visibility = "hidden";
    if (titleText) {
      titleText.textContent = "Add a Task";
    }
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

addClickListener(".task-block", true, true);
addClickListener(".top-bar", true, true);

const addTaskButton = document.getElementById("addTaskButton");
if (addTaskButton) {
  addTaskButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleTaskForm(false, false);
  });
}

document.querySelector(".title-task .icon")?.addEventListener("click", function () {
  taskForm.style.visibility = "hidden";
  if (titleText) {
    titleText.textContent = "Add a Task";
  }
  inputFields.forEach((input) => {
    input.style.setProperty("--placeholder-color", "");
    input.style.color = "";
  });
});

document.querySelector(".cancel-button")?.addEventListener("click", function () {
  taskForm.style.visibility = "hidden";
  if (titleText) {
    titleText.textContent = "Add a Task";
  }
  inputFields.forEach((input) => {
    input.style.setProperty("--placeholder-color", "");
    input.style.color = "";
  });
});

document.addEventListener("click", function (event) {
  if (
    taskForm.style.visibility === "visible" &&
    !taskForm.contains(event.target) &&
    !event.target.closest(".task-block") &&
    !event.target.closest(".top-bar") &&
    event.target !== addTaskButton
  ) {
    taskForm.style.visibility = "hidden";
    if (titleText) {
      titleText.textContent = "Add a Task";
    }
    inputFields.forEach((input) => {
      input.style.setProperty("--placeholder-color", "");
      input.style.color = "";
    });
  }
});

document.getElementById("toggleView").addEventListener("click", function () {
  const calendarView = document.getElementById("calendarView");
  const taskView = document.getElementById("taskView");
  const icon = document.getElementById("toggleIcon");
  const buttonText = document.getElementById("toggleText");

  if (calendarView.classList.contains("hidden")) {
    calendarView.classList.remove("hidden");
    taskView.classList.add("hidden");
    icon.classList.remove("flip-image");
    buttonText.textContent = "Show tasks for months";
  } else {
    calendarView.classList.add("hidden");
    taskView.classList.remove("hidden");
    icon.classList.add("flip-image");
    buttonText.textContent = "Show tasks for days";
  }
});

document.getElementById("toggleView").addEventListener("click", function () {
  const taskTimeContainer = document.querySelector(".task-time");
  const dateForMonth = document.getElementById("dateMonth");
  const dateForDays = document.getElementById("dateDay");
  const dateForDay = document.getElementById("toggleDate");
  const addTask = document.querySelector(".add-task");

  const isMonthlyView = this.classList.toggle("activebutton");

  if (isMonthlyView) {
    dateForDay.classList.add("hidden");
    dateForDays.classList.add("hidden");
    dateForMonth.classList.remove("hidden");
    addTask.style.height = "370px";
  } else {
    dateForDay.classList.remove("hidden");
    dateForDays.classList.remove("hidden");
    dateForMonth.classList.add("hidden");
    addTask.style.height = "470px";
  }
});

const icons = document.querySelectorAll('.at-icon');
const categoryText = document.getElementById('category-text');
let selectedText = 'Category';

icons.forEach((icon) => {
  icon.addEventListener('mouseenter', () => {
    categoryText.textContent = icon.getAttribute('data-text');
  });

  icon.addEventListener('mouseleave', () => {
    categoryText.textContent = selectedText;
  });

  icon.addEventListener('click', () => {
    selectedText = icon.getAttribute('data-text');
    categoryText.textContent = selectedText;
  });
});