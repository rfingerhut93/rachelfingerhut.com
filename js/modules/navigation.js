export function setupBurgerMenu() {
    let burger = document.getElementById('burger'),
        nav    = document.getElementById('main-nav');
  
    burger.addEventListener('click', function(e){
        this.classList.toggle('is-open');
        nav.classList.toggle('is-open');
    });
  }
  
  export function setupMenuLinks() {
    const menuLinks = document.querySelectorAll('.main-nav li');
  
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            menuLinks.forEach(link => link.classList.remove('selected'));
            this.classList.add('selected');
            burger.classList.remove('is-open');
            nav.classList.remove('is-open');
        });
    });
  }