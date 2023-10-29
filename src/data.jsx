import Boss from './images/Boss.png';
import eco from './images/eco.png';
import game from './images//game.png';
import todo from './images/todo.png';
import backery from './images/Backery.png';
import portfolio from './images/portfolio-tailwind.png';
import { nanoid } from 'nanoid';
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export const links = [
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'JavaScript (ES6), Typescript, React',
  },
  {
    id: nanoid(),
    title: 'HTML5, CSS3, Sass (SCSS)',
  },
  {
    id: nanoid(),
    title: 'Figma, Illustrator',
  },
  {
    id: nanoid(),
    title: 'Fetch, REST API',
  },
  {
    id: nanoid(),
    title: 'Tailwind, Bulma',
  },
  {
    id: nanoid(),
    title: 'Git/Github, VS Code, Chrome Dev Tools, NPM',
  },
  {
    id: nanoid(),
    title: 'SQL basic(MySQL)',
  },
  {
    id: nanoid(),
    title: 'Trello, Jira',
  },
  {
    id: nanoid(),
    title: 'SEO optimization skills to increase website visibility',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: backery,
    url: 'https://vladyslava-buzova.github.io/backery_landing/',
    github: 'https://github.com/vladyslava-buzova/backery-lending/tree/develop',
    title: "Creative Bakery",
    text: "SEO optimized landing page 'Creative Bakery' with an adaptive design. The website can be viewed on any device. Implemented hamburger menu, and responsive gallery.",
    technologies: "HTML, CSS, Sass (SCSS), BEM",
  },
  {
    id: nanoid(),
    img: portfolio,
    url: "https://vladyslava-buzova.github.io/tailwind-portfolio-09/",
    github: "https://github.com/vladyslava-buzova/tailwind-portfolio-09",
    title: "Portfolio-Tailwind",
    text: "Game 2048 is written in pure JavaScript. In this game you need to combine numbered tiles in order to gain a higher numbered tile. You need to merge equal cells with keyboard arrows until you get 2048.",
    technologies: "React, Tailwind, CSS",
  },
  {
    id: nanoid(),
    img: Boss,
    url:  "https://vladyslava-buzova.github.io/boss-landing/",
    github: "https://github.com/vladyslava-buzova/boss-landing/tree/develop",
    title: "Boss",
    text: "SEO optimized landing page 'Boss' with an adaptive design. The website can be viewed on any device. Implemented hamburger menu, and responsive gallery.",
    technologies: "HTML, CSS, Sass (SCSS), BEM, Grid",
  },
  {
    id: nanoid(),
    img: eco,
    url: "https://vladyslava-buzova.github.io/Eco-cosmetics/",
    github: "https://github.com/vladyslava-buzova/Eco-cosmetics",
    title: "Eco cosmetics",
    text: "SEO optimized landing page 'Eco cosmetics with an adaptive design. The website can be viewed on any device. Implemented hamburger menu, responsive gallery, tabs, and form validation.",
    technologies: "JS, HTML, CSS, Sass (SCSS), BEM",
  },
  {
    id: nanoid(),
    img: todo,
    url: "https://vladyslava-buzova.github.io/todo-react/",
    github: "https://github.com/vladyslava-buzova/todo-react",
    title: "ToDo",
    text: "The todo-list app is written in React. In the App there is an ability to add and remove todo. Added a counter to show the number of not completed todos. Implemented filter to switch between All/Active/Completed todos. Added ability to edit a todo. Implemented ability to remove all completed todos from the list. The button is visible if there is at least 1 completed todo in the list. Implemented toggle the completed status of all the todos using a checkbox. Implemented localStorage to save state of the APP.",
    technologies: "React, Typescript, LocalStorage, HTML, CSS",
  },
  {
    id: nanoid(),
    img: game,
    url: "https://vladyslava-buzova.github.io/game_js_2048/",
    github: "https://github.com/vladyslava-buzova/game_js_2048",
    title: "Game 2048",
    text: "Game 2048 is written in pure JavaScript. In this game you need to combine numbered tiles in order to gain a higher numbered tile. You need to merge equal cells with keyboard arrows until you get 2048.",
    technologies: "JS, HTML, CSS, Sass (SCSS)",
  },
];

export const social = [
  {
    id: "icon-linkedin",
    url: "https://www.linkedin.com/in/vladyslava-buzova/",
    img: <FaLinkedin className="h-8 w-8 duration-300 text-black hover:text-blue-500"/>,
    classname:'social-bg blue'
  },
  {
    id: "icon-github",
    url: "https://github.com/vladyslava-buzova",
    img: <FaGithubSquare className="h-8 w-8 duration-300 text-black hover:text-zinc-600"/>,
    classname:'social-bg pink'
  },
  {
    id: "icon-facebook",
    url: "https://www.facebook.com/profile.php?id=100083047789352",
    img: <FaFacebookSquare className="h-8 w-8 duration-300  text-black hover:text-blue-600"/>,
    classname:'social-bg blue'
  },
  {
    id: "icon-email",
    url: "mailto:vladyslava.buzova@gmail.com",
    img: <SiGmail className="h-8 w-8 duration-300  text-black hover:text-red-500"/>,
    classname:'social-bg pink'
  },
]