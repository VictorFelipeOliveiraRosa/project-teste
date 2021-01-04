import { createElement, creatAtrribute } from '../utils/create.js';
import { getEvent } from './main.js';

const addEventListener = (el) => {
  el.addEventListener('click', getEvent);
}

// cria elemento e attribute
const mount = string => {
  let element_li = createElement('li', 'class', `nav-li-css-iten`);
  let element_a = createElement('a', 'class', `nav-a-css-iten`);
  addEventListener(element_a);
  creatAtrribute(element_li, 'id', `nav-li-js-${string}`);
  creatAtrribute(element_a, 'id', `nav-link-js-${string}`);
  creatAtrribute(element_a, 'href', '#');
  element_a.value = string;
  element_a.innerText = string.replace(string[0], string[0].toUpperCase());
  element_li.appendChild(element_a);
  return element_li;
};

//objeto com nome dos links do menu
const list_menu = {
  'Home': mount('home'),
  'Trybe': mount('trybe'),
  'CS50': mount('CS50'),
  'Links': mount('links'),
};

// funcao principal
function create_menu() {
  const getLiNav = document.querySelector('#liste-link');
  for (let [k, v] of Object.entries(list_menu)) {
    getLiNav.appendChild(v);
  }
}

export {
  create_menu,
};