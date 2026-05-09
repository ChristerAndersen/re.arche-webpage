// re.arche

// Project hover → card atmosphere
(function () {
  const items = document.querySelectorAll('.project');
  const card  = document.querySelector('.card');
  if (!card) return;

  let timer;
  function pulse() {
    clearTimeout(timer);
    card.classList.add('card--pulse');
    timer = setTimeout(() => card.classList.remove('card--pulse'), 300);
  }

  items.forEach(item => {
    item.addEventListener('mouseenter', pulse);
    item.addEventListener('focus',      pulse);
  });
}());
