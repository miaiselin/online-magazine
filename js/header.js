const header = document.createElement('header');
header.innerHTML = document.querySelector('#header-template').content.firstChild.cloneNode(true).innerHTML;

document.head.insertBefore(header, document.body.firstChild);
