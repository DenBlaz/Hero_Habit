document.addEventListener("DOMContentLoaded", function () {
    // Modal logic
    const modal = document.getElementById("profile-modal");
    const openModalBtn = document.getElementById("open-modal");

    if (modal && openModalBtn) {
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
    } else {
        console.error("Modal or openModalBtn not found in the DOM");
    }

    // Settings panel logic
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

    if (profileOption && passwordOption && introOption && profileSection && passwordSection && introSection) {
        // Initially show 'Edit Profile' section
        profileOption.classList.add("active");
        profileSection.style.display = "block";
        passwordSection.style.display = "none";
        introSection.style.display = "none";

        // Toggle Between Profile, Password, and Introduction Sections
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
    } else {
        console.error("Settings panel elements not found in the DOM");
    }

    // Open/Close Settings Panel
    if (toggleIcon && closeIcon && panel && overlay) {
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
    } else {
        console.error("Toggle panel elements not found in the DOM");
    }

    // Dynamic Pie Chart Logic
    const pieChart = document.querySelector(".piechart");
    if (pieChart) {
        // Get the values from the data attributes
        const creativity = parseInt(pieChart.dataset.creativity) || 0;
        const strength = parseInt(pieChart.dataset.strength) || 0;
        const intelligence = parseInt(pieChart.dataset.intelligence) || 0;

        // Calculate the total
        const total = creativity + strength + intelligence;

        // Calculate the angles for each segment (in degrees)
        let creativityAngle = 0;
        let strengthAngle = 0;
        let intelligenceAngle = 0;

        if (total > 0) {
            creativityAngle = (creativity / total) * 360;
            strengthAngle = (strength / total) * 360;
            intelligenceAngle = (intelligence / total) * 360;
        }

        // Calculate the cumulative angles for the conic-gradient
        const creativityEnd = creativityAngle;
        const strengthEnd = creativityEnd + strengthAngle;
        const intelligenceEnd = strengthEnd + intelligenceAngle; // Should be 360, but included for clarity

        // Define the colors
        const creativityColor = "#fbb6e0"; // Pink
        const strengthColor = "#9ffbb6"; // Green
        const intelligenceColor = "#b6e0fb"; // Blue

        // Apply the conic-gradient dynamically
        pieChart.style.backgroundImage = `conic-gradient(
            ${intelligenceColor} 0deg ${creativityEnd}deg,
            ${strengthColor} ${creativityEnd}deg ${strengthEnd}deg,
            ${creativityColor} ${strengthEnd}deg 360deg
        )`;
    } else {
        console.error("Pie chart element not found in the DOM");
    }

    // Dynamic Weekly Chart Logic
    const bars = document.querySelectorAll(".bar");
    const weeklyData = {
        monday: Number("{{ monday }}") || 0,
        tuesday: Number("{{ tuesday }}") || 0,
        wednesday: Number("{{ wednesday }}") || 0,
        thursday: Number("{{ thursday }}") || 0,
        friday: Number("{{ friday }}") || 0,
        saturday: Number("{{ saturday }}") || 0,
        sunday: Number("{{ sunday }}") || 0
    };

    const fixedMax = 10;

    if (bars.length > 0) {
        bars.forEach(bar => {
            const day = bar.dataset.day;
            const tasks = weeklyData[day] || 0;
            const heightPercent = (tasks / fixedMax) * 100;
            bar.style.setProperty('--height', `${Math.min(heightPercent, 100)}%`);
        });
    } else {
        console.error("Bar elements not found in the DOM");
    }
});