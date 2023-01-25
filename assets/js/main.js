/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}

skillsHeader.forEach(el => {
  el.addEventListener("click", toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove("qualification_active");
    });
    target.classList.add("qualification_active");

    tabs.forEach(tab => {
      tab.classList.remove("qualification_active");
    });
    tab.classList.add("qualification_active");
  });
});
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services_modal"),
  modalBtns = document.querySelectorAll(".services_button"),
  modalCloses = document.querySelectorAll(".services_modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach(modalClose => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach(modalViews => {
      modalViews.classList.remove("active-modal");
    });
  });
});
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio_container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial_container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakPoints: {
    568: {
      slidesPerview: 2,
    },
  },
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== CHANGE THE LANGUAGE ====================*/

// Create a function to change the hash value of the page
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Define the language reload anchors
var language = {
  eng: {
    home: "HOME",
    about: "ABOUT",
    skills: "SKILLS",
    portfolio: "PORTFOLIO",
    contact: "CONTACTS",
    subTitle: "SOFTWARE ENGINEER",
    homeDesccription: "Software Developer, focusing on JavaScript - NodeJS." + " " +
    "Acting as SalesForce Functional Analyst.",
    contactButton: "CONTACT ME",
    homeScrollMouse: "SCROLL DOWN",
    sectiontitle: "EXPERIENCE",
    sectionSubtitle: "My experiences",
    aboutDescription: "JavaScript developer | Node.JS | Functional Analyst SalesForce",
    aboutInfo: "YEARS OF EXPERIENCE",
    aboutInfo2: "PROJECTS COMPLETED",
    aboutInfo3: "COMPANIES WORKED",
    aboutInfo4: "DOWNLOAD CV",
    skills1: "MY SKILLS",
    skills2: "Technical level",
    skills3: "Over 1 year",
    skills4: "Over 1 year",
    skills5: "Systems Support and Analysis",
    skills6: "Over 2 year",
    skills7: "1 year",
    skills8: "Functional Administrator",
    qualification: "QUALIFICATION",
    qualification2: "My Personal Journey",
    qualification3: "Education",
    qualification4: "Work",
    qualification5: "Unicesumar - Brazil",
    qualification6: "Software Engineering",
    qualification7: "DP900 Certification",
    qualification8: "Microsoft Certified",
    qualification9: "AZ900 Certification",
    qualification10: "AI900 Certification",
    qualification11: "Computer Network",
    qualification12: "Senac MG - Brazil",
  },
  pt: {
    home: "INÍCIO",
    about: "SOBRE",
    skills: "HABILIDADES",
    portfolio: "PORTFÓLIO",
    contact: "CONTATOS",
    subTitle: "ENGENHEIRO DE SOFTWARE",
    homeDesccription: "Desenvolvedor de Software, com foco em JavaScript - NodeJS." + " " +
    "Atuando como Analista Funcional SalesForce.",
    contactButton: "CONTATOS",
    homeScrollMouse: "IR PARA BAIXO",
    sectiontitle: "EXPERIÊNCIA",
    sectionSubtitle: "Minhas Atuações",
    aboutDescription: "Desenvolvedor JavaScript | Node.JS | Analista Funcional SalesForce",
    aboutInfo: "Anos de Experiência",
    aboutInfo2: "Projetos Completados",
    aboutInfo3: "Empresas Trabalhadas",
    aboutInfo4: "Baixar Curriculo",
    skills1: "Habilidades",
    skills2: "Nível Técnico",
    skills3: "Mais de 1 ano",
    skills4: "Mais de 1 ano",
    skills5: "Suporte e Análise de Sistemas",
    skills6: "Mais de 2 anos",
    skills7: "1 ano",
    skills8: "Funcional Admin",
    qualification: "QUALIFICAÇÃO",
    qualification2: "Minha Jornada Pessoal",
    qualification3: "Educação",
    qualification4: "Trabalho",
    qualification5: "Unicesumar - Brasil",
    qualification6: "Engenharia de Software",
    qualification7: "Certificação DP900",
    qualification8: "Microsoft Certificado",
    qualification9: "Certificação AZ900",
    qualification10: "Certificação AI900",
    qualification11: "Redes de Computadores",
    qualification12: "Senac MG - Brasil",
  }
}

// Check if a hash value exists in the URL
if (window.location.hash) {
  // Set the content of the webpage 
  // depending on the hash value
  if (window.location.hash == "#eng") {
    siteContent.textContent =
      language.eng.home;
   }
  else if (window.location.hash == "#pt") {
    siteContent.textContent =
      language.pt.home;
  }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent2.textContent =
     language.eng.about;
 }
 else if (window.location.hash == "#pt") {
   siteContent2.textContent =
     language.pt.about;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent3.textContent =
     language.eng.skills;
 }
 else if (window.location.hash == "#pt") {
   siteContent3.textContent =
     language.pt.skills;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent4.textContent =
     language.eng.portfolio;
 }
 else if (window.location.hash == "#pt") {
   siteContent4.textContent =
     language.pt.portfolio;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent5.textContent =
     language.eng.contact;
 }
 else if (window.location.hash == "#pt") {
   siteContent5.textContent =
     language.pt.contact;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent6.textContent =
     language.eng.subTitle;
 }
 else if (window.location.hash == "#pt") {
   siteContent6.textContent =
     language.pt.subTitle;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent7.textContent =
     language.eng.homeDesccription;
 }
 else if (window.location.hash == "#pt") {
   siteContent7.textContent =
     language.pt.homeDesccription;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent8.textContent =
     language.eng.contactButton;
 }
 else if (window.location.hash == "#pt") {
   siteContent8.textContent =
     language.pt.contactButton;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent9.textContent =
     language.eng.homeScrollMouse;
 }
 else if (window.location.hash == "#pt") {
   siteContent9.textContent =
     language.pt.homeScrollMouse;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent10.textContent =
     language.eng.sectiontitle;
 }
 else if (window.location.hash == "#pt") {
   siteContent10.textContent =
     language.pt.sectiontitle;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent11.textContent =
     language.eng.sectionSubtitle;
 }
 else if (window.location.hash == "#pt") {
   siteContent11.textContent =
     language.pt.sectionSubtitle;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent12.textContent =
     language.eng.aboutDescription;
 }
 else if (window.location.hash == "#pt") {
   siteContent12.textContent =
     language.pt.aboutDescription;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent13.textContent =
     language.eng.aboutInfo;
 }
 else if (window.location.hash == "#pt") {
   siteContent13.textContent =
     language.pt.aboutInfo;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent14.textContent =
     language.eng.aboutInfo2;
 }
 else if (window.location.hash == "#pt") {
   siteContent14.textContent =
     language.pt.aboutInfo2;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent15.textContent =
     language.eng.aboutInfo3;
 }
 else if (window.location.hash == "#pt") {
   siteContent15.textContent =
     language.pt.aboutInfo3;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent16.textContent =
     language.eng.aboutInfo4;
 }
 else if (window.location.hash == "#pt") {
   siteContent16.textContent =
     language.pt.aboutInfo4;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent17.textContent =
     language.eng.skills1;
 }
 else if (window.location.hash == "#pt") {
   siteContent17.textContent =
     language.pt.skills1;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent18.textContent =
     language.eng.skills2;
 }
 else if (window.location.hash == "#pt") {
   siteContent18.textContent =
     language.pt.skills2;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent19.textContent =
     language.eng.skills3;
 }
 else if (window.location.hash == "#pt") {
   siteContent18.textContent =
     language.pt.skills3;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent20.textContent =
     language.eng.skills4;
 }
 else if (window.location.hash == "#pt") {
   siteContent20.textContent =
     language.pt.skills4;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent21.textContent =
     language.eng.skills5;
 }
 else if (window.location.hash == "#pt") {
   siteContent21.textContent =
     language.pt.skills5;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent22.textContent =
     language.eng.skills6;
 }
 else if (window.location.hash == "#pt") {
   siteContent22.textContent =
     language.pt.skills6;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent23.textContent =
     language.eng.skills7;
 }
 else if (window.location.hash == "#pt") {
   siteContent23.textContent =
     language.pt.skills7;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent24.textContent =
     language.eng.skills8;
 }
 else if (window.location.hash == "#pt") {
   siteContent24.textContent =
     language.pt.skills8;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent25.textContent =
     language.eng.qualification;
 }
 else if (window.location.hash == "#pt") {
   siteContent25.textContent =
     language.pt.qualification;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent26.textContent =
     language.eng.qualification2;
 }
 else if (window.location.hash == "#pt") {
   siteContent26.textContent =
     language.pt.qualification2;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent27.textContent =
     language.eng.qualification3;
 }
 else if (window.location.hash == "#pt") {
   siteContent27.textContent =
     language.pt.qualification3;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent28.textContent =
     language.eng.qualification4;
 }
 else if (window.location.hash == "#pt") {
   siteContent28.textContent =
     language.pt.qualification4;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent29.textContent =
     language.eng.qualification6;
 }
 else if (window.location.hash == "#pt") {
   siteContent29.textContent =
     language.pt.qualification6;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent30.textContent =
     language.eng.qualification5;
 }
 else if (window.location.hash == "#pt") {
   siteContent30.textContent =
     language.pt.qualification5;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent31.textContent =
     language.eng.qualification7;
 }
 else if (window.location.hash == "#pt") {
   siteContent31.textContent =
     language.pt.qualification7;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent32.textContent =
     language.eng.qualification8;
 }
 else if (window.location.hash == "#pt") {
   siteContent32.textContent =
     language.pt.qualification8;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent33.textContent =
     language.eng.qualification9;
 }
 else if (window.location.hash == "#pt") {
   siteContent33.textContent =
     language.pt.qualification9;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent34.textContent =
     language.eng.qualification8;
 }
 else if (window.location.hash == "#pt") {
   siteContent34.textContent =
     language.pt.qualification8;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent35.textContent =
     language.eng.qualification10;
 }
 else if (window.location.hash == "#pt") {
   siteContent35.textContent =
     language.pt.qualification10;
 }
}

if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent36.textContent =
     language.eng.qualification8;
 }
 else if (window.location.hash == "#pt") {
   siteContent36.textContent =
     language.pt.qualification8;
 }
}


if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent37.textContent =
     language.eng.qualification11;
 }
 else if (window.location.hash == "#pt") {
   siteContent37.textContent =
     language.pt.qualification11
 }
}


if (window.location.hash) {
  // Set the content of the webpage 
 // depending on the hash value
 if (window.location.hash == "#eng") {
   siteContent38.textContent =
     language.eng.qualification12;
 }
 else if (window.location.hash == "#pt") {
   siteContent38.textContent =
     language.pt.qualification12;
 }
}