const toggleBtn = document.getElementById("darkToggle");

// Funktion zum Icon-Wechsel
function updateIcon(isDark) {
  if (isDark) {
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F19E39">
        <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/>
      </svg>`;
  } else {
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>`;
  }
}

// Theme beim Laden anwenden
window.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    updateIcon(true);
  } else {
    document.body.classList.remove("dark");
    updateIcon(false);
  }
});

// Beim Klick togglen
toggleBtn.addEventListener("click", function () {
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateIcon(isDark);
});



// Alles für Karousell und Carten
const readMore = "Mehr Lesen"
const readLess= "Weniger Lesen"

const liveSvg = `
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
`;
const githubSvg = `
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.47.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.59 9.59 0 0 1 12 6.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
  `
const ProjectInfoText = document.getElementById("ProjectInfo");
ProjectInfoText.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, cupiditate recusandae qui perferendis ad quisquam! Impedit, facilis quaerat in ducimus porro, neque animi qui rem id nobis veritatis quia doloribus."

const projects = [
  {   
    image: "Projekt_1_Header.png",
    title: "PROJECT 1",
    features: ["HTML", "CSS", "JavaScript"],
    description: "This is the first projectLorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.",
    link: "https://github.com/KummerLuca/Portfolio",
    link2:"https://lucadev.netlify.app/",
    btn1: "View Code",
    btn1svg: githubSvg,
    btn2: "View Demo",
    btn2svg: liveSvg,
},
{
    image: "https://picsum.photos/200/300",
    title: "Project 2",
    features: ["HTML", "CSS", "JavaScript"],
    description: "This is the second project",
    link: "https://www.google.com",
    btn1: "View Code",
    btn1svg: githubSvg,
    btn2: "View Demo",
    btn2svg: liveSvg,
},
{
    image: "https://picsum.photos/200/300",
    title: "Project 3",
    features: ["HTML", "CSS"],
    description: "This is the blablaba project",
    link: "https://www.google.com",
    btn1: "View Code",
    btn1svg: githubSvg,
    btn2: "View Demo",
    btn2svg: liveSvg,
},
{
    image: "https://picsum.photos/200/300",
    title: "Project 4",
    features: ["HTML", "CSS", "JavaScript"],
    description: "This is the second project",
    link: "https://www.google.com",
    btn1: "View Code",
    btn1svg: githubSvg,
    btn2: "View Demo",
    btn2svg: liveSvg,
},
{
  image: "https://picsum.photos/200/300",
  title: "Project 5",
  features: ["HTML", "CSS", "JavaScript"],
  description: "This is the second project",
  link: "https://www.google.com",
  btn1: "View Code",
  btn1svg: githubSvg,
  btn2: "View Demo",
  btn2svg: liveSvg,
},
{
  image: "https://picsum.photos/200/300",
  title: "Project 6",
  features: ["HTML", "CSS", "JavaScript"],
  description: "This is the second project",
  link: "https://www.google.com",
  btn1: "View Code",
  btn1svg: githubSvg,
  btn2: "View Demo",
  btn2svg: liveSvg,
},
{
image: "Projekt_1_Header.png",
    title: "PROJECT 7",
    features: ["HTML", "CSS", "JavaScript"],
    description: "This is the first projectLorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.",
    link: "https://github.com/KummerLuca/Portfolio",
    link2:"https://lucadev.netlify.app/",
    btn1: "View Code",
    btn1svg: githubSvg,
    btn2: "View Demo",
    btn2svg: liveSvg,
},
{
  image: "Projekt_1_Header.png",
      title: "PROJECT 8",
      features: ["HTML", "CSS", "JavaScript"],
      description: "This is the first projectLorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.",
      link: "https://github.com/KummerLuca/Portfolio",
      link2:"https://lucadev.netlify.app/",
      btn1: "View Code",
      btn1svg: githubSvg,
      btn2: "View Demo",
      btn2svg: liveSvg,
  },
];

function renderProjects(){

  console.log("hallo");

// card
const container = document.getElementById("projects");
container.innerHTML = "";

projects.forEach(function(project){
  const card  = document.createElement("div");
  card.classList.add("project-card");
  

// Image
  const image  = document.createElement("img");
  image.classList.add("project-image");
  image.src = project.image;
  image.alt = project.title;

// Content
  const content = document.createElement("div");
  content.classList.add("project-content");

// Title
  const title = document.createElement("h3");
  title.classList.add("project-title");
  title.textContent = project.title

// Badges
  const features = document.createElement("div");
  features.classList.add("project-features");
  
project.features.forEach(function(feature){
  const badge = document.createElement("div");
  badge.classList.add("project-badge");
  badge.textContent = feature;
  
  //Badges an features hängen
  features.appendChild(badge);
});



// Description
  const description = document.createElement("p");
  description.classList.add("project-description");
  description.textContent = project.description;

// Buttons
const btnWrapper  = document.createElement("div");
btnWrapper.classList.add("project-btn-wrapper");


const btnSec = document.createElement("a");
btnSec.classList.add("project-btn-secondary");
btnSec.innerHTML = `${project.btn1svg}<span>${project.btn1}</span>`;
btnSec.href = project.link;
btnSec.target = "_blank";


const btnPri = document.createElement("a");
btnPri.classList.add("project-btn-primary");
btnPri.innerHTML = `${project.btn2svg}<span>${project.btn2}</span>`;
btnPri.href = project.link2;
btnPri.target = "_blank";



// Buttons an Button Wrapper hängen
btnWrapper.appendChild(btnSec);
btnWrapper.appendChild(btnPri);




// Alle Elemente an Content hängen
content.appendChild(title);
content.appendChild(features);
content.appendChild(description);
// ReadMore wird unten eingeschoben
content.appendChild(btnWrapper);

// Img und Content an Card hängen
card.appendChild(image);
card.appendChild(content);

// Card an Container hängen
container.appendChild(card);



// ReadMoreBtn Prüfen ob zu lange wenn ja readMoreBtn einfügen 
setTimeout(function(descEl, contentEl, btnWrapperEl){
  const isClamped = descEl.scrollHeight > descEl.clientHeight;
  
  if(isClamped){
// Read More Button
    const readMoreBtn  = document.createElement("button");
    readMoreBtn.classList.add("project-read-more");
    readMoreBtn.textContent = readMore;

    readMoreBtn.addEventListener("click", function(){
      const isExpanded = descEl.classList.toggle("expanded");
      

      if(isExpanded){
        readMoreBtn.textContent = readLess;

      } else{
        readMoreBtn.textContent = readMore;
      }
      if(!isExpanded){
        descEl.scrollTop = 0;
      }

    });

    // ReadMoreBtn vor ButtonWrapper einschieben
    contentEl.insertBefore(readMoreBtn, btnWrapperEl)

  }
}, 0, description, content, btnWrapper)

});

}
renderProjects();


// Carousell

const track = document.getElementById("projects");
const btnLeft = document.querySelector(".carousel-btn.left");
const btnRight = document.querySelector(".carousel-btn.right");

const scrollByCard = () => {
  const card = track.querySelector(".project-card");
  if (!card) return 300; // fallback
  return card.offsetWidth + 40; // card + gap
};

btnLeft.addEventListener("click", () => {
  track.scrollBy({ left: -scrollByCard(), behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  track.scrollBy({ left: scrollByCard(), behavior: "smooth" });
});

// Drag-Funktionalität
let isDown = false;
let startX;
let scrollLeft;

track.addEventListener("mousedown", (e) => {
  isDown = true;
  track.classList.add("dragging");
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener("mouseleave", () => {
  isDown = false;
  track.classList.remove("dragging");
});

track.addEventListener("mouseup", () => {
  isDown = false;
  track.classList.remove("dragging");
});

track.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 1.5;
  track.scrollLeft = scrollLeft - walk;
});




