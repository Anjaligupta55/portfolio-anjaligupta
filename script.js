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

// const contactForm = document.getElementById("contactForm");

// if (contactForm) {
//   contactForm.addEventListener("submit", e => {
//     e.preventDefault();

//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();

//     const subject = `Portfolio Contact from ${name}`;
//     const body =
//       `Name: ${name}%0A` +
//       `Email: ${email}%0A%0A` +
//       `${message}`;

//     window.location.href =
//       `mailto:anjaligupta57392@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
//   });
// }
// const contactForm = document.getElementById("contactForm");

// if (contactForm) {
//   contactForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const subjectInput = document.getElementById("subject").value.trim();
//     const message = document.getElementById("message").value.trim();

//     const subject = subjectInput || `Portfolio Contact from ${name}`;
//     const body =
//       `Name: ${name}\n` +
//       `Email: ${email}\n\n` +
//       `${message}`;

//     window.location.href =
//       `mailto:anjaligupta57392@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//   });
// }
function openMail(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subjectInput = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const subject = subjectInput || `Portfolio Contact from ${name}`;
  const body =
    `Name: ${name}\n` +
    `Email: ${email}\n\n` +
    `${message}`;

  window.location.href =
    "mailto:anjaligupta57392@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.15,
  }
);


revealElements.forEach((el) => revealObserver.observe(el));

/* ================= CUSTOM CURSOR & PARTICLES ================= */
const cursor = document.createElement('div');
cursor.classList.add('cursor-dot');
document.body.appendChild(cursor);

const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Move Main Cursor Dot
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  // Move Glow
  if (cursorGlow) {
    cursorGlow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  }

  // Create Trail Particle
  createSparkle(x, y);
});

function createSparkle(x, y) {
  const particle = document.createElement('div');
  particle.classList.add('cursor-trail');
  document.body.appendChild(particle);

  const size = Math.random() * 8 + 4;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"; // Star shape
  particle.style.background = `hsl(${Math.random() * 60 + 300}, 100%, 70%)`; // Pink/Purple hues

  // Random direction
  const destX = x + (Math.random() - 0.5) * 50;
  const destY = y + (Math.random() - 0.5) * 50;

  const animation = particle.animate([
    { transform: `translate(-50%, -50%) scale(1)`, opacity: 0.8 },
    { transform: `translate(${destX - x}px, ${destY - y}px) scale(0)`, opacity: 0 }
  ], {
    duration: 500,
    easing: 'ease-out'
  });

  animation.onfinish = () => particle.remove();
}

/* ================= 3D TILT EFFECT ================= */
const tiltElements = document.querySelectorAll('.project-card, .skills-card, .contact-box');

tiltElements.forEach(el => {
  el.addEventListener('mousemove', handleTilt);
  el.addEventListener('mouseleave', resetTilt);
});

function handleTilt(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
  const rotateY = ((x - centerX) / centerX) * 10;

  el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
}

function resetTilt(e) {
  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
}

/* ================= SCROLL PROGRESS & ACTIVE NAV ================= */
const scrollProgress = document.getElementById('scroll-progress');
const backToTopBtn = document.getElementById('back-to-top');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar nav a');

window.addEventListener('scroll', () => {
  // Scroll Progress
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  if (scrollProgress) scrollProgress.style.width = `${progress}%`;

  // Back to Top and Navbar Background
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    if (backToTopBtn) backToTopBtn.classList.add('visible');
    navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
  } else {
    if (backToTopBtn) backToTopBtn.classList.remove('visible');
    navbar.style.background = 'transparent';
    navbar.style.boxShadow = 'none';
  }

  // Active Nav Link
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ================= MAGNETIC BUTTONS ================= */
const magneticBtns = document.querySelectorAll('.btn, .home-buttons a');

magneticBtns.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
  });
});

