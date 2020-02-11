import {
  aboutAvatar,
  sidebarIcons,
  skillsList,
  getProjectsList,
  profiles,
  communicationContacts
} from "./config.base";

export const sidebar = {
  menu: [
    {
      title: "Главная",
      url: "/",
      icon: "home"
    },
    {
      title: "Обо мне",
      url: "/about",
      icon: "user"
    },
    {
      title: "Проекты",
      url: "/projects",
      icon: "folder-open"
    },
    {
      title: "Контакты",
      url: "/contacts",
      icon: "envelope"
    }
  ],
  icons: sidebarIcons
}

export const main = {
  caption: "Никита Назаров",
  subcaption: "Frontend разработчик",
}

export const about = {
  caption: "Обо мне",
  content: [
    {
      caption: "Персональная информация",
      text: [
        "Имя: Назаров Никита",
        "Дата рождения: 15.06.1997",
        "Местонахождение: Москва, Россия",
      ],
    },
    {
      caption: "Образование",
      text: [
        "РТУ МИРЭА (2019)",
        "Специальность: Информационные системы и технологии",
        "Степень: Бакалавриат",
      ],
    },
    {
      caption: "Коротоко обо мне",
      text: [
        "Я начал интересоваться веб-разработкой полтора года назад, до этого программировал на таких языках как C++ и Java. За эти полтора года я закончил университет, получил небольшой опыт работы над независимым проектом в качестве верстальщика, а также улучшил свои знания в области Front-end разработки. В свободное время я учу английский, интересуюсь новостями из мира веб-разработки, люблю смотреть старые фильмы, а также делаю музыку."
      ],
    }
  ],
  skills: {
    caption: "Мои навыки",
    skillsList
  },
  img: aboutAvatar,
}

export const projects = {
  caption: "Мои проекты",
  filterText: "Проекты с ",
  filterPlaceholder: "Нет фильтра",
  openLink: "Открыть",
  descriptionButton: "Описание проекта",
  projectsList: getProjectsList('ru')
}

export const contacts = {
  caption: "Контакты",
  contactsList: [
    {
      title: "Мои профили",
      icons: profiles
    },
    {
      title: "Контакты для связи",
      icons: communicationContacts
    },
  ]
}