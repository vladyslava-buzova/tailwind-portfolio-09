import Boss from './images/Boss.png';
import eco from './images/eco.png';
import game from './images//game.png';
import todo from './images/todo.png';
import backery from './images/Backery.png';
import portfolio from './images/portfolio-tailwind.png';

import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  // { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
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
    technologies: "React,Tailwind",
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
    url: "https://vladyslava-buzova.github.io/game_js_2048/",
    github: "https://github.com/vladyslava-buzova/game_js_2048",
    title: "Eco cosmetics",
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