document.getElementById("saveTask").addEventListener("click", async () => {
    const title = document.querySelector("input[name='title']").value;
    const description = document.querySelector("input[name='description']").value;
    const entered_date = document.querySelector("input[name='entered_date']").value;
    const start_time = document.querySelector("input[name='start_time']").value;
    const finish_time = document.querySelector("input[name='finish_time']").value;

    const selectedCategory = document.querySelector(".change-stats .chosen");
    const category = selectedCategory ? selectedCategory.getAttribute("data-category") : null;

    const taskData = {
        title,
        description,
        entered_date,
        start_time,
        finish_time,
        category
    };

    try {
        const response = await fetch("/api/daily-tasks/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Task created successfully!");
            document.getElementById("addTaskForm").reset();
        } else {
            alert("Error: " + data.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
});
