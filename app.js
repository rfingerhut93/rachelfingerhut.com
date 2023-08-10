/** Rough Annotation */
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
          callback(entry.target.id); // Pass the element's ID as an argument
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    observer.observe(targetElement);
  }
  
  const webDev = document.getElementById('web-developer');
  const projectTitle = document.getElementById('project-title');
  const contactTitle = document.getElementById('contact-title');
  
  setupIntersectionObserver(webDev, startRoughAnnotation); // Use the correct function name
  setupIntersectionObserver(projectTitle, startRoughAnnotation);
  setupIntersectionObserver(contactTitle, startRoughAnnotation);

  
/** Navigation Burger Menu */
let burger = document.getElementById('burger'),
    nav    = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

/** Selected menu option effect */
// Get all menu links
const menuLinks = document.querySelectorAll('.main-nav li');

// Add click event listener to each link
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove "selected" class from all links
        menuLinks.forEach(link => link.classList.remove('selected'));

        // Add "selected" class to the clicked link
        this.classList.add('selected');

        // Close the navbar after a link is clicked
        burger.classList.remove('is-open');
        nav.classList.remove('is-open');
    });
});


/** Removing id from url after button click */
function scrollToContainer(containerId) {
  var container = document.getElementById(containerId);
  var navbarHeight = document.getElementById('main-nav').offsetHeight; // Replace 'main-nav' with your actual navbar ID

  if (container) {
      var rect = container.getBoundingClientRect();
      var scrollY = rect.top + window.scrollY - navbarHeight;

      // Calculate the additional offset (adjust as needed)
      var additionalOffset = -10;

      window.scrollTo({
          top: scrollY + additionalOffset,
          behavior: 'smooth'
      });

      if (window.history && window.history.replaceState) {
          history.replaceState(null, null, window.location.pathname + window.location.search);
      }
  }
}


document.getElementById("contact-button").addEventListener("click", function() {
  scrollToContainer("contact-container");
});

document.getElementById("projects-button").addEventListener("click", function() {
  scrollToContainer("projects-container");
});

document.getElementById("contact-menu-button").addEventListener("click", function() {
  scrollToContainer("contact-container");
});

/**
 * sending email responses
 */
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Perform an AJAX request to your PHP script
  fetch('send_email.php', {
      method: 'POST',
      body: new FormData(e.target)
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          // Show a pop-up message indicating success
          alert('Thank you! Your message was successfully sent.');
      } else {
          // Show a pop-up message indicating an error
          alert('An error occurred. Please try again later.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
});

/**
 * Contact button
 */
const contactBtn = document.getElementById('contact-btn');
let isClicked = false;
contactBtn.addEventListener('click', function(){
  isClicked = !isClicked;
  if (isClicked){
    document.getElementById('contact-container').scrollIntoView({behavior: "smooth"});
  }
});

/**
 * Contact form clear
 */
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("form");

  contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const formData = new FormData(contactForm);

      fetch("send_email.php", {
          method: "POST",
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              // Clear the form fields
              contactForm.reset();
              // Optionally, display a success message to the user
          } else {
              // Display an error message to the user
              console.error(data.message);
          }
      })
      .catch(error => {
          console.error("An error occurred:", error);
      });
  });
});













