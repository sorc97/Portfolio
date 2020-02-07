import {
  projectsList,
  aboutAvatar,
  sidebarIcons
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
  /* items: {
    "Home": "/",
    "About me": "/about",
    "My projects": "/projects",
    "Contacts": "/contacts"
  }, */
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
  img: aboutAvatar
}

export const projects = {
  caption: "My projects",
  filterText: "Projects with ",
  openLink: "Open",
  descriptionButton: "Project description",
  projectsList: [
    {
      title: "Lawyer",
      link: "https://sorc97.github.io/Lawyer",
      img: require("./img/Lawyer.jpg"),
      tags: ["html", "css", "js", "responsive"],
      github: "https://github.com/sorc97/Lawyer",
      category: "Layouts",
      description: "This project created with HTML, CSS and JavaScript, elemnts align implemented with CSS Flexbox, responsive version is available, it's created with CSS media queries"
    },
    {
      title: "Pets",
      link: "https://sorc97.github.io/Pets",
      img: require("./img/Pets.jpg"),
      tags: ["html", "css", "bootstrap", "js", "BEM", "mobile first", "responsive"],
      github: "https://github.com/sorc97/ShelterLayout",
      category: "Layouts",
      description: "This project created with HTML, CSS, Bootstrap and JavaScript, "
    },
    {
      title: "ZeroLayout",
      link: "https://sorc97.github.io/ZeroLayout",
      img: require("./img/Zero.jpg"),
      tags: ["html", "scss", "css grid", "js", "webpack", "BEM", "responsive"],
      github: "https://github.com/sorc97/ZeroLayout",
      category: "Layouts"
    },
    {
      title: "ImageGenerator",
      link: "https://sorc97.github.io/ImageGenerator",
      img: require("./img/ImageGenerator.jpg"),
      tags: ["html", "css", "js", "api", "lazy load", "responsive"],
      github: "https://github.com/sorc97/ImageGenerator",
      category: "Applications"
    },
    {
      title: "Dictionary",
      link: "https://sorc97.github.io/Dictionary",
      img: require("./img/Dictionary.jpg"),
      tags: ["html", "css", "react", "redux", "responsive"],
      github: "https://github.com/sorc97/Dictionary",
      category: "Applications"
    },
    {
      title: "TrelloClone",
      link: "https://sorc97.github.io/trelloClone",
      img: require("./img/TrelloClone.jpg"),
      tags: ["html", "scss", "typescript", "react", "react hooks", "webpack"],
      github: "https://github.com/sorc97/trelloClone",
      category: "Applications"
    },
    {
      title: "MusicShop",
      link: "http://nnd1997.ru:50",
      img: require("./img/MusicShop.jpg"),
      tags: [
        "html", "css", "css grid", "nodeJs", "api", "mongoDB", "react", "redux", "webpack","responsive"
      ],
      github: "https://github.com/sorc97/MusicShop",
      category: "Applications"
    },
  ]
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