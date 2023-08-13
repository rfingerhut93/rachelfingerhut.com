import { annotate } from 'https://unpkg.com/rough-notation?module';

function startRoughAnnotation(elem) {
  const element = document.getElementById(elem);
  const annotation = annotate(element, { type: 'highlight', color: '#f1fa8d' });
  annotation.show();
}

function setupIntersectionObserver(targetElement, callback) {
  const options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target.id);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(targetElement);
}

const webDev = document.getElementById('web-developer');
const projectTitle = document.getElementById('project-title');
const contactTitle = document.getElementById('contact-title');

setupIntersectionObserver(webDev, startRoughAnnotation);
setupIntersectionObserver(projectTitle, startRoughAnnotation);
setupIntersectionObserver(contactTitle, startRoughAnnotation);

let burger = document.getElementById('burger'),
    nav    = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

const menuLinks = document.querySelectorAll('.main-nav li');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        menuLinks.forEach(link => link.classList.remove('selected'));
        this.classList.add('selected');
        burger.classList.remove('is-open');
        nav.classList.remove('is-open');
    });
});

function scrollToContainer(containerId) {
  const container = document.getElementById(containerId);

  if (container) {
    const rect = container.getBoundingClientRect();
    const offset = document.documentElement.scrollTop;
    const scrollY = rect.top + offset;

    const navbar = document.getElementById('main-nav');
    const navbarHeight = navbar.offsetHeight;

    const additionalOffset = -10;

    window.scrollTo({
      top: scrollY - navbarHeight + additionalOffset,
      behavior: 'smooth'
    });

    if (window.history && window.history.replaceState) {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    }
  }
}

document.getElementById("projects-button").addEventListener("click", function() {
  scrollToContainer("projects-container");
});

const contactBtns = document.getElementsByClassName("contact-btn"); 
for (const contactBtn of contactBtns){
  contactBtn.addEventListener('click', function() {
    const pageHeight = document.body.scrollHeight;
    
    window.scrollTo({
      top: pageHeight,
      behavior: 'smooth'
    });
  });
}

const contactForm = document.getElementById('form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted');

  const formData = new FormData(contactForm);
  console.log('Form data:', formData);

  fetch('../php/send_email.php', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
   .then(data => {
    if (data.success) {
        contactForm.reset();
        alert("Form submitted successfully!");
    } else {
        alert("Error submitting form.");
    }
})
    .catch(error => {
      console.error('An error occurred:', error);
    });
});