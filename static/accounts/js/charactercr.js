const buttons = document.querySelectorAll('.options-button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    
    buttons.forEach((btn) => {
      btn.classList.remove('pink', 'green', 'blue');
    });

    
    if (button.classList.contains('pink-btn')) {
      button.classList.add('pink');
    } else if (button.classList.contains('green-btn')) {
      button.classList.add('green');
    } else if (button.classList.contains('blue-btn')) {
      button.classList.add('blue');
    }
  });
});

const gender = document.querySelectorAll('.options-gender');

gender.forEach((button) => {
  button.addEventListener('click', () => {
    
    gender.forEach((btn) => {
      btn.classList.remove('purple');
    });

    
    if (button.classList.contains('male-btn')) {
      button.classList.add('purple');
    } else if (button.classList.contains('female-btn')) {
      button.classList.add('purple');
    }
  });
});