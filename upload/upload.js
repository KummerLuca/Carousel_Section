import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Deine Firebase-Konfiguration hier eintragen:
  const firebaseConfig = {
    apiKey: "AIzaSyAOVWC3-WauskIzFRzMbNtl8p3bwidYoN8",
    authDomain: "dashbaord-15fb6.firebaseapp.com",
    projectId: "dashbaord-15fb6",
    storageBucket: "dashbaord-15fb6.firebasestorage.app",
    messagingSenderId: "504500013021",
    appId: "1:504500013021:web:8d18fc4f444a2b60211834"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Deine Projekte hier einfügen:
// const projects = [
//   {   
//     image: "https://imgur.com/a/QkctLat",
//     title: "PROJECT 1",
//     features: ["HTML", "CSS", "JavaScript"],
//     description: "This is the first projectLorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.",
//     link: "https://github.com/KummerLuca/Portfolio",
//     link2:"https://lucadev.netlify.app/",
//     btn1: "View Code",
//     btn1svg: `
//   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   <path d="M0 0h24v24H0z" fill="none"/>
//   <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.47.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.59 9.59 0 0 1 12 6.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
//   `,
//     btn2: "View Demo",
//     btn2svg: `
// <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
// `,
// },
//   {   
//     image: "https://imgur.com/a/QkctLat",
//     title: "PROJECT 1",
//     features: ["HTML", "CSS", "JavaScript"],
//     description: "This is the first projectLorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.",
//     link: "https://github.com/KummerLuca/Portfolio",
//     link2:"https://lucadev.netlify.app/",
//     btn1: "View Code",
//     btn1svg: `
//   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   <path d="M0 0h24v24H0z" fill="none"/>
//   <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.47.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.59 9.59 0 0 1 12 6.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
//   `,
//     btn2: "View Demo",
//     btn2svg: `
// <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
// `,
// },
//   {   
//     image: "https://imgur.com/a/QkctLat",
//     title: "PROJECT 1",
//     features: ["HTML", "CSS", "JavaScript"],
//     description: "This is the first projectLorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.",
//     link: "https://github.com/KummerLuca/Portfolio",
//     link2:"https://lucadev.netlify.app/",
//     btn1: "View Code",
//     btn1svg: `
//   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   <path d="M0 0h24v24H0z" fill="none"/>
//   <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.47.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.59 9.59 0 0 1 12 6.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
//   `,
//     btn2: "View Demo",
//     btn2svg: `
// <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
// `,
// },
//   {   
//     image: "https://imgur.com/a/QkctLat",
//     title: "PROJECT 1",
//     features: ["HTML", "CSS", "JavaScript"],
//     description: "This is the first projectLorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.",
//     link: "https://github.com/KummerLuca/Portfolio",
//     link2:"https://lucadev.netlify.app/",
//     btn1: "View Code",
//     btn1svg: `
//   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   <path d="M0 0h24v24H0z" fill="none"/>
//   <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.47.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.59 9.59 0 0 1 12 6.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
//   `,
//     btn2: "View Demo",
//     btn2svg: `
// <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
// `,
// },
//   {   
//     image: "https://imgur.com/a/QkctLat",
//     title: "PROJECT 1",
//     features: ["HTML", "CSS", "JavaScript"],
//     description: "This is the first projectLorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.",
//     link: "https://github.com/KummerLuca/Portfolio",
//     link2:"https://lucadev.netlify.app/",
//     btn1: "View Code",
//     btn1svg: `
//   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   <path d="M0 0h24v24H0z" fill="none"/>
//   <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.47.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.59 9.59 0 0 1 12 6.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
//   `,
//     btn2: "View Demo",
//     btn2svg: `
// <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
// `,
// },
//   {   
//     image: "https://imgur.com/a/QkctLat",
//     title: "PROJECT 1",
//     features: ["HTML", "CSS", "JavaScript"],
//     description: "This is the first projectLorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.",
//     link: "https://github.com/KummerLuca/Portfolio",
//     link2:"https://lucadev.netlify.app/",
//     btn1: "View Code",
//     btn1svg: `
//   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   <path d="M0 0h24v24H0z" fill="none"/>
//   <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.47.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.59 9.59 0 0 1 12 6.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
//   `,
//     btn2: "View Demo",
//     btn2svg: `
// <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
// `,
// },
//   {   
//     image: "https://imgur.com/a/QkctLat",
//     title: "PROJECT 1",
//     features: ["HTML", "CSS", "JavaScript"],
//     description: "This is the first projectLorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.",
//     link: "https://github.com/KummerLuca/Portfolio",
//     link2:"https://lucadev.netlify.app/",
//     btn1: "View Code",
//     btn1svg: `
//   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   <path d="M0 0h24v24H0z" fill="none"/>
//   <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.47.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.59 9.59 0 0 1 12 6.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
//   `,
//     btn2: "View Demo",
//     btn2svg: `
// <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
// `,
// },
//   {   
//     image: "https://imgur.com/a/QkctLat",
//     title: "PROJECT 1",
//     features: ["HTML", "CSS", "JavaScript"],
//     description: "This is the first projectLorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi quam beatae exercitationem mollitia. Vel saepe quas totam iste dolorem cumque tempore aliquam ex provident officia.",
//     link: "https://github.com/KummerLuca/Portfolio",
//     link2:"https://lucadev.netlify.app/",
//     btn1: "View Code",
//     btn1svg: `
//   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   <path d="M0 0h24v24H0z" fill="none"/>
//   <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.47.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.59 9.59 0 0 1 12 6.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
//   `,
//     btn2: "View Demo",
//     btn2svg: `
// <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
// `,
// },
// ];

for (const project of projects) {
  try {
    await addDoc(collection(db, "Projects"), project);
    console.log(`✅ Hochgeladen: ${project.title}`);
  } catch (error) {
    console.error(`❌ Fehler bei ${project.title}:`, error);
  }
}
