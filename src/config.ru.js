import {
  projectsList,
  aboutAvatar,
  sidebarIcons
} from './config.base';

export const sidebar = {
  menu: [
    {
      title: 'Главная',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Обо мне',
      url: '/about',
      icon: 'user'
    },
    {
      title: 'Проекты',
      url: '/projects',
      icon: 'folder-open'
    },
    {
      title: 'Контакты',
      url: '/contacts',
      icon: 'envelope'
    }
  ],
  icons: sidebarIcons
}

export const sidebarItems = {
  
}

export const main = {
  caption: "Никита Назаров",
  subcaption: "Frontend разработчик",
}

export const about = {
  caption: "Обо мне",
  content: [
    {
      caption: 'Персональная информация',
      text: [
        'Имя: Назаров Никита',
        'Дата рождения: 15.06.1997',
        'Местонахождение: Москва, Россия',
      ],
    },
    {
      caption: 'Образование',
      text: [
        'РТУ МИРЭА (2019)',
        'Специальность: Информационные системы и технологии',
        'Степень: Бакалавриат',
      ],
    },
    {
      caption: 'Коротоко обо мне',
      text: [
        // 'Я начал интерисоваться веб-разработкой полтора года назад, за это время я закончил университет, получил небольшой опыт работы над независимым проектом в качестве верстальщика, а также улучшил свои знания в области Front-end разработки. В свободное время я учу английский, интересуюсь новостями из мира веб-разработки, люблю смотреть старые фильмы, а также делаю музыку.'
        'Я начал интерисоваться веб-разработкой полтора года назад, до этого программировал на таких языках как C++ и Java. За эти полтора года я закончил университет, получил небольшой опыт работы над независимым проектом в качестве верстальщика, а также улучшил свои знания в области Front-end разработки. В свободное время я учу английский, интересуюсь новостями из мира веб-разработки, люблю смотреть старые фильмы, а также делаю музыку.'
      ],
    }
  ],
  img: aboutAvatar,
}

export const projects = {
  caption: "Мои проекты",
  filterText: "Проекты с ",
  openLink: 'Открыть',
  descriptionButton: "Описание проекта",
  projectsList: [
    {
      title: "Lawyer",
      link: "https://sorc97.github.io/Lawyer",
      img: require('./img/Lawyer.jpg'),
      tags: ['html', 'css', 'js', 'responsive'],
      github: "https://github.com/sorc97/Lawyer",
      category: "Верстка",
      description: 'Данный проект создан при помощи HTML, CSS и JavaScript, для размещения элементов использовалась технология CSS Flexbox, присутствует адаптивная версия, выполненная с помощью медиа запросов CSS'
    },
    {
      title: "Pets",
      link: "https://sorc97.github.io/Pets",
      img: require('./img/Pets.jpg'),
      tags: ['html', 'css', 'bootstrap', 'js', 'BEM', 'mobile first', 'responsive'],
      github: "https://github.com/sorc97/ShelterLayout",
      category: "Верстка",
      description: 'Проект выполнен на технологиях HTML, CSS, JavaScript и Bootstrap, разработка велась по принципу Mobile first, когда сначала делается версия для мобильных устройств, а затем для десктопных. Элементы позиционировались при помощи Bootstrap Grid и CSS Flexbox. Адаптиция под разные резрешения экранов разрабатывалась с помощью Bootstrap Grid и CSS media queries. Также на сайте присутствует слайдер и модальные окна, сделаные на чистом JavaScript.'
    },
    {
      title: "ZeroLayout",
      link: "https://sorc97.github.io/ZeroLayout",
      img: require('./img/Zero.jpg'),
      tags: ['html', 'scss', 'css grid', 'js', 'webpack', 'BEM', 'responsive'],
      github: "https://github.com/sorc97/ZeroLayout",
      category: "Верстка",
      description: 'Проект выполнен на технологиях HTML, CSS, JavaScript и Bootstrap. для размещения элементов использовалась технология CSS Flexbox, присутствует адаптивная версия, выполненная с помощью медиа запросов CSS'
    },
    {
      title: "ImageGenerator",
      link: "https://sorc97.github.io/ImageGenerator",
      img: require('./img/ImageGenerator.jpg'),
      tags: ['html', 'css', 'js', 'api', 'lazy load', 'responsive'],
      github: "https://github.com/sorc97/ImageGenerator",
      category: "Приложения"
    },
    {
      title: "Dictionary",
      link: "https://sorc97.github.io/Dictionary",
      img: require('./img/Dictionary.jpg'),
      tags: ['html', 'css', 'react', 'redux', 'responsive'],
      github: "https://github.com/sorc97/Dictionary",
      category: "Приложения"
    },
    {
      title: "TrelloClone",
      link: "https://sorc97.github.io/trelloClone",
      img: require('./img/TrelloClone.jpg'),
      tags: ['html', 'scss', 'typescript', 'react', 'react hooks', 'webpack'],
      github: "https://github.com/sorc97/trelloClone",
      category: "Приложения"
    },
    {
      title: "MusicShop",
      link: "http://nnd1997.ru:50",
      img: require('./img/MusicShop.jpg'),
      tags: [
        'html', 'css', 'css grid', 'nodeJs', 'api', 'mongoDB', 'react', 'redux', 'webpack','responsive'
      ],
      github: "https://github.com/sorc97/MusicShop",
      category: "Приложения"
    },
  ]
}

export const contacts = {
  caption: "Контакты",
  contactsList: [
    {
      title: "Мои профили",
      icons: [
        {name: 'github', description: 'Github', link: 'https://github.com/sorc97'},
        {name: 'vk', description: 'Vkontakte', link: 'https://vk.com/nikita_nnd'}
      ]
    },
    {
      title: "Контакты для связи",
      icons: [
        {name: 'telegram', description: 'Telegram', link: 'https://t.me/sorc97'},
        {name: 'envelope', description: 'nnd9797@gmail.com', link: 'mailto:nnd9797@gmail.com'}
      ]
    },
  ]
}