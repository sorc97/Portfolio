
export const aboutAvatar = require("./img/avatar1.jpg");

export const sidebarIcons = {
  "vk": "https://vk.com/nikita_nnd",
  "github": "https://github.com/sorc97"
}

export const skillsList = [
  "HTML5", "CSS3", "SCSS", "Bootstrap", "JavaScript", "JQuery", "React", "Redux", "Typescript", "Webpack", "NodeJS", "Express", "MongoDB", "GIT", "BEM", "English (B1)"
]

export const profiles = [
  { name: "github", description: "Github", link: "https://github.com/sorc97" },
  { name: "vk", description: "Vkontakte", link: "https://vk.com/nikita_nnd" }
]

export const communicationContacts = [
  { name: "telegram", description: "Telegram", link: "https://t.me/sorc97" },
  { name: "envelope", description: "nnd9797@gmail.com", link: "mailto:nnd9797@gmail.com" },
  { name: "phone", description: "+7 (968) 692-07-88" }
]

export const getProjectsList = (lang) => [
  {
    title: "Lawyer",
    link: "http://nnd1997.ru/Lawyer",
    img: require("./img/Lawyer.jpg"),
    tags: ["html", "css", "js", "responsive"],
    github: "https://github.com/sorc97/Lawyer",
    category: (lang === "ru") ? "Верстка" : "Layouts",
    description: (lang === "ru") ?
      "Данный проект создан при помощи HTML, CSS и JavaScript, для размещения элементов использовалась технология CSS Flexbox, присутствует адаптивная версия, выполненная с помощью медиа запросов CSS"
      : "This project is created with HTML, CSS and JavaScript, elements was aligned by using CSS Flexbox, responsive version is available, it's created with CSS media queries"
  },
  {
    title: "CozyHouse",
    link: "http://nnd1997.ru/ShelterLayout",
    img: require("./img/Pets.jpg"),
    tags: ["html", "css", "bootstrap", "js", "BEM", "mobile first", "responsive"],
    github: "https://github.com/sorc97/ShelterLayout",
    category: (lang === "ru") ? "Верстка" : "Layouts",
    description: (lang === "ru") ?
      "Проект выполнен на технологиях HTML, CSS, JavaScript и Bootstrap, разработка велась по принципу Mobile First, когда сначала делается версия для мобильных устройств, а затем для десктопных. Элементы позиционировались при помощи Bootstrap Grid и CSS Flexbox. Адаптация под разные разрешения экранов разрабатывалась с помощью Bootstrap Grid и CSS media queries. Также на сайте присутствует слайдер и модальные окна, сделаные на чистом JavaScript."
      : "This project is created with HTML, CSS, Bootstrap and JavaScript, project was developed by Mobile First approach, that means that project's UI was created for mobile before desktop screens. Elements aligned by using Bootstrap Grid and CSS Flexbox. Responsive version created with Bootstrap Grid and CSS media queries. Web page also contains Slider and Modal windows, which created with native JavaScript."
  },
  {
    title: "Zero",
    link: "http://nnd1997.ru/ZeroLayout",
    img: require("./img/Zero.jpg"),
    tags: ["html", "scss", "css grid", "js", "webpack", "BEM", "responsive"],
    github: "https://github.com/sorc97/ZeroLayout",
    category: (lang === "ru") ? "Верстка" : "Layouts",
    description: (lang === "ru") ?
      "Данный проект представляет из себя многостраничный сайт, созданный при помщи HTML, SCSS, JavaScript и Webpack. В ходе разрабоки применялась методолгия БЭМ, элементы позиционировались при помощи CSS Grid. Для сборки проекта использовался бандлер Webpack, для разграничения режима разработки (development) и готового проекта (production) использовались переменные окружения, также были подключены необходимые лоадеры и пресеты для работы с SASS файлами, картинками и шрифтами. Адаптивная версия сайта выполнена с помощью CSS media queries и CSS Grid."
      : "This project is multi-page website created with HTML, SCSS, JS and Webpack. Project was developed by BEM methodology and elements was aligned by using CSS Grid. Project was build with Webpack, for splitting production and development mode environment variables was used, also required loaders for SASS, images and fonts files was established. Responsive version of the site was created with CSS media queries and CSS grid."
  },
  {
    title: "ImageGenerator",
    link: "http://nnd1997.ru/ImageGenerator",
    img: require("./img/ImageGenerator.jpg"),
    tags: ["html", "css", "js", "api", "lazy load", "responsive"],
    github: "https://github.com/sorc97/ImageGenerator",
    category: (lang === "ru") ? "Приложения" : "Applications",
    description: (lang === "ru") ?
      "Данный проект представляет из себя одностраничное приложение, взаимодействующее с Api сервером, позволяющее генерировать изображения по запросу пользователя. Можно выбрать количество изображений на странице, ввести запрос на изображения, а также подгрузить новые, по уже имеющемуся запросу, также пользователь может вызвать модальное окно с более качественным разрешением картинки, при клике на изображение. В данном проекте Lazy Load реализован с помощью Observer API. Lazy Load - это подход, благодаря которому загружаются только те изображения, которые находятся в видимой области экрана пользователя. Проект реализован на HTML, CSS, функциональная часть на чистом JavaScript, адаптивная версия сделана с помощью медиа запросов CSS."
      : "This project is single page application, interacting with Api server, which allows to generate images by users query. User can choose images amount per one page, enter query to get images or load more images from current query, also user can open modal window by click on image, which contains higher quality image. In that project LazayLoad was implemented by using Observer API. Lazy Load it's approach that loads images only when they in the user's visible area of the screen. Project was created with HTML, CSS, functional part was implemented by native JavaScript, responsive version created with CSS media queries."
  },
  {
    title: "Dictionary",
    link: "http://nnd1997.ru/Dictionary",
    img: require("./img/Dictionary.jpg"),
    tags: ["react", "redux", "css", "responsive"],
    github: "https://github.com/sorc97/Dictionary",
    category: (lang === "ru") ? "Приложения" : "Applications",
    description: (lang === "ru") ?
      "Данный проект является одностраничным приложением, инициализированным с помощью Create React App и созданный с помощью React и Redux. Приложение позволяет создать карточку слова, которую можно расположить в трех секциях сложности (Hard, Medium и Easy), можно выбрать на каком языке будут отображаться слова, или поменять язык одной карточки, кликнув на нее. Также можно вызвать контекстное меню на карточке, в этом меню слово можно поместить в другую секцию сложности, удалить или добавить фразы, для лучшего запоминания. Также присутствует функция поиска слова, которая сразу откроет его перевод и фразы. Присутствует адаптивная версия приложения, выполненная с помощью меди запросов CSS."
      : "This project is Single Page Application, created with React and Redux, project initialized with Create React App. This App allows you to create a card of word, which you can place in three sections of complexity (Easy, Medium and Hard), you also can choose in what kind of language words will display, or change language of single word by click on it. You can call the context menu on each card of word and add some phrases, for better remembering of word, in this menu you can also remove word or place it in the new section. Also words search is available. Responsive version created with CSS media queries."
  },
  {
    title: "TrelloClone",
    link: "http://nnd1997.ru/trelloClone",
    img: require("./img/TrelloClone.jpg"),
    tags: ["react", "react hooks", "typescript", "scss", "webpack", "d'n'd"],
    github: "https://github.com/sorc97/trelloClone",
    category: (lang === "ru") ? "Приложения" : "Applications",
    description: (lang === "ru") ?
      "Данный проект представляет из себя одностраничное приложение, выполненное с помощью React, TypeScript и SCSS. Управление состоянием осуществляется при помощи React Context и React Hooks. Приложение реализует структуру управления проектами, известную как канбан. Для начала создается новый проект, при переходе в который можно создать множество колонок с заданиями, а затем переносить задания между колонками. Перенос заданий осуществлен при помощи технологии HTML5 Drag and Drop (без использования библиотек). В процессе переноса задания, при размещении его над другим заданием, происходит их сортировка (независимо от колонки), при размещении задания на другой колонке, происходит перенос на нужную колонку, если задание упало на свободное место, то оно встанет в конец списка. Также присутствует возможность редактирования и удаления доски проекта, колонки и задания. Проект был собран с помощью Webpack, этапы разработки разделены при помощи переменных окружения, опираясь на которые и формируется итоговый конфигурационный файл конкретного этапа разработки. Адаптивная версия проекта не реализована, так как Drag 'n Drop не работает на сенсорных экранах."
      : "This project is Single Page Application, created with React, TypeScript and SCSS. Project's state management implemented with React Context and React Hooks. This project is implementing project management structure known as a kanban. First of all you create a project board, in that board you can create a multiple columns, which contains tasks, that you can transfer between columns. Tasks transfer was implemented with HTML5 Drag and Drop (without using any of library). While task is transferring you can drop it on another task, and they will be sorted, or you can drop it on another column, so task will be placed on that column, if task dropped on the empty space, it's placed on the end of the column. Also you can remove or edit columns, boards and tasks. Project was build with Webpack, for splitting production and development mode environment variables was used. Responsive version is not available, because Drag and Drop is not working on the touchscreen."
  },
  {
    title: "MusicShop",
    link: "http://nnd1997.ru/MusicShop",
    img: require("./img/MusicShop.jpg"),
    tags: [
      "react", "redux", "nodeJs", "api", "mongoDB", "webpack", "css", "css grid", "responsive"
    ],
    github: "https://github.com/sorc97/MusicShop",
    category: (lang === "ru") ? "Приложения" : "Applications",
    description: (lang === "ru") ?
      "Данный проект разделен на Front-end и Back-end. Front-end представляет из себя одностраничное приложение, созданное с помощью React, Redux и CSS. Приложение загружает данные с сервера в зависимости от того, в какой секции загрузился пользователь. Допустим, пользователь загрузился на странице конкретного товара, приложение запрашивает данные только этого товара, затем если пользователь переходит на страницу категории товара, запрашиваются только товары из этой категории, таким образом минимизируется объем ненужных данных, загружаемых пользователем. В приложении присутствует возможность сортировки и поиска товаров, все товары разделены на страницы и категории. Также можно добавить товар в корзину, непосредственно из корзины можно увеличить количество отдельно взятого товара, данные из корзины хранятся в LocalStorage, таким образом при перезагрузке страницы они не будут утеряны. Элементы позиционировались при помощи CSS Grid и Flexbox. Адаптивная версия реализована при помощи медиа запросов CSS. \n Back-end представляет из себя REST API приложение, которое связанно с базой данных MongoDB посредством Mongoose. API отвечает данными основываясь на поступающем запросе."
      : "This project is divided into Front-end and Back-end. Front-end is Single Page Application, created with React, Redux and CSS. App is loading data from API server, requests to the server depends in which page user loads. For instance, user was loaded on the product page, App is loading data of this particular product, then if user goes to the product category page, App is loading data of this particular category, so this approach helps to decrease amount of unnecessary requests. In this application you can sort and search products, which separated by pages and categories. Also you can add products to the cart, directly from the cart you can increase an amount of the particular product. Data from cart storing into LocalStorage, so data will be not lose by page refreshing. Elements aligned by using CSS Grid and Flexbox. Responsive version created with CSS media queries. \n Back-end is REST API application which connected with MongoDB using Mongoose. API responding with data based on the request."
  },
]