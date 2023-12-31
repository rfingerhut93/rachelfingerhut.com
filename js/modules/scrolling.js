export function scrollToContainer(containerId) {
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

  //Checks if website is being displayed on a desktop browser.
  function isDesktopView() {
    return window.matchMedia("(min-width: 993px)").matches;
  }
  
  export function setupScrollButtons() {
    // Scroll to projects-container when projects-button is clicked
  document.getElementById("projects-button").addEventListener("click", function() {
    scrollToContainer("projects-container");
  });
  // Scroll to contact container when contact button is clicked.
    const contactBtns = document.getElementsByClassName("contact-btn"); 
    for (const contactBtn of contactBtns){
      contactBtn.addEventListener('click', function() {
        if (isDesktopView() && this.classList.contains("desktop-scroll")){
          scrollToContainer("contact-container");
        }
        else{
          const pageHeight = document.body.scrollHeight;
        
          window.scrollTo({
          top: pageHeight,
          behavior: 'smooth'
        });
        }
      });
    }
  }
  