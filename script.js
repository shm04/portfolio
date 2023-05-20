const navMenu = document.querySelector('.nav-menu');
const menuBtn = document.getElementById('menu-btn');
const navLink = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', () => {
  navMenu.style.display = 'flex';
});

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
  navMenu.style.display = 'none';
});

navLink.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    navMenu.style.display = 'none';
  });
});

// Object with projects info

const projects = {
  project1: {
    id: 1,
    title: 'Rolling Loud Festival information webpage.',
    description: 'In this webpage oyu can find information about Rolling Loud Festival in California 2023.',
    image: './imgs-p/project-1.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://shm04.github.io/first-capstone-project/',
    source: 'https://github.com/shm04/first-capstone-project',
  },

  project2: {
    id: 2,
    title: 'Keeping track of hundreds of components',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo error impedit odit blanditiis ducimus ipsum, tenetur repudiandae aperiam repellat. Vero deserunt porro necessitatibus dolor adipisci, suscipit quo laborum beatae quam.',
    image: './imgs-p/popup-desktop.png',
    tech: ['Codekit', 'GitHub', 'JavaScript'],
    liveVersion: '#',
    source: '#',
  },

  project3: {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    description: 'This is project 3',
    image: './imgs-p/popup-img.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },

  project4: {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    description: 'This is project 4',
    image: './imgs-p/popup-desktop.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },

  project5: {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    description: 'This is project 5',
    image: './imgs-p/popup-img.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },

  project6: {
    id: 6,
    title: 'Multi-Post Stories Gain+Glory',
    description: 'This is project 6',
    image: './imgs-p/popup-desktop.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },
};

// Projects section code

const worksSection = document.querySelector('.works-section');

const sectionTitle = document.createElement('h1');
sectionTitle.innerHTML = 'My Recent Works';
worksSection.appendChild(sectionTitle);

const titleUnderline = document.createElement('img');
titleUnderline.src = 'imgs-p/Indicator.png';
titleUnderline.className = 'line';
worksSection.appendChild(titleUnderline);

const cards = document.createElement('div');
cards.className = 'cards';
worksSection.appendChild(cards);

Object.values(projects).forEach((values) => {
  const card = document.createElement('div');
  card.className = 'card';
  cards.appendChild(card);

  const projectImg = document.createElement('img');
  projectImg.src = values.image;
  card.appendChild(projectImg);

  const textContainer = document.createElement('div');
  textContainer.className = 'text-container';
  card.appendChild(textContainer);

  const containerTitle = document.createElement('h1');
  containerTitle.textContent = values.title;
  textContainer.appendChild(containerTitle);

  const containerUl = document.createElement('ul');
  values.tech.forEach((tech) => {
    const containerLi = document.createElement('li');
    containerLi.textContent = tech;
    containerUl.appendChild(containerLi);
  });
  textContainer.appendChild(containerUl);

  const seeBtn = document.createElement('button');
  seeBtn.className = 'see-btn';
  seeBtn.setAttribute('id', `project${values.id}-btn`);
  seeBtn.textContent = 'See project';
  textContainer.appendChild(seeBtn);
});

// Popup window code

const seeBtn = document.querySelectorAll('.see-btn');
const card = document.querySelectorAll('.card');

seeBtn.forEach((seeBtn) => {
  seeBtn.addEventListener('click', () => {
    const projectId = seeBtn.id.replace('-btn', '');
    const project = projects[projectId];
    const popup = document.createElement('div');
    popup.className = 'popup-main';
    popup.innerHTML = `
    <div class="popup">
      <button class="close-button-desktop" type="button"><img src="./imgs-p/close-popup-desktop.png"></button>
      <button class="close-button" type="button"><img src="./imgs-p/close-icon-white.png"></button>
      <img class="popup-img" src=${project.image} alt="project-image">
      <div class="popup-card">
      <div class="cont-row">
        <h1>${project.title}</h1>
        <div class="buttons two">
          <a href="${project.liveVersion}">See live<img src="./imgs-p/see-live-icon.png"></a>
          <a href="${project.source}">See source<img src="./imgs-p/github-white.png"></a>
        </div>
      </div>
      <ul>
        <li>${project.tech[0]}</li>
        <li>${project.tech[1]}</li>
        <li>${project.tech[2]}</li> 
      </ul>
      <p>${project.description}</p>
      <div class="buttons one">
          <a href="${project.liveVersion}">See live<img src="/imgs-p/see-live-icon.png"></a>
          <a href="${project.source}">See source<img src="/imgs-p/github-white.png"></a>
      </div></div>
    </div>
    `;

    card.forEach((card) => {
      card.appendChild(popup);
    });

    const closeBtn = document.querySelector('.close-button');

    card.forEach((card) => {
      closeBtn.addEventListener('click', () => {
        card.removeChild(popup);
      });
    });

    const closeBtnDesktop = document.querySelector('.close-button-desktop');

    card.forEach((card) => {
      closeBtnDesktop.addEventListener('click', () => {
        card.removeChild(popup);
      });
    });
  });
});

// validation form

const form = document.querySelector('.form');
const emailInput = document.querySelector('.email-input');
const errorDiv = document.querySelector('.error-msg-div');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (emailInput.value === emailInput.value.toLowerCase()) {
    form.submit();
  } else {
    errorDiv.style.display = 'block';
    const errorMsg = document.createElement('p');
    errorMsg.className = 'error-msg';
    errorMsg.textContent = 'Email must be typed in lower case.';
    errorDiv.appendChild(errorMsg);
    emailInput.style.border = '1px solid red';
  }
});
