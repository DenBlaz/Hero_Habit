
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
    const introOption = document.getElementById("Introduction");

    const profileSection = document.querySelector(".settings-profile-usage");
    const passwordSection = document.querySelector(".settings-change-password");
    const introSection = document.querySelector(".settings-introduction");

    // Initially show 'Change Password' section
    profileOption.classList.add("active");
    profileSection.style.display = "block";
    passwordSection.style.display = "none";
    introSection.style.display = "none";

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
        introOption.classList.remove("active");
    
        profileSection.style.display = "block";
        passwordSection.style.display = "none";
        introSection.style.display = "none";
    });
    
    passwordOption.addEventListener("click", function () {
        passwordOption.classList.add("active");
        profileOption.classList.remove("active");
        introOption.classList.remove("active");
    
        profileSection.style.display = "none";
        passwordSection.style.display = "block";
        introSection.style.display = "none";
    });
    
    introOption.addEventListener("click", function () {
        introOption.classList.add("active");
        profileOption.classList.remove("active");
        passwordOption.classList.remove("active");
    
        profileSection.style.display = "none";
        passwordSection.style.display = "none";
        introSection.style.display = "block";
    });
});