function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');

document.getElementById("saveTask").addEventListener("click", async () => {
    const title = document.querySelector("input[name='title']").value.trim();
    const description = document.querySelector("input[name='description']").value.trim();
    const entered_date = document.querySelector("input[name='entered_date']").value;
    const start_time = document.querySelector("input[name='start_time']").value;
    const finish_time = document.querySelector("input[name='finish_time']").value;



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
    };

    try {
        const response = await fetch("/calendar/api/daily-tasks/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken, 
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

            document.getElementById("addTaskForm").style.display = "none";
        } else {
            alert("Error: " + data.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
});
