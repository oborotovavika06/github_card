const root = document.querySelector(':root');
const themeToggleButton = document.getElementById('headerSwitch');
const themeLabel = document.getElementById('themeLabel');

themeToggleButton.addEventListener('click', () => {
  root.classList.toggle('dark');

  if (themeLabel.textContent === 'DARK') {
    themeLabel.textContent = 'LIGHT';
  } else {
    themeLabel.textContent = 'DARK';
  }
});