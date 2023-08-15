
import { scrollToContainer, setupScrollButtons } from './modules/scrolling.js';
import { setUpMenu } from './modules/navigation.js';
import { setupContactForm } from './modules/formHandling.js';
import { setupIntersectionObserver } from './modules/intersections.js';
import { startRoughAnnotation } from './modules/annotations.js';

// Initialize annotation on intersection
function initializeAnnotations() {
  const webDev = document.getElementById('web-developer');
  const projectTitle = document.getElementById('project-title');
  const contactTitle = document.getElementById('contact-title');


  setupIntersectionObserver(webDev, startRoughAnnotation);
  setupIntersectionObserver(projectTitle, startRoughAnnotation);
  setupIntersectionObserver(contactTitle, startRoughAnnotation);
}

// Initialize other components (Menu, Scrolling, Contact Form Submission)
function initializeComponents() {
  setupScrollButtons();
  setUpMenu();
  setupContactForm();
}

// Call initialization functions when the document is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeAnnotations();
  initializeComponents();
});
