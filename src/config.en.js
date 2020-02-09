import {
  aboutAvatar,
  sidebarIcons,
  skillsList,
  getProjectsList
} from "./config.base";

export const main = {
  caption: "Nikita Nazarov",
  subcaption: "Frontend developer"
}

export const sidebar = {
  menu: [
    {
      title: "Home",
      url: "/",
      icon: "home"
    },
    {
      title: "About",
      url: "/about",
      icon: "user"
    },
    {
      title: "Projects",
      url: "/projects",
      icon: "folder-open"
    },
    {
      title: "Contacts",
      url: "/contacts",
      icon: "envelope"
    }
  ],
  icons: sidebarIcons
}

export const about = {
  caption: "About me",
  content: [
    {
      caption: "Personal information",
      text: [
        "Name: Nazarov Nikita",
        "Date of birth: 15.06.1997",
        "Location: Moscow, Russia",
      ],
    },
    {
      caption: "Education",
      text: [
        "RTU MIREA",
        "Speciality: Information systems and technologies",
        "Degree: Bachelor",
      ],
    },
    {
      caption: "Briefly about me",
      text: [
        "I got interested with web development in about one and half year ago, before that I programming in languages like C++ and Java. During that one and a half year I graduated from university, and got small experience in independent project as HTML coder, also I improved my skills in Front-end development. In my free time I prefer to learn english, read news from web development, and also love to watch old films and make music"
      ],
    }
  ],
  skills: {
    caption: "My skills",
    skillsList
  },
  img: aboutAvatar
}

export const projects = {
  caption: "My projects",
  filterText: "Projects with ",
  openLink: "Open",
  descriptionButton: "Project description",
  projectsList: getProjectsList('en')
}

export const contacts = {
  caption: "Contacts",
  contactsList: [
    {
      title: "My profiles",
      icons: [
        {name: "github", description: "Github"},
        {name: "vk", description: "Vkontakte"}
      ]
    },
    {
      title: "Contacts for communication",
      icons: [
        {name: "telegram", description: "Telegram", link: "https://t.me/sorc97"},
        {name: "envelope", description: "nnd9797@gmail.com", link: "mailto:nnd9797@gmail.com"}
      ]
    },
  ]
}