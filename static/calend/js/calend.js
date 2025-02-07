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

//new
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