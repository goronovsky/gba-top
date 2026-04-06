// ===== GAMES DATA =====
const games = [
  { rank: 1, title: "The Legend of Zelda: A Link to the Past", year: 2002, developer: "Nintendo", genres: ["Action", "Adventure"], rating: 95, desc: "Классика SNES в портативном формате с новым мультиплеерным режимом Four Swords. Путешествие между светлым и тёмным мирами Хайрула." },
  { rank: 2, title: "Tony Hawk's Pro Skater 2", year: 2001, developer: "Vicarious Visions", genres: ["Sports"], rating: 95, desc: "Первая полноценная 3D-скейт игра на портативке. Легендарный геймплей, культовые уровни и невероятная техническая реализация для GBA." },
  { rank: 3, title: "Super Mario Advance 4: Super Mario Bros. 3", year: 2003, developer: "Nintendo", genres: ["Platformer"], rating: 94, desc: "Дефинитивная версия Mario Bros. 3 с e-Reader уровнями. Восемь миров, безумные пауэрапы и классический платформинг Марио." },
  { rank: 4, title: "Mario Kart: Super Circuit", year: 2001, developer: "Intelligent Systems", genres: ["Racing"], rating: 93, desc: "40 трасс безумных гонок с оружием. Классический Mario Kart на ладони — мультиплеер до 4 игроков с одного картриджа." },
  { rank: 5, title: "Advance Wars", year: 2001, developer: "Intelligent Systems", genres: ["Strategy"], rating: 92, desc: "Пошаговая тактика, ставшая эталоном жанра. Харизматичные командиры, продуманный баланс и бесконечная реиграбельность." },
  { rank: 6, title: "Metroid Fusion", year: 2002, developer: "Nintendo R&D1", genres: ["Action", "Metroidvania"], rating: 92, desc: "Самус против X-паразитов. Напряжённый sci-fi хоррор с атмосферным исследованием и одной из лучших историй в серии." },
  { rank: 7, title: "Pokémon Emerald", year: 2004, developer: "Game Freak", genres: ["RPG"], rating: 76, desc: "Улучшенная версия Ruby/Sapphire с Battle Frontier. Регион Хоэнн, 386 покемонов и бесконечные часы послесюжетного контента." },
  { rank: 8, title: "Final Fantasy VI Advance", year: 2006, developer: "Square Enix", genres: ["RPG"], rating: 92, desc: "Один из величайших RPG всех времён в портативном формате. Эмоциональная история, глубокие персонажи и дополнительные подземелья." },
  { rank: 9, title: "Castlevania: Aria of Sorrow", year: 2003, developer: "Konami", genres: ["Action", "Metroidvania"], rating: 91, desc: "Лучшая портативная Castlevania. Система Тактических Душ, исследование замка Дракулы и геймплей на уровне Symphony of the Night." },
  { rank: 10, title: "Golden Sun", year: 2001, developer: "Camelot", genres: ["RPG"], rating: 91, desc: "Эпический JRPG с системой Djinn и псинергией. Впечатляющая графика, масштабные битвы и мир, полный загадок." },
  { rank: 11, title: "Super Mario World: Super Mario Advance 2", year: 2002, developer: "Nintendo", genres: ["Platformer"], rating: 92, desc: "Культовый Super Mario World с SNES. Остров Динозавров, Йоши, 96 выходов и секреты, которые можно искать годами." },
  { rank: 12, title: "Fire Emblem", year: 2003, developer: "Intelligent Systems", genres: ["Tactical RPG", "Strategy"], rating: 88, desc: "Первая Fire Emblem на Западе. Тактические бои с перманентной смертью, харизматичные персонажи и захватывающий сюжет." },
  { rank: 13, title: "The Legend of Zelda: The Minish Cap", year: 2004, developer: "Capcom / Flagship", genres: ["Action", "Adventure"], rating: 89, desc: "Линк уменьшается до размера насекомого. Очаровательный мир, изобретательные паззлы и фирменное качество серии Zelda." },
  { rank: 14, title: "Metroid: Zero Mission", year: 2004, developer: "Nintendo R&D1", genres: ["Action", "Metroidvania"], rating: 89, desc: "Переосмысление оригинальной Metroid. Новый контент, улучшенное управление и один из лучших метроидваний на портативке." },
  { rank: 15, title: "Advance Wars 2: Black Hole Rising", year: 2003, developer: "Intelligent Systems", genres: ["Strategy"], rating: 90, desc: "Продолжение с новыми CO и улучшенным балансом. Ещё больше тактических возможностей и новая кампания против Чёрной Дыры." },
  { rank: 16, title: "Wario Land 4", year: 2001, developer: "Nintendo R&D1", genres: ["Platformer"], rating: 87, desc: "Нелинейные уровни с уникальным дизайном. Качество над количеством — каждый уровень как маленький шедевр." },
  { rank: 17, title: "Fire Emblem: The Sacred Stones", year: 2004, developer: "Intelligent Systems", genres: ["Tactical RPG", "Strategy"], rating: 86, desc: "Близнецы Эйрика и Эфраим защищают родину. Прокачка классов, разветвлённый сюжет и отполированная тактическая система." },
  { rank: 18, title: "Final Fantasy Tactics Advance", year: 2003, developer: "Square Enix", genres: ["Tactical RPG", "Strategy"], rating: 87, desc: "Тактический RPG в мире Final Fantasy. Система судей, 300+ миссий и глубокая система классов с уникальными способностями." },
  { rank: 19, title: "Super Mario Advance 3: Yoshi's Island", year: 2002, developer: "Nintendo", genres: ["Platformer"], rating: 91, desc: "Уникальный арт-стиль, яйцемётный геймплей Йоши и глубокое исследование уровней. Платформер с душой и характером." },
  { rank: 20, title: "Pokémon FireRed / LeafGreen", year: 2004, developer: "Game Freak", genres: ["RPG"], rating: 81, desc: "Ремейки оригинальных Red/Blue с графикой Gen III. Ностальгическое путешествие по Канто с современными механиками." },
  { rank: 21, title: "Golden Sun: The Lost Age", year: 2002, developer: "Camelot", genres: ["RPG"], rating: 86, desc: "Масштабное продолжение Golden Sun. Перенос сохранений, морские путешествия и одна из самых длинных RPG на GBA." },
  { rank: 22, title: "Castlevania: Circle of the Moon", year: 2001, developer: "Konami", genres: ["Action", "Metroidvania"], rating: 91, desc: "Первая портативная Castlevania в стиле Symphony of the Night. Система карт DSS и мрачная атмосфера замка Дракулы." },
  { rank: 23, title: "Mario & Luigi: Superstar Saga", year: 2003, developer: "AlphaDream", genres: ["RPG"], rating: 90, desc: "Братья Марио в кооперативном RPG-приключении. Юмор, изобретательные бои и Бобовое Королевство — одна из лучших RPG на GBA." },
  { rank: 24, title: "Mega Man Zero", year: 2002, developer: "Inti Creates", genres: ["Action", "Platformer"], rating: 82, desc: "Хардкорный экшн-платформер в мире Mega Man. Zero возвращается в мрачном будущем с быстрым боевым геймплеем." },
  { rank: 25, title: "Kirby & The Amazing Mirror", year: 2004, developer: "HAL Laboratory", genres: ["Platformer", "Adventure"], rating: 77, desc: "Нелинейный Kirby в стиле Metroidvania. Четыре Кирби исследуют Зеркальный Мир — отлично подходит для мультиплеера." },
  { rank: 26, title: "Harvest Moon: Friends of Mineral Town", year: 2003, developer: "Marvelous", genres: ["RPG"], rating: 83, desc: "Фермерский симулятор-классика на GBA. Выращивание урожая, романтика и жизнь в уютном городке — сотни часов контента." },
  { rank: 27, title: "Sonic Advance", year: 2001, developer: "Dimps", genres: ["Platformer"], rating: 83, desc: "Sonic возвращается к 2D-корням. Четыре играбельных персонажа, скоростной геймплей и классический дизайн уровней." },
  { rank: 28, title: "Mega Man Battle Network 3", year: 2003, developer: "Capcom", genres: ["RPG", "Action"], rating: 83, desc: "Лучшая часть серии Battle Network. Уникальный микс RPG и карточных боёв в киберпространстве с глубокой системой чипов." },
  { rank: 29, title: "Astro Boy: Omega Factor", year: 2004, developer: "Treasure", genres: ["Action"], rating: 86, desc: "Шедевр от Treasure по мотивам манги Тэдзуки. Потрясающая графика, огромные боссы и геймплей между Gunstar Heroes и Castlevania." },
  { rank: 30, title: "Drill Dozer", year: 2005, developer: "Game Freak", genres: ["Action", "Platformer"], rating: 81, desc: "Уникальный платформер от создателей Pokémon. Бур как основная механика, картридж с вибрацией и отличный дизайн уровней." }
];

// ===== STATE =====
let activeGenre = 'all';
let activeRating = 'all';
let activeSort = 'rank';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  buildGenreFilters();
  renderGames();
  setupFilters();
  setupThemeToggle();
  setupResetButton();
  setupFiltersToggle();
});

// ===== BUILD GENRE CHIPS =====
function buildGenreFilters() {
  const allGenres = new Set();
  games.forEach(g => g.genres.forEach(genre => allGenres.add(genre)));
  const container = document.getElementById('genreFilters');
  const sorted = [...allGenres].sort();
  sorted.forEach(genre => {
    const btn = document.createElement('button');
    btn.className = 'chip';
    btn.dataset.genre = genre;
    btn.textContent = genreRu(genre);
    container.appendChild(btn);
  });
}

// ===== GENRE TRANSLATIONS =====
function genreRu(genre) {
  const map = {
    'Action': 'Экшн',
    'RPG': 'RPG',
    'Platformer': 'Платформер',
    'Strategy': 'Стратегия',
    'Racing': 'Гонки',
    'Sports': 'Спорт',
    'Adventure': 'Приключения',
    'Puzzle': 'Паззл',
    'Metroidvania': 'Метроидвания',
    'Tactical RPG': 'Тактика'
  };
  return map[genre] || genre;
}

// ===== RENDER GAMES =====
function renderGames() {
  const grid = document.getElementById('gamesGrid');
  const noResults = document.getElementById('noResults');

  let filtered = games.filter(g => {
    if (activeGenre !== 'all' && !g.genres.includes(activeGenre)) return false;
    if (activeRating !== 'all' && g.rating < parseInt(activeRating)) return false;
    return true;
  });

  // Sort
  if (activeSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (activeSort === 'year') {
    filtered.sort((a, b) => a.year - b.year);
  } else if (activeSort === 'name') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    filtered.sort((a, b) => a.rank - b.rank);
  }

  // Update count
  document.getElementById('gameCount').textContent = filtered.length + ' ' + pluralize(filtered.length);

  // Update filters summary (if collapsed)
  if (typeof updateFiltersSummary === 'function') updateFiltersSummary();

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  grid.innerHTML = filtered.map((game, i) => {
    const scoreClass = game.rating >= 92 ? 'score-excellent' : game.rating >= 88 ? 'score-great' : 'score-good';
    const fillWidth = ((game.rating - 70) / 30) * 100;

    return `
      <article class="game-card ${scoreClass}" style="animation-delay:${i * 40}ms">
        <div class="card-header">
          <span class="card-rank">#${game.rank}</span>
          <div class="card-meta-score">
            <div class="score-bar">
              <div class="score-fill" style="width:${fillWidth}%"></div>
            </div>
            <span class="score-value">${game.rating}</span>
          </div>
        </div>
        <h2 class="card-title">${game.title}</h2>
        <div class="card-info">
          <span class="card-year">${game.year}</span>
          <span class="card-divider"></span>
          <span class="card-developer">${game.developer}</span>
        </div>
        <div class="card-genres">
          ${game.genres.map(g => `<span class="genre-tag" data-genre="${g}">${genreRu(g)}</span>`).join('')}
        </div>
        <p class="card-desc">${game.desc}</p>
      </article>
    `;
  }).join('');
}

// ===== PLURALIZE =====
function pluralize(n) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return 'игра';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'игры';
  return 'игр';
}

// ===== SETUP FILTERS =====
function setupFilters() {
  // Genre filters
  document.getElementById('genreFilters').addEventListener('click', e => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    document.querySelectorAll('#genreFilters .chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    activeGenre = btn.dataset.genre;
    renderGames();
  });

  // Rating filters
  document.getElementById('ratingFilters').addEventListener('click', e => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    document.querySelectorAll('#ratingFilters .chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    activeRating = btn.dataset.rating;
    renderGames();
  });

  // Sort filters
  document.getElementById('sortFilters').addEventListener('click', e => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    document.querySelectorAll('#sortFilters .chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    activeSort = btn.dataset.sort;
    renderGames();
  });
}

// ===== RESET =====
function setupResetButton() {
  document.getElementById('resetFilters').addEventListener('click', () => {
    activeGenre = 'all';
    activeRating = 'all';
    activeSort = 'rank';
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    document.querySelector('[data-genre="all"]').classList.add('active');
    document.querySelector('[data-rating="all"]').classList.add('active');
    document.querySelector('[data-sort="rank"]').classList.add('active');
    renderGames();
  });
}

// ===== THEME TOGGLE =====
function setupThemeToggle() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);
  updateToggleIcon(toggle, theme);

  toggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    toggle.setAttribute('aria-label', 'Переключить на ' + (theme === 'dark' ? 'светлую' : 'тёмную') + ' тему');
    updateToggleIcon(toggle, theme);
  });
}

function updateToggleIcon(btn, theme) {
  btn.innerHTML = theme === 'dark'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

// ===== FILTERS TOGGLE =====
function setupFiltersToggle() {
  const toggle = document.getElementById('filtersToggle');
  const content = document.getElementById('filtersContent');
  let isExpanded = true;

  // Auto-collapse on mobile
  if (window.innerWidth < 768) {
    isExpanded = false;
    content.classList.add('collapsed');
    toggle.setAttribute('aria-expanded', 'false');
    updateFiltersSummary();
  }

  toggle.addEventListener('click', () => {
    isExpanded = !isExpanded;
    toggle.setAttribute('aria-expanded', String(isExpanded));
    if (isExpanded) {
      content.classList.remove('collapsed');
    } else {
      content.classList.add('collapsed');
    }
    updateFiltersSummary();
  });
}

// ===== ACTIVE FILTERS SUMMARY =====
function updateFiltersSummary() {
  const summary = document.getElementById('filtersSummary');
  const toggle = document.getElementById('filtersToggle');
  const isCollapsed = toggle.getAttribute('aria-expanded') === 'false';

  if (!isCollapsed) {
    summary.innerHTML = '';
    return;
  }

  const tags = [];
  if (activeGenre !== 'all') {
    tags.push(genreRu(activeGenre));
  }
  if (activeRating !== 'all') {
    tags.push(activeRating + '+');
  }
  const sortLabels = { rank: 'По рангу', rating: 'По рейтингу', year: 'По году', name: 'По имени' };
  if (activeSort !== 'rank') {
    tags.push(sortLabels[activeSort]);
  }

  if (tags.length === 0) {
    summary.innerHTML = '';
  } else {
    summary.innerHTML = tags.map(t => '<span class="summary-tag">' + t + '</span>').join('');
  }
}
