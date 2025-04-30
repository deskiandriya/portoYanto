
document.getElementById('modeToggle').addEventListener('change', function () {
  document.body.classList.toggle('light-mode');
  document.querySelector('.mode-label').textContent = this.checked ? 'LIGHT' : 'DARK';
});
