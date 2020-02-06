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
  /* items: {
    'Главная': '/',
    'Обо мне': '/about',
    'Проекты': '/projects',
    'Контакты': '/contacts'
  }, */
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
  text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit architecto hic accusamus consectetur officiis. Excepturi ad dicta ipsa veritatis minima laudantium ut necessitatibus asperiores tempore commodi culpa voluptates architecto dolorum, placeat id sint quas consequuntur aperiam quibusdam provident qui corrupti alias veniam recusandae? Excepturi minima delectus voluptatem voluptas mollitia nobis labore non, fugit animi aperiam corrupti accusamus, sit, unde deserunt dicta? Quasi, labore ea! Deserunt nobis laboriosam blanditiis veniam facere sed excepturi delectus accusantium quidem ipsam dicta dignissimos qui mollitia a cum aut incidunt iste, explicabo, praesentium nulla voluptas? Magni pariatur nihil a veritatis in tempora aut laborum rerum facere.",
  img: aboutAvatar
}

export const projects = {
  caption: "Мои проекты",
  projectsList,
  filterText: "Проекты с ",
  openLink: 'Открыть',
  descriptionButton: "Описание проекта"
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