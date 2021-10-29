
export const TEXT ={
  ROUTES:{
    HOME:'/',
    ABOUT: '/about',
    PROJECTS:'/projects',
    CONTACT: '/contact'
  },
  ABOUT:{
    title:"Hi there!",
    presentation:`I'm Tomas Rinaldi Scatena, I’m an Argentinian developer living in
    Europe focused in ${<span>Front-end</span>} and ${<span>Back-end</span>}
    technologies, fan of traveling and tasty food.
    My journey into programming began learning the basics of{" "}
    ${<span>HTML</span>},${<span>CSS</span> }and ${<span>JavaScript</span>} by
    myself. After writing my first line of code I was hooked. So I
    started an 800 hours intensive training program based on software
    development focused on ${<span>Front-end</span>}, ${<span>Back-end</span>}
    and ${<span>Database</span>} while working in teams and applying
    ${<span>agile methodologies</span>}.
    I'm looking forward to enhance my knowledge and learn new
    technologies by working in a challenging enviroment`,
    action: "Let's get in touch",
  },
  HOME:{
    title: "Hi! I’m Tomas.",
    subtitle: "I'm a Front-end developer."
  },
  CONTACT:{
    title:"Let's talk!",
    action:"Submit"
  },
  PROJECTS:{
    title:"Projects"
  },
  NAVBAR:{
    home: 'Home',
    about:'About',
    contact:'Contact',
    projects:'Projects'
  },
  GRID:{
    action:"Check the code",
    action_2:"Check the app"
  },
  FOOTER:{
    title:"© 2021 Created by",
    name:"Tomas Rinaldi"
  }
}

 



export const projectList = [
  {
    title: "MovieDB",
    information:
      "Movie application using an API from 'The Movie DB'. This is v 1.0, I'm working on  v 2.0",
    stack: "Javascript, React, CSS",
    code: "https://github.com/rinalditomas/movieDB",
    website: "https://new-movie-db.netlify.app",
    id: 1,
  },
  {
    title: "Cruce",
    information:
      "CRUCE is a full stack application where companies can handle their products' deliveries in realtime, register delivery companies/riders and check all their metrics.",
    stack:
      "Javascript, React, React-Redux,NodeJS, Sequelize, JWT, Socket.IO, MaterialUI",
    code: "https://github.com/rinalditomas/Cruce",
    id: 2,
  },
  {
    title: "ShoppingApp",
    information:
      "Shopping list it's a mobile application (CRUD) to keep track of what you need to buy in the grocery store.",
    stack: "Javascript, React Native, Firebase,CSS",
    code: "https://github.com/rinalditomas/ShoppingList-App",
    id: 3,
  },
  {
    title: "Portfolio",
    information: "Personal porfolio to showcase all my projects.",
    stack: "Javascript, React,CSS",
    code: "https://github.com/rinalditomas/portfolio",
    id: 4,
  },
  {
    title: "OMDB",
    information: "The first app I coded",
    stack: "Javascript, React,CSS, React Redux, JWT, Moongose",
    code: "https://github.com/rinalditomas/ImdbClone",
    id: 5,
  },
];
