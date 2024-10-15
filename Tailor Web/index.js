
const form = document.getElementById('contact-form');
const sendAndResetButton = document.querySelector('.bttn');

sendAndResetButton.addEventListener('click', () => {
  const formData = new FormData(form);
  emailjs.sendForm('your_service_id', 'your_template_id', formData)
    .then(() => {
      console.log('Form submitted successfully!');
      form.reset(); // reset the form after submission
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
    });
});

