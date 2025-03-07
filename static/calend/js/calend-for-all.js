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

  // Initially show 'Change Password' section
  profileOption.classList.add("active");
  profileSection.style.display = "block";
  passwordSection.style.display = "none";

  // Open Settings Panel
  toggleIcon.addEventListener("click", () => {
    panel.style.display = "block";
    overlay.style.display = "block";
  });

  // Close Settings Panel
  closeIcon.addEventListener("click", () => {
    panel.style.display = "none";
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", () => {
    panel.style.display = "none";
    overlay.style.display = "none";
  });

  // Toggle Between Profile and Password Sections
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

//new code

const timeColumns = document.querySelectorAll(".time-column"); // Select all columns

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

//Button for choosing a day on a right side of a calendar
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

    button.style.backgroundColor = "rgba(228, 222, 249) ";
    button.style.color = "#000000";
    button.style.borderBottom = "2px solid #8364E8";
  });
});

//Davyd's
document.addEventListener("DOMContentLoaded", function () {
  const toggleIcon = document.getElementById("toggle-icon");
  const closeIcon = document.getElementById("close");
  const panel = document.getElementById("toggle-panel");
  const overlay = document.getElementById("overlay");
  const profileOption = document.getElementById("ViewProfileOption");
  const passwordOption = document.getElementById("ChangePassword");

  const profileSection = document.querySelector(".settings-profile-usage");
  const passwordSection = document.querySelector(".settings-change-password");

  // Initially show 'Change Password' section
  profileOption.classList.add("active");
  profileSection.style.display = "block";
  passwordSection.style.display = "none";

  // Open Settings Panel
  toggleIcon.addEventListener("click", () => {
    panel.style.display = "block";
    overlay.style.display = "block";
  });

  // Close Settings Panel
  closeIcon.addEventListener("click", () => {
    panel.style.display = "none";
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", () => {
    panel.style.display = "none";
    overlay.style.display = "none";
  });

  // Toggle Between Profile and Password Sections
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

const images = document.querySelectorAll(".at-icon");
// Ensure the first image starts with its "chosen" state
images[0].src = images[0].dataset.chosen;
images.forEach((img) => {
  img.addEventListener("click", () => {
    // Reset all images to default
    images.forEach((img) => {
      img.src = img.dataset.default;
      img.classList.remove("chosen");
    });
    // Set clicked image to its chosen state
    img.src = img.dataset.chosen;
    img.classList.add("chosen");
  });
});

// Get reference to the task form and title text
const taskForm = document.getElementById("addTaskForm");
const titleText = document.querySelector(".title-task p"); // Title inside the task form
const inputFields = document.querySelectorAll(
  ".add-task input, .add-task textarea"
); // All input fields inside add-task

if (taskForm) {
  taskForm.style.visibility = "hidden"; // Ensure it's hidden initially
}

// Function to toggle form visibility
function toggleTaskForm(changeTitle = false, changePlaceholder = false) {
  if (
    taskForm.style.visibility === "hidden" ||
    taskForm.style.visibility === ""
  ) {
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
    // Reset placeholder color
    inputFields.forEach((input) => {
      input.style.setProperty("--placeholder-color", "");
      input.style.color = "";
    });
  }
}

// Function to add click event listeners to elements
function addClickListener(
  selector,
  changeTitle = false,
  changePlaceholder = false
) {
  document.querySelectorAll(selector).forEach((element) => {
    element.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleTaskForm(changeTitle, changePlaceholder);
    });
  });
}

addClickListener(".side-bar", true, true);
addClickListener(".task", true, true);

// Add event listener to "#addTaskButton" (doesn't change title or placeholder color)
const addTaskButton = document.getElementById("addTaskButton");
if (addTaskButton) {
  addTaskButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleTaskForm(false, false);
  });
}

// Close the form when the cross icon is clicked
document
  .querySelector(".title-task .icon")
  ?.addEventListener("click", function () {
    taskForm.style.visibility = "hidden";
    if (titleText) {
      titleText.textContent = "Add a Task";
    }
    // Reset placeholder color
    inputFields.forEach((input) => {
      input.style.setProperty("--placeholder-color", "");
      input.style.color = "";
    });
  });

// Close the form when the cancel button is clicked
document
  .querySelector(".cancel-button")
  ?.addEventListener("click", function () {
    taskForm.style.visibility = "hidden";
    if (titleText) {
      titleText.textContent = "Add a Task";
    }
    // Reset placeholder color
    inputFields.forEach((input) => {
      input.style.setProperty("--placeholder-color", "");
      input.style.color = "";
    });
  });

// Close the form when clicking outside of it
document.addEventListener("click", function (event) {
  if (
    taskForm.style.visibility === "visible" &&
    !taskForm.contains(event.target) &&
    !event.target.closest(".side-bar") &&
    !event.target.closest(".task") &&
    event.target !== addTaskButton
  ) {
    taskForm.style.visibility = "hidden";
    if (titleText) {
      titleText.textContent = "Add a Task";
    }
    // Reset placeholder color
    inputFields.forEach((input) => {
      input.style.setProperty("--placeholder-color", "");
      input.style.color = "";
    });
  }
});

//switching between tasks for days and long term tasks
document.getElementById("toggleView").addEventListener("click", function () {
  const calendarView = document.getElementById("calendarView");
  const taskView = document.getElementById("taskView");
  const icon = document.getElementById("toggleIcon");
  const buttonText = document.getElementById("toggleText");

  if (calendarView.classList.contains("hidden")) {
    calendarView.classList.remove("hidden");
    taskView.classList.add("hidden");
    icon.classList.remove("flip-image"); // Reset image flip
    buttonText.textContent = "Show tasks for months";
  } else {
    calendarView.classList.add("hidden");
    taskView.classList.remove("hidden");
    icon.classList.add("flip-image"); // Flip image
    buttonText.textContent = "Show tasks for days";
  }
});

document.getElementById("toggleView").addEventListener("click", function () {
  const taskTimeContainer = document.querySelector(".task-time");
  const dateForMonth = document.getElementById("dateMonth");
  const dateForDays = document.getElementById("dateDay");
  const dateForDay = document.getElementById("toggleDate");
  const addTask = document.querySelector(".add-task");

  const isMonthlyView = this.classList.toggle("activebutton"); // Toggle mode

  if (isMonthlyView) {
    // Show "tasks for months" mode

    dateForDay.classList.add("hidden");
    dateForDays.classList.add("hidden");
    dateForMonth.classList.remove("hidden");

    addTask.style.height = "420px";
  } else {
    // Show default mode (tasks for days)

    dateForDay.classList.remove("hidden");
    dateForDays.classList.remove("hidden");
    dateForMonth.classList.add("hidden");

    addTask.style.height = "470px";
  }
});

//new code for showing category of chosen circle and when hovering
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