// ===== GAMES DATA =====
const games30 = [
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

const games100 = [
  ...games30,
  { rank: 31, title: "WarioWare Inc: Mega Microgames", year: 2003, developer: "Nintendo R&D1", genres: ["Action", "Puzzle"], rating: 89, desc: "200+ микроигр по 5 секунд каждая. Безумный темп, абсурдный юмор и одна из самых оригинальных игр на GBA." },
  { rank: 32, title: "Tactics Ogre: The Knight of Lodis", year: 2002, developer: "Quest", genres: ["Tactical RPG", "Strategy"], rating: 88, desc: "Изометрическая тактика с разветвлённым сюжетом. Глубокая система классов и один из лучших тактических RPG на портативке." },
  { rank: 33, title: "WarioWare: Twisted", year: 2005, developer: "Nintendo R&D1", genres: ["Action", "Puzzle"], rating: 88, desc: "Гироскоп в картридже — вращай GBA для управления. 200+ новых микроигр с уникальным управлением." },
  { rank: 34, title: "Bomberman Tournament", year: 2001, developer: "Hudson Soft", genres: ["Action", "Puzzle"], rating: 88, desc: "Классический Bomberman с RPG-элементами. Режим истории с приключенческим геймплеем и мультиплеер на 4 игрока." },
  { rank: 35, title: "Castlevania: Harmony of Dissonance", year: 2002, developer: "Konami", genres: ["Action", "Metroidvania"], rating: 87, desc: "Второй метроидвания Castlevania на GBA. Два параллельных замка, система книг заклинаний и быстрый геймплей." },
  { rank: 36, title: "Tony Hawk's Pro Skater 3", year: 2002, developer: "Vicarious Visions", genres: ["Sports"], rating: 90, desc: "Ещё больше про-скейтеров, новые трюки и уровни. Продолжение легендарной серии скейтбординга на GBA." },
  { rank: 37, title: "Final Fantasy V Advance", year: 2006, developer: "Square Enix", genres: ["RPG"], rating: 86, desc: "Лучшая система классов в серии Final Fantasy. Новый контент и улучшенный перевод для портативной версии." },
  { rank: 38, title: "Final Fantasy IV Advance", year: 2005, developer: "Square Enix", genres: ["RPG"], rating: 85, desc: "Классика Final Fantasy с новыми подземельями и выбором персонажей в финале. Лучший способ пройти FFIV портативно." },
  { rank: 39, title: "Final Fantasy I & II: Dawn of Souls", year: 2004, developer: "Square Enix", genres: ["RPG"], rating: 85, desc: "Два классических RPG в одном картридже. Обновлённая графика и дополнительные подземелья для каждой игры." },
  { rank: 40, title: "Rayman Advance", year: 2001, developer: "Ubisoft", genres: ["Platformer"], rating: 85, desc: "Порт великолепного Rayman с ураганным платформингом. 70+ уровней с безупречным дизайном и фирменным юмором." },
  { rank: 41, title: "Super Mario Advance", year: 2001, developer: "Nintendo", genres: ["Platformer"], rating: 84, desc: "Ремейк Super Mario Bros. 2 с улучшенной графикой. Четыре играбельных персонажа и бонусная Mario Bros." },
  { rank: 42, title: "Mario Golf: Advance Tour", year: 2004, developer: "Camelot", genres: ["Sports"], rating: 84, desc: "Гольф с RPG-прокачкой. Турниры, кастомизация персонажа и неожиданно затягивающий геймплей." },
  { rank: 43, title: "Mother 3", year: 2006, developer: "HAL Laboratory", genres: ["RPG"], rating: 84, desc: "Духовный наследник EarthBound. Эмоциональная история, ритмичные бои и одна из лучших RPG-историй на GBA." },
  { rank: 44, title: "Boktai: The Sun Is in Your Hand", year: 2003, developer: "Konami", genres: ["Action", "RPG"], rating: 83, desc: "Солнечный сенсор в картридже — используй реальный солнечный свет против вампиров. Детище Хидео Кодзимы." },
  { rank: 45, title: "Mega Man Zero 3", year: 2004, developer: "Inti Creates", genres: ["Action", "Platformer"], rating: 83, desc: "Вершина серии Zero. Система Cyber Elves, отточенный геймплей и лучший баланс сложности в трилогии." },
  { rank: 46, title: "Rhythm Tengoku", year: 2006, developer: "Nintendo", genres: ["Puzzle"], rating: 83, desc: "Предшественник Rhythm Heaven. Музыкальные мини-игры с идеальным таймингом и неповторимым очарованием." },
  { rank: 47, title: "Kingdom Hearts: Chain of Memories", year: 2004, developer: "Jupiter", genres: ["RPG", "Action"], rating: 82, desc: "Карточная боевая система в мире Disney и Final Fantasy. Мост между KH1 и KH2 с уникальным геймплеем." },
  { rank: 48, title: "Mario vs. Donkey Kong", year: 2004, developer: "NST", genres: ["Platformer", "Puzzle"], rating: 82, desc: "Головоломный платформер в стиле оригинального Donkey Kong. Мини-Марио, хитрые уровни и много контента." },
  { rank: 49, title: "Pokémon Ruby / Sapphire", year: 2003, developer: "Game Freak", genres: ["RPG"], rating: 82, desc: "Третье поколение покемонов открывает Хоэнн. Двойные битвы, способности и конкурсы красоты покемонов." },
  { rank: 50, title: "Klonoa: Empire of Dreams", year: 2001, developer: "Namco", genres: ["Platformer"], rating: 82, desc: "Очаровательный паззл-платформер. Уникальная механика захвата врагов и отличный дизайн уровней." },
  { rank: 51, title: "Mega Man Battle Network 2", year: 2002, developer: "Capcom", genres: ["RPG", "Action"], rating: 81, desc: "Улучшенное продолжение с расширенной системой чипов. Новые вирусы и глубокий сюжет." },
  { rank: 52, title: "Mega Man Zero 4", year: 2005, developer: "Inti Creates", genres: ["Action", "Platformer"], rating: 81, desc: "Финал саги Zero. Система крафта оружия, новые погодные эффекты и достойное завершение серии." },
  { rank: 53, title: "Super Robot Taisen: OG2", year: 2006, developer: "Banpresto", genres: ["Tactical RPG", "Strategy"], rating: 81, desc: "Масштабная тактика с мехами. 40+ пилотируемых роботов и эпические анимации атак." },
  { rank: 54, title: "Mario Tennis: Power Tour", year: 2005, developer: "Camelot", genres: ["Sports"], rating: 81, desc: "Теннис с RPG-элементами. Академия, прокачка навыков и силовые удары — больше чем просто спортивная игра." },
  { rank: 55, title: "Mega Man Battle Network", year: 2001, developer: "Capcom", genres: ["RPG", "Action"], rating: 80, desc: "Начало серии Battle Network. Уникальная боевая система на сетке с коллекционными чипами." },
  { rank: 56, title: "Sonic Advance 2", year: 2003, developer: "Dimps", genres: ["Platformer"], rating: 80, desc: "Ещё быстрее и динамичнее первой части. Новые персонажи, разгонная механика и классический Sonic-дизайн." },
  { rank: 57, title: "F-Zero: Maximum Velocity", year: 2001, developer: "Nintendo EAD", genres: ["Racing"], rating: 80, desc: "Молниеносные гонки на лончевый день GBA. 20 трасс, 10 машин и чистый адреналин на 400+ км/ч." },
  { rank: 58, title: "Gunstar Super Heroes", year: 2005, developer: "Treasure", genres: ["Action"], rating: 80, desc: "Сиквел легендарного Gunstar Heroes. Безумный run-and-gun экшн от мастеров жанра — Treasure." },
  { rank: 59, title: "Ninja Five-O", year: 2003, developer: "Hudson Soft", genres: ["Action"], rating: 80, desc: "Недооценённый экшн-шедевр. Канатная механика, динамичный бой и отличный дизайн уровней." },
  { rank: 60, title: "Pac-Man Collection", year: 2001, developer: "Namco", genres: ["Puzzle"], rating: 79, desc: "Четыре классических Pac-Man в одном картридже. Оригинальный, Super, Plus и Arrangement — полная антология." },
  { rank: 61, title: "Kirby: Nightmare in Dream Land", year: 2002, developer: "HAL Laboratory", genres: ["Platformer"], rating: 79, desc: "Ремейк Kirby's Adventure с обновлённой графикой. Копирование способностей и мультиплеер на 4 игрока." },
  { rank: 62, title: "Yggdra Union", year: 2006, developer: "Sting", genres: ["Tactical RPG", "Strategy"], rating: 78, desc: "Карточная тактика с уникальной системой Union. Глубокий стратегический геймплей и яркий аниме-стиль." },
  { rank: 63, title: "Pokémon Pinball: Ruby & Sapphire", year: 2003, developer: "Jupiter", genres: ["Puzzle"], rating: 76, desc: "Пинбол с покемонами. Два стола, 200 покемонов для поимки и затягивающий аркадный геймплей." },
  { rank: 64, title: "Summon Night: Swordcraft Story", year: 2006, developer: "Flight-Plan", genres: ["RPG", "Action"], rating: 76, desc: "Экшн-JRPG с крафтом оружия. Рукопашные бои в реальном времени и обширная система ковки мечей." },
  { rank: 65, title: "Breath of Fire", year: 2001, developer: "Capcom", genres: ["RPG"], rating: 76, desc: "Порт классической SNES-RPG. Превращение в дракона, рыбалка и путешествие по красивому фэнтезийному миру." },
  { rank: 66, title: "Spider-Man: Mysterio's Menace", year: 2001, developer: "Vicarious Visions", genres: ["Action"], rating: 75, desc: "Один из лучших лицензионных экшнов на GBA. Нелинейные уровни, костюмы и классические злодеи." },
  { rank: 67, title: "Crash Bandicoot: The Huge Adventure", year: 2002, developer: "Vicarious Visions", genres: ["Platformer"], rating: 74, desc: "Crash в 2D-формате на GBA. Классический платформинг с боссами и секретными камнями." },
  { rank: 68, title: "Sonic Advance 3", year: 2004, developer: "Dimps", genres: ["Platformer"], rating: 74, desc: "Командная система с парами персонажей. Разные комбинации открывают уникальные способности." },
  { rank: 69, title: "Metal Slug Advance", year: 2004, developer: "Noise Factory", genres: ["Action"], rating: 73, desc: "Портативный Metal Slug со всеми фирменными элементами. Карточная система и два играбельных персонажа." },
  { rank: 70, title: "Dragon Ball Z: Legacy of Goku II", year: 2003, developer: "Webfoot", genres: ["RPG", "Action"], rating: 73, desc: "Экшн-RPG по арке Cell. Огромное улучшение над первой частью с несколькими играбельными персонажами." },
  { rank: 71, title: "Banjo-Kazooie: Grunty's Revenge", year: 2003, developer: "Rare", genres: ["Platformer", "Adventure"], rating: 73, desc: "Изометрическое приключение Банджо на GBA. Пять миров, мини-игры и фирменный юмор от Rare." },
  { rank: 72, title: "Lunar Legend", year: 2002, developer: "Game Arts", genres: ["RPG"], rating: 72, desc: "Порт культового Lunar: SSSC на GBA. Очаровательный сюжет, аниме-вставки и классический JRPG-геймплей." },
  { rank: 73, title: "Racing Gears Advance", year: 2005, developer: "Orbital Media", genres: ["Racing"], rating: 72, desc: "Гонки с видом сверху в стиле RC Pro-Am. 32 трассы, тюнинг машин и мультиплеер." },
  { rank: 74, title: "Sword of Mana", year: 2003, developer: "Square Enix", genres: ["RPG", "Action"], rating: 71, desc: "Ремейк Final Fantasy Adventure. Экшн-RPG с двумя героями и системой ковки оружия." },
  { rank: 75, title: "Breath of Fire II", year: 2002, developer: "Capcom", genres: ["RPG"], rating: 71, desc: "Продолжение с системой строительства города. Тёмный сюжет, слияние персонажей и глубокий мир." },
  { rank: 76, title: "Mega Man & Bass", year: 2003, developer: "Capcom", genres: ["Action", "Platformer"], rating: 70, desc: "Два играбельных персонажа с уникальными способностями. Классический Mega Man с выбором стиля игры." },
  { rank: 77, title: "Crash Bandicoot 2: N-Tranced", year: 2003, developer: "Vicarious Visions", genres: ["Platformer"], rating: 73, desc: "Продолжение Crash на GBA с новыми уровнями и боссами. Четыре играбельных персонажа и морозные локации." },
  { rank: 78, title: "Super Puzzle Fighter II Turbo", year: 2003, developer: "Capcom", genres: ["Puzzle"], rating: 78, desc: "Паззл-игра во вселенной Street Fighter. Взрывные цепочки, мини-версии бойцов и захватывающий мультиплеер." },
  { rank: 79, title: "Mega Man Battle Network 4", year: 2004, developer: "Capcom", genres: ["RPG", "Action"], rating: 69, desc: "Четвёртая часть Battle Network с турнирной системой. Новые чипы и Dark Chips с необратимыми эффектами." },
  { rank: 80, title: "Shining Soul II", year: 2004, developer: "Nextech", genres: ["RPG", "Action"], rating: 74, desc: "Экшн-RPG с восемью классами персонажей. Мультиплеер на 4 игрока и бесконечный данжен для фанатов жанра." },
  { rank: 81, title: "Car Battler Joe", year: 2002, developer: "Ancient", genres: ["Racing", "RPG"], rating: 72, desc: "Гонки на вооружённых машинах с RPG-прокачкой. Сборка и улучшение авто между боевыми заездами." },
  { rank: 82, title: "Riviera: The Promised Land", year: 2005, developer: "Sting", genres: ["RPG"], rating: 78, desc: "Визуальная новелла с тактическими боями. Уникальная система предметов и трогательная история падшего ангела." },
  { rank: 83, title: "Sigma Star Saga", year: 2005, developer: "WayForward", genres: ["RPG", "Action"], rating: 70, desc: "Гибрид shmup и RPG с неожиданными переключениями жанра. Пилот земли внедряется в ряды пришельцев." },
  { rank: 84, title: "Zone of the Enders: The Fist of Mars", year: 2002, developer: "Sunrise", genres: ["Tactical RPG", "Strategy"], rating: 71, desc: "Тактический RPG во вселенной ZoE. Аниматический стиль, богатый сюжет и бои мехов в пошаговом формате." },
  { rank: 85, title: "Rebelstar: Tactical Command", year: 2005, developer: "Codo Technologies", genres: ["Tactical RPG", "Strategy"], rating: 75, desc: "Духовный наследник X-COM от Джулиана Голлопа. Глубокая тактика, перманентная смерть и борьба с инопланетным вторжением." },
  { rank: 86, title: "Lady Sia", year: 2001, developer: "RFX Interactive", genres: ["Action", "Platformer"], rating: 73, desc: "Экшн-платформер с сильной героиней. Удары мечом, магия и разнообразные боссы в красочном фэнтезийном мире." },
  { rank: 87, title: "Sabre Wulf", year: 2004, developer: "Rare", genres: ["Adventure", "Puzzle"], rating: 72, desc: "Возрождение классики Rare. Исследование джунглей, сбор частей амулета и 250 соединённых экранов." },
  { rank: 88, title: "Kuru Kuru Kururin", year: 2001, developer: "Eighting", genres: ["Puzzle"], rating: 78, desc: "Аркадный паззл с вращающейся палкой. Точное управление, 30 уровней и нарастающая сложность — дзен и боль одновременно." },
  { rank: 89, title: "Iridion II", year: 2003, developer: "Shin'en", genres: ["Action"], rating: 78, desc: "Вертикальный shmup с потрясающей 3D-графикой для GBA. Шесть миров, сложные боссы и техническое совершенство." },
  { rank: 90, title: "Shining Force: Resurrection of the Dark Dragon", year: 2004, developer: "Amusement Vision", genres: ["Tactical RPG", "Strategy"], rating: 76, desc: "Ремейк классической тактики для Mega Drive. Новые персонажи, улучшенный сюжет и пошаговые сражения." },
  { rank: 91, title: "Gradius Galaxies", year: 2001, developer: "Mobile21", genres: ["Action"], rating: 74, desc: "Классический горизонтальный shmup серии Gradius на GBA. Система апгрейдов Викпера и леденящие кровь боссы." },
  { rank: 92, title: "Street Fighter Alpha 3 Upper", year: 2002, developer: "Capcom", genres: ["Action"], rating: 76, desc: "Полноценный файтинг на GBA с 35 персонажами. Три режима игры V, A и X — невероятная работа портирования." },
  { rank: 93, title: "Phantasy Star Collection", year: 2002, developer: "Digital Eclipse", genres: ["RPG"], rating: 70, desc: "Три классических RPG от Sega в одном картридже. Оригинальная трилогия Phantasy Star для любителей ретро-JRPG." },
  { rank: 94, title: "Tales of Phantasia", year: 2006, developer: "Namco Tales", genres: ["RPG", "Action"], rating: 69, desc: "Оригинальная Tales с боевой системой в реальном времени. Исторический RPG, породивший целую серию Tales." },
  { rank: 95, title: "Medabots: Metabee / Rokusho", year: 2002, developer: "Natsume", genres: ["RPG"], rating: 74, desc: "RPG по аниме о боевых роботах. Сборка меда из запчастей, турниры роблинга и дружба между мальчиком и машиной." },
  { rank: 96, title: "Pocky & Rocky with Becky", year: 2001, developer: "Altron", genres: ["Action"], rating: 73, desc: "Кооперативный top-down шутер с японским фольклором. Два игрока, уникальные персонажи и ураган снарядов." },
  { rank: 97, title: "Densetsu no Stafy", year: 2002, developer: "TOSE", genres: ["Platformer"], rating: 72, desc: "Очаровательный подводный платформер про морскую звезду. Простое управление, яркий мир и множество секретов." },
  { rank: 98, title: "The Pinball of the Dead", year: 2002, developer: "Sega", genres: ["Puzzle"], rating: 73, desc: "Пинбол во вселенной House of the Dead. Зомби как мишени, спецудары и мрачная атмосфера аркадного хоррора." },
  { rank: 99, title: "ChuChu Rocket", year: 2001, developer: "Sonic Team", genres: ["Puzzle"], rating: 80, desc: "Паззл-игра про мышей и кошек с бешеным темпом. Многопользовательский хаос до 4 игроков и сотни уровней." },
  { rank: 100, title: "Game & Watch Gallery 4", year: 2002, developer: "Nintendo R&D1", genres: ["Puzzle"], rating: 78, desc: "Коллекция классических Game & Watch мини-игр. Современные и ретро-режимы, галерея истории Nintendo." }
];

// ===== STATE =====
let activeGenre = 'all';
let activeRating = 'all';
let activeSort = 'rank';
let listMode = 30;

// ===== CURRENT GAMES =====
function currentGames() {
  return listMode === 30 ? games30 : games100;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  buildGenreFilters();
  renderGames();
  setupFilters();
  setupThemeToggle();
  setupResetButton();
  setupFiltersToggle();
  setupListToggle();
});

// ===== BUILD GENRE CHIPS =====
function buildGenreFilters() {
  const allGenres = new Set();
  currentGames().forEach(g => g.genres.forEach(genre => allGenres.add(genre)));
  const container = document.getElementById('genreFilters');
  // Clear existing genre chips (keep the "all" chip)
  const allChip = container.querySelector('[data-genre="all"]');
  container.innerHTML = '';
  if (allChip) container.appendChild(allChip);
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

  let filtered = currentGames().filter(g => {
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
    document.querySelectorAll('#ratingFilters .chip').forEach(c => c.classList.remove('active'))
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

// ===== LIST TOGGLE =====
function setupListToggle() {
  const badge = document.getElementById('gameCount');
  badge.classList.add('list-toggle');
  badge.style.cursor = 'pointer';

  badge.addEventListener('click', () => {
    listMode = listMode === 30 ? 100 : 30;
    // Reset genre filter to avoid stale selection
    activeGenre = 'all';
    document.querySelectorAll('#genreFilters .chip').forEach(c => c.classList.remove('active'));
    const allChip = document.querySelector('[data-genre="all"]');
    if (allChip) allChip.classList.add('active');
    // Rebuild genres from new dataset
    buildGenreFilters();
    // Re-render games
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
