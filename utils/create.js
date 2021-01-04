function createElement(name = '', key = '', value = '') {
  let new_element = '';
  if (name === '') {
    new_element = document.createElement('div');
  } else {
    new_element = document.createElement(name);
  }

  if (key === '' || value === '') {
    return new_element
  } else {
    new_element.setAttribute(key, value);
  }
  return new_element;
}

function creatAtrribute(element, key, value) {
  if (element.hasAttribute(key)) {
    if (value !== '') {
      return element.key.add(value);
    }
  }
  if (key === '' || value === '') {
    return element;
  }
  return element.setAttribute(key, value);
}

export {
  createElement,
  creatAtrribute
}