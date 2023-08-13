import { startRoughAnnotation } from './modules/annotations';
import { setupBurgerMenu, setupMenuLinks } from './modules/navigation';
import { scrollToContainer, setupScrollButtons } from './modules/scrolling';
import { setupContactForm } from './modules/formHandling';
import { setupIntersectionObserver } from './modules/intersection';

// Initialize annotation on intersection
function initializeAnnotations() {
  const webDev = document.getElementById('web-developer');
  const projectTitle = document.getElementById('project-title');
  const contactTitle = document.getElementById('contact-title');

  setupIntersectionObserver(webDev, startRoughAnnotation);
  setupIntersectionObserver(projectTitle, startRoughAnnotation);
  setupIntersectionObserver(contactTitle, startRoughAnnotation);
}

// Initialize other components
function initializeComponents() {
  setupBurgerMenu();
  setupMenuLinks();
  setupScrollButtons();
  setupContactForm();
  
  // Scroll to projects-container when projects-button is clicked
  document.getElementById("projects-button").addEventListener("click", function() {
    scrollToContainer("projects-container");
  });
}

// Call initialization functions when the document is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeAnnotations();
  initializeComponents();
});
