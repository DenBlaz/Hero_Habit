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

//Generating 24 rows for every hour
function generateTimes() {
  const times = [];
  for (let hour = 1; hour <= 12; hour++) {
    times.push(`${hour} am`);
  }
  for (let hour = 1; hour <= 12; hour++) {
    times.push(`${hour} pm`);
  }
  return times;
}

// Function to create a single time row
function createTimeRow(timeLabel) {
  const row = document.createElement("div");
  row.className = "time-row";

  const timeCell = document.createElement("div");
  timeCell.className = "day";
  timeCell.textContent = timeLabel;
  row.appendChild(timeCell);

  // Add the other 7 cells (empty)
  for (let i = 0; i < 7; i++) {
    const dayCell = document.createElement("div");
    dayCell.className = "day";
    row.appendChild(dayCell);
  }

  return row;
}

// Function to populate the time-section with rows
function populateTimeSection() {
  const timeSection = document.getElementById("time-section");
  const times = generateTimes();

  times.forEach((time) => {
    const row = createTimeRow(time);
    timeSection.appendChild(row);
  });
}

populateTimeSection();


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




//new davyds
const images = document.querySelectorAll('.at-icon');
// Ensure the first image starts with its "chosen" state
images[0].src = images[0].dataset.chosen;
images.forEach((img) => {
    img.addEventListener('click', () => {
        // Reset all images to default
        images.forEach((img) => {
            img.src = img.dataset.default;
            img.classList.remove('chosen');
        });
        // Set clicked image to its chosen state
        img.src = img.dataset.chosen;
        img.classList.add('chosen');
    });
});
const taskForm = document.getElementById('addTaskForm');
if (taskForm) {
    taskForm.style.visibility = "hidden"; // Make sure it's hidden initially
}
// Toggle visibility when "Add a task" button is clicked
document.getElementById('addTaskButton').addEventListener('click', function() {
    var taskForm = document.getElementById('addTaskForm');
    if (taskForm.style.visibility === "hidden" || taskForm.style.visibility === "") {
        taskForm.style.visibility = "visible"; // Show form
        taskForm.style.position = "absolute";  // Make sure it doesn't mess with other elements
    } else {
        taskForm.style.visibility = "hidden"; // Hide form
    }
});
// Close the form when the cross icon is clicked
document.querySelector('.title-task .icon').addEventListener('click', function() {
    const taskForm = document.getElementById('addTaskForm');
    if (taskForm) {
        taskForm.style.visibility = "hidden"; // Hide form
    }
});
// Close the form when the cancel button is clicked
document.querySelector('.cancel-button').addEventListener('click', function() {
    document.getElementById('addTaskForm').style.visibility = "hidden"; // Hide form
});



//switching between tasks for days and long term tasks
document.getElementById("toggleView").addEventListener("click", function () {
  const calendarView = document.getElementById("calendarView");
  const taskView = document.getElementById("taskView");
  const icon = document.getElementById("toggleIcon");
  const button = this;

  if (calendarView.classList.contains("hidden")) {
     
      calendarView.classList.remove("hidden");
      taskView.classList.add("hidden");
      icon.classList.remove("flip-image"); // Reset image flip
      buttonText.textContent = "Show tasks for months";
  } else {
     
      calendarView.classList.add("hidden");
      taskView.classList.remove("hidden");
      icon.classList.add("flip-image"); // Flip image
      buttonText.textContent = "Show tasks for months";
  }
});