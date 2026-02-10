// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll (optional, for nicer feel)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".bar div");

const animateSkills = () => {
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => bar.style.width = width, 300);
  });
};

window.addEventListener("load", animateSkills);
// Remove welcome screen after animation
setTimeout(() => {
  const welcome = document.getElementById("welcome-screen");
  welcome.style.opacity = "0";
  setTimeout(() => welcome.remove(), 800);
}, 2800);


/* TYPING EFFECT */
const text = "Anjali Gupta";
let index = 0;
let isDeleting = false;
const typingSpeed = 120;
const deletingSpeed = 80;
const delayAfterTyping = 1200;

const typingElement = document.querySelector(".typing-text");

function typeEffect() {
  if (!isDeleting) {
    typingElement.textContent = text.substring(0, index + 1);
    index++;

    if (index === text.length) {
      setTimeout(() => isDeleting = true, delayAfterTyping);
    }
  } else {
    typingElement.textContent = text.substring(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();

// const typingText = document.querySelector(".typing");

// const nameText = "Anjali Gupta";
// let index = 0;
// let isDeleting = false;

// function animateName() {
//   if (!isDeleting) {
//     typingText.textContent = nameText.substring(0, index + 1);
//     index++;

//     if (index === nameText.length) {
//       setTimeout(() => (isDeleting = true), 1200);
//     }
//   } else {
//     typingText.textContent = nameText.substring(0, index - 1);
//     index--;

//     if (index === 0) {
//       isDeleting = false;
//     }
//   }

//   setTimeout(animateName, isDeleting ? 80 : 120);
// }

// // animateName();
