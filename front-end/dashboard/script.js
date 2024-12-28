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
        <div class="blank"></div>
        <a class="other" href="#" id="arrow-btn">
          <img src="images/icons/arrow2.svg" alt="arrow" />
        </a>
      `;
        } else {

            daysSection.innerHTML = `
        <button class="active-day rounded">Mon</button>
        <button class="day rounded">Tue</button>
        <button class="day rounded">Wed</button>
        <button class="day rounded">Thu</button>
        <a class="other" href="#" id="arrow-btn">
          <img src="images/icons/arrow1.svg" alt="arrow" "/>
        </a>
      `;}


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
// JavaScript to toggle content display based on list item clicks

//Davyd's code:
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