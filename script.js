// Mobile menu code

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
    title: ['Keeping track of hundreds of components'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo error impedit odit blanditiis ducimus ipsum, tenetur repudiandae aperiam repellat. Vero deserunt porro necessitatibus dolor adipisci, suscipit quo laborum beatae quam.',
    image: './imgs-p/popup-img.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript'],
    liveVersion: '#',
    source: '#',
  },

  project2: {
    title: ['Keeping track of hundreds of components'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo error impedit odit blanditiis ducimus ipsum, tenetur repudiandae aperiam repellat. Vero deserunt porro necessitatibus dolor adipisci, suscipit quo laborum beatae quam.',
    image: './imgs-p/popup-desktop.png',
    tech: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#',
    source: '#',
  },

  project3: {
    title: ['Multi-Post Stories', 'Gain+Glory'],
    description: 'This is project 3',
    image: './imgs-p/popup-img.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },

  project4: {
    title: ['Multi-Post Stories', 'Gain+Glory'],
    description: 'This is project 4',
    image: './imgs-p/popup-desktop.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },

  project5: {
    title: ['Multi-Post Stories', 'Gain+Glory'],
    description: 'This is project 5',
    image: './imgs-p/popup-img.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },

  project6: {
    title: ['Multi-Post Stories', 'Gain+Glory'],
    description: 'This is project 6',
    image: './imgs-p/popup-desktop.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },
};

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
