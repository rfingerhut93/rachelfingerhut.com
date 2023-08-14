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
  
  export function setupScrollButtons() {
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
  }
  