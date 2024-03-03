const letter = document.querySelectorAll('#_letters #_letter');

letter.forEach((letter) => {
  letter.addEventListener('click', () => {
    letter.classList.toggle('active');
  });
});
