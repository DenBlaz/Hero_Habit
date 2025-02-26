document.getElementById("saveTask").addEventListener("click", async () => {
    const title = document.querySelector("input[name='title']").value.trim();
    const description = document.querySelector("input[name='description']").value.trim();
    const entered_date = document.querySelector("input[name='entered_date']").value;
    const start_time = document.querySelector("input[name='start_time']").value;
    const finish_time = document.querySelector("input[name='finish_time']").value;

    const selectedCategory = document.querySelector(".change-stats .chosen");
    const category = selectedCategory ? selectedCategory.getAttribute("data-category") : null;

    if (!title || !entered_date || !start_time || !finish_time || !category) {
        alert("Please fill in all required fields.");
        return;
    }

    const taskData = {
        title,
        description,
        entered_date,
        start_time,
        finish_time,
        category
    };

    try {
        const response = await fetch("/calend/api/daily-tasks/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Task created successfully!");
            document.querySelector("input[name='title']").value = "";
            document.querySelector("input[name='description']").value = "";
            document.querySelector("input[name='entered_date']").value = "";
            document.querySelector("input[name='start_time']").value = "";
            document.querySelector("input[name='finish_time']").value = "";

            // Закрываем форму
            document.getElementById("addTaskForm").style.display = "none";
        } else {
            alert("Error: " + data.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
});
