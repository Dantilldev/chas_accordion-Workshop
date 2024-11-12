const bodyEl = document.querySelector('body');

function toggle(e) {
  const element = e.target.nextElementSibling;
  element.classList.toggle('active');
}

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  data.forEach((data) => {
    const divEl = document.createElement('div');
    const divEl2 = document.createElement('div');
    const icon = document.createElement('i');

    divEl.setAttribute('class', 'section');
    divEl2.setAttribute('class', 'description');
    icon.setAttribute('class', 'fa fa-plus');

    divEl.textContent = `${data.id}. ${data.title}`;
    divEl2.textContent = data.body;

    if (data.id % 2 === 0) {
      divEl.addEventListener('mouseover', () => {
        divEl.style.backgroundColor = 'rgba(3, 111, 111, 0.386)';
      });
      divEl.addEventListener('mouseout', () => {
        divEl.style.backgroundColor = 'darkcyan';
      });

      divEl.style.backgroundColor = 'darkcyan';
    } else {
      divEl.addEventListener('mouseover', () => {
        divEl.style.backgroundColor = 'rgba(255, 228, 196, 0.636)';
      });
      divEl.addEventListener('mouseout', () => {
        divEl.style.backgroundColor = 'bisque';
      });

      divEl.style.backgroundColor = 'bisque';
    }

    divEl.appendChild(icon);
    bodyEl.appendChild(divEl);
    bodyEl.appendChild(divEl2);

    divEl.addEventListener('click', () => {
      divEl2.classList.toggle('active');
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
    });
  });
}

getPosts();
