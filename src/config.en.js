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
      description: "This project created with HTML, CSS, Bootstrap and JavaScript, project was developed by Mobile First approach, that means that project's UI was created for mobile before desktop screens. Elements aligned by using Bootstrap Grid and CSS Flexbox. Responsive version created with Bootstrap Grid and CSS media queries. Web page also contains Slider and Modal windows, which created with native JavaScript."
    },
    {
      title: "ZeroLayout",
      link: "https://sorc97.github.io/ZeroLayout",
      img: require("./img/Zero.jpg"),
      tags: ["html", "scss", "css grid", "js", "webpack", "BEM", "responsive"],
      github: "https://github.com/sorc97/ZeroLayout",
      category: "Layouts",
      description: "This project is multi-page website created with HTML, SCSS, JS and Webpack. Project was developed by BEM metodology and elements was aligned by CSS Grid. For project's build Webpack bundler was used, configuration file separated into three different files for logical separation of development and production mode, also required loaders for SASS, images and fonts files was established. Responsive version of the site was created with CSS media queries and CSS grid."
    },
    {
      title: "ImageGenerator",
      link: "https://sorc97.github.io/ImageGenerator",
      img: require("./img/ImageGenerator.jpg"),
      tags: ["html", "css", "js", "api", "lazy load", "responsive"],
      github: "https://github.com/sorc97/ImageGenerator",
      category: "Applications",
      description: "This project is single page application, interacting with Api server, which allows to generate images by query from user, you can choose images amount per one page, enter query to get images or load more images from current query, also user can open modal window by click on image, which contains higher quality image. In that project LazayLoad technology was implemented, which loads images only when they in the user's visible area of the screen. Project was created with HTML, CSS, functional part was implemented by native JavaScript, responsive version created with CSS media queries"
    },
    {
      title: "Dictionary",
      link: "https://sorc97.github.io/Dictionary",
      img: require("./img/Dictionary.jpg"),
      tags: ["html", "css", "react", "redux", "responsive"],
      github: "https://github.com/sorc97/Dictionary",
      category: "Applications",
      description: "This project is Single Page Application, created with React and Redux, project initialized with Create React App. This App allows you to create a card of word, which you can place in three sections of complexity (Easy, Medium and Hard), you also can choose in what kind of language words will display, or change language of single word by click on it. You can call the context menu on each card of word and add some phrases, for better remembering of word, in this menu you can also remove word or place it in the new section. Also words search is available. Responsive version created with CSS media queries."
    },
    {
      title: "TrelloClone",
      link: "https://sorc97.github.io/trelloClone",
      img: require("./img/TrelloClone.jpg"),
      tags: ["html", "scss", "typescript", "react", "react hooks", "webpack"],
      github: "https://github.com/sorc97/trelloClone",
      category: "Applications",
      description: "This project is Single Page Application, created with React, TypeScript and SCSS. Project's state management implemented with ReactContext and ReactHooks. This project is implementing project management structure known as kanban. First of all you create a project's board, in that board you can create a multiple columns, which contains tasks, that you can transfer between columns. Tasks transfer was implemented with HTML5 Drag 'n Drop (without using any of library). While task is transfering you can drop it on another task, and they will be sorted, or you can drop it on another column, so task will be placed on that column, if task dropped on the empty space, it's placed on the end of the column. Also you can remove or edit columns, boards and tasks. Project was build with Webpack, for splitting production and development mode environment variables was used. Responsive version is not available, because Drag 'n Drop is not working on the touch screen."
    },
    {
      title: "MusicShop",
      link: "http://nnd1997.ru:50",
      img: require("./img/MusicShop.jpg"),
      tags: [
        "html", "css", "css grid", "nodeJs", "api", "mongoDB", "react", "redux", "webpack","responsive"
      ],
      github: "https://github.com/sorc97/MusicShop",
      category: "Applications",
      description: "This project is divided into Front-end and Back-end. Front-end is Single Page Application, created with React, Redux and CSS. App is loading data from API server, requests to the server depends in which page user loads. For instance, user was loaded on the product page, App is loading data of this particular product, then if user goes to the product category page, App is loading data of this particular category, so this approach helps to decrease amount of unnecessary requests. In this application you can sort and search products, which separated by pages and categories. Also you can add products to the cart, directly from the cart you can increase an amount of the particular product. Data from cart storing into LocalStorage, so data will be not lose by page refreshing. Elements aligned by using CSS Grid and Flexbox. Responsive version created with CSS media queries. \n Back-end is REST API application which connected with MongoDB using Mongoose. API responding with data based on the request."
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