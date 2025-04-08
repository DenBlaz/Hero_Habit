// Dynamically place tasks in the grid
document.addEventListener('DOMContentLoaded', function () {
    // Define time slots and their corresponding hours (for calculation)
    const timeSlots = {
      '9 am': 9,
      '10 am': 10,
      '11 am': 11,
      '12 pm': 12,
      '1 pm': 13,
      '2 pm': 14
    };
  
    // Get all daily tasks from the template
    const tasks = [
      {% for task in daily_tasks %}
      {
        title: "{{ task.title }}",
        start_time: "{{ task.start_time|time:'H:i' }}",
        finish_time: "{{ task.finish_time|time:'H:i' }}",
        characteristic: "{{ task.characteristic }}",
        due_date: "{{ task.due_date|date:'d' }}"
      },
      {% endfor %}
    ];
  
    // Place each task in the correct column and time slot
    tasks.forEach(task => {
      // Find the column for the task's due date
      const dayColumn = document.querySelector(`.day-column[data-day="${task.due_date}"]`);
      if (!dayColumn) return; // Skip if no matching day
  
      // Calculate start and end hours
      const startHour = parseInt(task.start_time.split(':')[0]);
      const startMinute = parseInt(task.start_time.split(':')[1]);
      const endHour = parseInt(task.finish_time.split(':')[0]);
      const endMinute = parseInt(task.finish_time.split(':')[1]);
  
      // Calculate the top position and height of the task block
      const slotHeight = 60; // Height of each time slot in pixels
      const startPosition = (startHour - 9) * slotHeight + (startMinute / 60) * slotHeight;
      const duration = (endHour + endMinute / 60) - (startHour + startMinute / 60);
      const height = duration * slotHeight;
  
      // Create the task block
      const taskBlock = document.createElement('div');
      taskBlock.classList.add('task-block');
      if (task.characteristic === 'Creativity') {
        taskBlock.classList.add('pink-bar');
      } else if (task.characteristic === 'Strength') {
        taskBlock.classList.add('green-bar');
      } else if (task.characteristic === 'Intelligence') {
        taskBlock.classList.add('blue-bar');
      }
  
      // Add task details
      taskBlock.innerHTML = `
        <p class="semi-bold font12px">${task.title}</p>
        <p class="font10px">${task.start_time} - ${task.finish_time}</p>
      `;
  
      // Set position and height
      taskBlock.style.top = `${startPosition}px`;
      taskBlock.style.height = `${height}px`;
  
      // Append to the day column
      dayColumn.appendChild(taskBlock);
    });
  });