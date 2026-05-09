// re.arche

// Dashboard card — data per project
(function () {
  const data = [
    {
      rev: '$28.6M', revD: '▲ 12.5%',
      users: '24,531', usersD: '▲ 8.1%',
      path: 'M0 44 C22 42 38 36 58 30 C78 24 92 36 112 26 C132 16 148 24 168 14 C188 4 202 10 222 6 C242 2 260 4 280 2'
    },
    {
      rev: '$4.2M',  revD: '▲ 31.2%',
      users: '8,847', usersD: '▲ 22.4%',
      path: 'M0 49 C18 47 36 46 56 42 C76 38 92 40 112 32 C132 24 148 28 168 18 C188 8 204 11 224 6 C244 2 262 3 280 2'
    },
    {
      rev: '$1.8M',  revD: '▲ 58.3%',
      users: '3,210', usersD: '▲ 41.7%',
      path: 'M0 51 C16 50 32 49 52 46 C72 43 90 44 110 37 C130 29 146 32 166 21 C186 10 202 13 222 7 C242 3 261 1 280 0'
    },
    {
      rev: '$12.1M', revD: '▲ 7.8%',
      users: '15,620', usersD: '▲ 5.2%',
      path: 'M0 40 C22 38 38 36 58 32 C78 28 92 32 112 24 C132 18 148 22 168 16 C188 10 202 12 222 8 C242 5 260 6 280 4'
    },
    {
      rev: '$890K',  revD: '▲ 94.1%',
      users: '1,204', usersD: '▲ 76.8%',
      path: 'M0 52 C14 51 28 50 48 48 C68 46 86 47 106 41 C126 33 142 37 162 25 C182 13 198 15 218 8 C238 3 260 1 280 0'
    }
  ];

  const items    = document.querySelectorAll('.project');
  const card     = document.querySelector('.card');
  if (!card || !items.length) return;

  const revVal    = card.querySelector('.stat:nth-child(1) .stat-val');
  const revDelta  = card.querySelector('.stat:nth-child(1) .stat-delta');
  const usersVal  = card.querySelector('.stat:nth-child(2) .stat-val');
  const usersDelta = card.querySelector('.stat:nth-child(2) .stat-delta');
  const paths     = card.querySelectorAll('.card-chart path');

  function applyData(d) {
    revVal.textContent     = d.rev;
    revDelta.textContent   = d.revD;
    usersVal.textContent   = d.users;
    usersDelta.textContent = d.usersD;
    if (paths[0]) paths[0].setAttribute('d', d.path + ' L280 52 L0 52 Z');
    if (paths[1]) paths[1].setAttribute('d', d.path);
  }

  function swapCard(d) {
    card.classList.add('card--updating');
    setTimeout(() => {
      applyData(d);
      card.classList.remove('card--updating');
    }, 160);
  }

  let resetTimer;
  const defaultData = data[0];

  items.forEach((item, i) => {
    item.addEventListener('mouseenter', () => {
      clearTimeout(resetTimer);
      swapCard(data[i]);
    });
    item.addEventListener('focus', () => {
      clearTimeout(resetTimer);
      swapCard(data[i]);
    });
    item.addEventListener('mouseleave', () => {
      resetTimer = setTimeout(() => swapCard(defaultData), 500);
    });
    item.addEventListener('blur', () => {
      resetTimer = setTimeout(() => swapCard(defaultData), 500);
    });
  });
}());
