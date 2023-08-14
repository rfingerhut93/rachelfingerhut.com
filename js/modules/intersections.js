export function setupIntersectionObserver(targetElement, callback) {
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
  