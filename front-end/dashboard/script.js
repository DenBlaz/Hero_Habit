document.addEventListener("DOMContentLoaded", () => {
    const daysSection = document.getElementById("days-section");
    const arrowButton = document.getElementById("arrow-btn");

    let showingWeekdays = true;

    arrowButton.addEventListener("click", (e) => {
        e.preventDefault();

        if (showingWeekdays) {
            daysSection.innerHTML = `
    <button class="active-day rounded">Fri</button>
    <button class="day rounded">Sat</button>
    <button class="day rounded">Sun</button>
    <button class="a-month rounded">Tasks for month</button><!-- should redirect to tasks for month page-->
    <!-- deleted "blank div" -->
    <button class="other" id="arrow-btn">
      <img src="arrow2.svg" />
    </button>
  `;
        } else {
            daysSection.innerHTML = `
    <button class="active-day rounded">Mon</button>
    <button class="day rounded">Tue</button>
    <button class="day rounded">Wed</button>
    <button class="day rounded">Thu</button>
    <button class="other" id="arrow-btn">
      <img src="arrow1.svg"  "/>
    </button>
  `;
        }

        assignArrowClick();
        showingWeekdays = !showingWeekdays;
    });

    function assignArrowClick() {
        const newArrowButton = document.getElementById("arrow-btn");
        newArrowButton.addEventListener("click", (e) => {
            e.preventDefault();
            arrowButton.click();
        });
    }
});

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


