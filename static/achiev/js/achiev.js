document.addEventListener("DOMContentLoaded", function() {
  const achievements = document.querySelectorAll('.achievement');
  
  achievements.forEach(achievement => {
      if (achievement.classList.contains('achieved')) {
          const checkMark = achievement.querySelector('.check-mark');
          checkMark.style.display = 'block';
      }
  });
});