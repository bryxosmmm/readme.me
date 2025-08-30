export const languages = {
  en: 'EN',
  ru: 'RU',
};

const programmingLanguages = 'Go, Rust, C, C++, Ocaml, Python';
const techStack = 'Git, Linux, Docker, SQL/noSQL';

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'page.title': 'Main',
    'welcome.title': 'Welcome',
    'welcome.subtitle': 'Software Developer',
    'education.title': 'Education',
    'education.university': 'MISIS University',
    'education.degree': 'Business Informatics',
    'education.years': '2025-2029',
    'education.location': 'Moscow, Russia',
    'about.title': 'About Me',
    'about.my_name': 'Kirill Gerasimov',
    'about.description': 'Deep into low-level programming, understanding how systems work under the hood. Build compilers and interpreters, leveling up my skills with low-level code. Aim for clean, readable code without unnecessary complexity or overengineering. Interested in optimization and efficient solutions. Constantly upgrading my skills in systems programming and exploring new technologies.',
    'achievements.title': 'Achievements',
    'achievements.prod.title': 'PROD \'25 Finals',
    'achievements.prod.subtitle': 'Backend Development (Go/Rust)',
    'achievements.prod.description': 'Finalist of first olympiad in industrial development. With my team we developed a mobile app for small businesses to simplify promotions and special offers.',
    'achievements.prod.date': 'March 2025',
    'skills.title': 'Skills & Technologies',
    'skills.languages.title': 'Languages',
    'skills.languages.subtitle': programmingLanguages,
    'skills.areas.title': 'Tech',
    'skills.areas.subtitle': techStack,
  },

  ru: {
    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.contact': 'Контакты',
    'page.title': 'Main',
    'welcome.title': 'Добро пожаловать',
    'welcome.subtitle': 'Software Developer',
    'education.title': 'Образование',
    'education.university': 'НИТУ МИСИС',
    'education.degree': 'Бизнес-информатика',
    'education.years': '2025-2029',
    'education.location': 'Москва, Россия',
    'about.my_name': 'Кирилл Герасимов',
    'about.title': 'Обо мне',
    'about.description': 'Погружен в низкоуровневое программирование, разбираюсь, как работают системы под капотом. Разрабатываю компиляторы и интерпретаторы, прокачиваю навыки работы с кодом на базовом уровне. Стремлюсь писать чистый и понятный код, без лишней сложности и оверхеда. Интересуюсь оптимизацией и эффективностью решений. Постоянно улучшаю свои умения в системном программировании и изучаю новые технологии. ',
    'achievements.title': 'Достижения',
    'achievements.prod.title': 'Финал PROD \'25',
    'achievements.prod.subtitle': 'Backend разработка (Go/Rust)',
    'achievements.prod.description': 'Финалист первой олимпиады по промышленной разработке. Вместе с командой мы разработали мобильное приложение для малого бизнеса для упрощения акций и специальных предложений.',
    'achievements.prod.date': 'Март 2025',
    'skills.title': 'Навыки и технологии',
    'skills.languages.title': 'Языки',
    'skills.languages.subtitle': programmingLanguages,
    'skills.areas.title': 'Технологии',
    'skills.areas.subtitle': techStack,
  },
} as const;

export function getLangFromUrl(url: URL) {
  // Handle base paths correctly
  const base = import.meta.env.BASE_URL || '';
  const pathWithoutBase = url.pathname.slice(base.length);
  const segments = pathWithoutBase.split('/').filter(Boolean);

  // If no segments, it's the root (default language)
  if (segments.length === 0) return defaultLang;

  // First segment is the language
  const lang = segments[0];
  if (lang in ui) return lang as keyof typeof ui;

  // If invalid language, return default
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
