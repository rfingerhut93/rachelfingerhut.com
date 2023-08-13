export function setupContactForm() {
  const contactForm = document.getElementById('form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');

    const formData = new FormData(contactForm);
    console.log('Form data:', formData);

    fetch('../../php/send_email.php', {
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
}
