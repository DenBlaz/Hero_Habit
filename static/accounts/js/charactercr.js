const buttons = document.querySelectorAll('.options-button');
const genderButtons = document.querySelectorAll('.options-gender');
const characteristicInput = document.getElementById('characteristicInput');
const genderInput = document.getElementById('genderInput');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('pink', 'green', 'blue'));

    if (button.classList.contains('pink-btn')) button.classList.add('pink');
    if (button.classList.contains('green-btn')) button.classList.add('green');
    if (button.classList.contains('blue-btn')) button.classList.add('blue');

    characteristicInput.value = button.dataset.value;
  });
});

genderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    genderButtons.forEach((btn) => btn.classList.remove('purple'));

    button.classList.add('purple');
    genderInput.value = button.dataset.value;
  });
});