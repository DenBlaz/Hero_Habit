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

function showTasks(day) {
    // Hide all task sections
    const taskSections = document.querySelectorAll('.Mon-tasks, .Tue-tasks, .Wed-tasks, .Thu-tasks, .Fri-tasks, .Sat-tasks, .Sun-tasks');
    taskSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the task section for the selected day
    const selectedDayTasks = document.querySelector(`.${day}-tasks`);
    if (selectedDayTasks) {
        selectedDayTasks.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".days-section button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const activeButton = document.querySelector(".active-day");

            if (activeButton) {
                activeButton.classList.remove("active-day");
                activeButton.classList.add("day");
            }
            this.classList.remove("day");
            this.classList.add("active-day");
        });
    });
});
