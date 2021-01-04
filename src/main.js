import { createElement } from '../utils/create.js';
import { data } from './data.js';

function generateBlcok(name, link) {
  const eleBlock = createElement('div', 'class', 'block-container');
  const eleName = createElement('span', 'class', 'name-projeto');
  const eleView = createElement('span', 'class', 'view-box');
  const eleLink = createElement('a', 'class', 'link-projeto');

  eleLink.setAttribute('target', '_blank');

  eleName.innerText = name;
  eleLink.innerText = 'Visualisar';
  eleLink.href = link;

  eleBlock.appendChild(eleName);
  eleView.appendChild(eleLink);
  eleBlock.appendChild(eleView);

  return eleBlock;
}

function constructor(pagina_generated) {
  const getSection = document.querySelector('#section-content');
  getSection.innerHTML = '';
  const data_select = data[pagina_generated];
  console.log(data_select)
  for (let k of data_select) {
    console.log(k)
    const new_element = generateBlcok(k['name'], k['src']);
    getSection.appendChild(new_element);
  }
}

function getEvent(event) {
  let eve = event.target;
  constructor(event.target.value);
  console.log(eve.value)
}

export {
  getEvent
};