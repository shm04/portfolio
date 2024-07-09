document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    const bottomOfWindow =
      Math.ceil(window.scrollY + window.innerHeight) >=
      document.documentElement.scrollHeight;

    if (bottomOfWindow) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[navLinks.length - 1].classList.add("active");
    } else {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  }

  changeLinkState();
  window.addEventListener("scroll", changeLinkState);
});

function copyToClipboard(text, event) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const contactInfoDiv = event.target.closest(".contact-info");
      const copiedMessage = document.createElement("div");
      copiedMessage.textContent = "Copied";
      copiedMessage.classList.add("copy-msg");
      contactInfoDiv.appendChild(copiedMessage);
      setTimeout(() => {
        contactInfoDiv.removeChild(copiedMessage);
      }, 500);
    })
    .catch((error) => {
      console.error("Copy failed:", error);
    });
  document.body.removeChild(tempInput);
}

document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.querySelector('.next-btn');
  const backBtn = document.querySelector('.back-btn');
  const projects = document.querySelectorAll('.p-div');
  const mainImage = document.querySelector('.img-div img');
  let currentProjectIndex = 0;

  const projectDetails = [
    { imgSrc: 'assets/project_one.png', borderColor: '#FD8502' },
    { imgSrc: 'assets/project_two.jpeg', borderColor: '#008FFF' },
    { imgSrc: 'assets/project_three.png', borderColor: '#81D685' },
    { imgSrc: 'assets/project_four.png', borderColor: '#FF0000'}
  ];

  function updateProjectDisplay() {
    projects.forEach((project, index) => {
      project.style.display = 'none';
    });
    projects[currentProjectIndex].style.display = 'block';

    mainImage.src = projectDetails[currentProjectIndex].imgSrc;
    mainImage.style.border = `5px solid ${projectDetails[currentProjectIndex].borderColor}`;

    if (currentProjectIndex === 0 ) {
      backBtn.disabled = true;
      backBtn.classList.add('disabled');
    } else {
      backBtn.disabled = false;
      backBtn.classList.remove('disabled');
    }

    if (currentProjectIndex === projects.length - 1) {
      nextBtn.disabled = true;
      nextBtn.classList.add('disabled');
    } else {
      nextBtn.disabled = false;
      nextBtn.classList.remove('disabled');
    }
  }

  updateProjectDisplay();

  nextBtn.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProjectDisplay();
  });

  backBtn.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProjectDisplay();
  });
});

const skillsImgs = document.querySelectorAll('.skills-img');
const skillsContainer = document.querySelector('.skills-container');
const skillsHover = document.querySelector('.skills-hover');
const hoverImg = document.querySelector('.hover-img');
const hoverIconCenter = document.querySelector('.s-icon-center');

const skillsData = {
  "lang.jpeg": ["JavaScript", "Ruby", "HTML", "CSS"],
  "frames.jpg": ["React.js", "Ruby on Rails", "RSpec", "Capybara", "Selenium"],
  "skills.jpg": ["Database Management", "Version Control", "CLI", "Web Development", "API Design"]
};

function updateSkillsHoverContent(imgSrc, iconSrc, borderColor) {
  const hoverImgImg = hoverImg.querySelector('img');
  const hoverIcon = hoverIconCenter.querySelector('img');
  const skillsListContainer = document.querySelector('.skills-list');

  hoverImgImg.src = imgSrc;
  hoverIcon.src = iconSrc;
  hoverImg.style.border = `5px solid ${borderColor}`;
  hoverIconCenter.style.border = `5px solid ${borderColor}`;

  skillsListContainer.innerHTML = '';

  const skillsList = skillsData[imgSrc.split('/').pop()];
  if (skillsList) {
    skillsList.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsListContainer.appendChild(li);
      li.style.border = `1px solid ${borderColor}`;
    });
  }
}

skillsImgs.forEach(skillsImg => {
  skillsImg.addEventListener('mouseover', function() {
    const imgSrc = skillsImg.querySelector('img').src;
    const iconSrc = skillsImg.querySelector('.icon-center img').src;
    const borderColor = skillsImg.getAttribute('data-border-color');
    updateSkillsHoverContent(imgSrc, iconSrc, borderColor);
    skillsContainer.style.display = 'none';
    skillsHover.style.display = 'flex';
  });
});

skillsHover.addEventListener('mouseleave', function() {
  skillsContainer.style.display = 'flex';
  skillsHover.style.display = 'none';
  hoverImg.style.border = 'none';
  hoverIconCenter.style.border = 'none';
});

