import {
  projectsList,
  aboutAvatar,
  sidebarIcons
} from './config.base';

export const main = {
  caption: "Nikita Nazarov",
  subcaption: "Frontend developer"
}

export const sidebar = {
  menu: [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'user'
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: 'folder-open'
    },
    {
      title: 'Contacts',
      url: '/contacts',
      icon: 'envelope'
    }
  ],
  /* items: {
    'Home': '/',
    'About me': '/about',
    'My projects': '/projects',
    'Contacts': '/contacts'
  }, */
  icons: sidebarIcons
}

export const about = {
  caption: "About me",
  text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit architecto hic accusamus consectetur officiis. Excepturi ad dicta ipsa veritatis minima laudantium ut necessitatibus asperiores tempore commodi culpa voluptates architecto dolorum, placeat id sint quas consequuntur aperiam quibusdam provident qui corrupti alias veniam recusandae? Excepturi minima delectus voluptatem voluptas mollitia nobis labore non, fugit animi aperiam corrupti accusamus, sit, unde deserunt dicta? Quasi, labore ea! Deserunt nobis laboriosam blanditiis veniam facere sed excepturi delectus accusantium quidem ipsam dicta dignissimos qui mollitia a cum aut incidunt iste, explicabo, praesentium nulla voluptas? Magni pariatur nihil a veritatis in tempora aut laborum rerum facere.",
  img: aboutAvatar
}

export const projects = {
  caption: "My projects",
  projectsList,
  filterText: "Projects with ",
  openLink: 'Open',
  descriptionButton: "Project description"
}

export const contacts = {
  caption: "Contacts",
  contactsList: [
    {
      title: "My profiles",
      icons: [
        {name: 'github', description: 'Github'},
        {name: 'vk', description: 'Vkontakte'}
      ]
    },
    {
      title: "Contacts for communication",
      icons: [
        {name: 'telegram', description: 'Telegram', link: 'https://t.me/sorc97'},
        {name: 'envelope', description: 'nnd9797@gmail.com', link: 'mailto:nnd9797@gmail.com'}
      ]
    },
  ]
}