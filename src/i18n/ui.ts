export const languages = {
  en: 'English',
  ru: 'Русский',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'welcome.title': 'Welcome',
    'welcome.subtitle': 'Software Developer',
    'education.title': 'Education',
    'education.university': 'MISIS University',
    'education.degree': 'Computer Science & Engineering',
    'education.years': '2025-2029',
    'education.location': 'Moscow, Russia',
    'about.title': 'About Me',
    'about.description': 'Focused on low-level and practical software development. Frequently experiment with various technologies and languages. Keen interest in systems programming and tackling technical challenges. Able to collaborate effectively in teams and solve complex problems.',
    'achievements.title': 'Achievements',
    'achievements.prod.title': 'PROD \'25 Finals',
    'achievements.prod.subtitle': 'Backend Development (Go/Rust)',
    'achievements.prod.description': 'Finalist of first olympiad in industrial development. With my team we developed a mobile app for small businesses to simplify promotions and special offers.',
    'achievements.prod.date': 'March 2025',
    'skills.title': 'Skills & Technologies',
    'skills.languages.title': 'Languages',
    'skills.languages.subtitle': 'Go, Rust, C++, Python, JavaScript',
    'skills.areas.title': 'Areas',
    'skills.areas.subtitle': 'Systems Programming, Backend Development, Low-level Development',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.contact': 'Контакты',
    'welcome.title': 'Добро пожаловать',
    'welcome.subtitle': 'Разработчик ПО',
    'education.title': 'Образование',
    'education.university': 'НИТУ МИСиС',
    'education.degree': 'Информатика и вычислительная техника',
    'education.years': '2025-2029',
    'education.location': 'Москва, Россия',
    'about.title': 'Обо мне',
    'about.description': 'Сосредоточен на низкоуровневой и практической разработке программного обеспечения. Часто экспериментирую с различными технологиями и языками. Живой интерес к системному программированию и решению технических задач. Способен эффективно сотрудничать в командах и решать сложные проблемы.',
    'achievements.title': 'Достижения',
    'achievements.prod.title': 'Финал PROD \'25',
    'achievements.prod.subtitle': 'Backend разработка (Go/Rust)',
    'achievements.prod.description': 'Финалист первой олимпиады по промышленной разработке. Вместе с командой мы разработали мобильное приложение для малого бизнеса для упрощения акций и специальных предложений.',
    'achievements.prod.date': 'Март 2025',
    'skills.title': 'Навыки и технологии',
    'skills.languages.title': 'Языки',
    'skills.languages.subtitle': 'Go, Rust, C++, Python, JavaScript',
    'skills.areas.title': 'Области',
    'skills.areas.subtitle': 'Системное программирование, Backend разработка, Низкоуровневая разработка',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
