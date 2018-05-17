import './css/styles.css';

import { transform, highlight } from './controller';

fetch('/lorem.html')
  .then(response => response.text())
  .then(html => {
    const container = document.querySelector('.container');
    container.innerHTML = html;

    const text = document.getElementsByTagName('p');
    
    transform(text);

    container.innerHTML = highlight({
      value: container.innerHTML,
      target: 'o',
      css: 'blue'
    });

    container.innerHTML = highlight({
      value: container.innerHTML,
      target: 'r',
      css: 'orange'
    });
});