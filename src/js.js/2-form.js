document.addEventListener('DOMContentLoaded', () => {
  const formInputEl = document.querySelector('.feedback-form');

  function formData(event) {
    event.preventDefault();
    const email = formInputEl.elements['userEmail'].value.trim();
    const message = formInputEl.elements['message'].value.trim();
    const formContent = { email, message };
    if (email === '' || message === '') {
      const existingP = document.querySelector('p');
      if (!existingP) {
        const createdMessage = document.createElement('p');
        createdMessage.textContent = 'Fill please all fields';
        createdMessage.style.color = 'red';
        formInputEl.append(createdMessage);
      }
      return;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formContent));
  }

  window.onload = function () {
    const isUserEmail = localStorage.getItem('feedback-form-state');

    if (isUserEmail) {
      const parsetData = JSON.parse(isUserEmail);
      formInputEl.elements['userEmail'].value = parsetData.email;
      formInputEl.elements['message'].value = parsetData.message;
    }
  };

  const sendBtn = document.querySelector('.send');
  sendBtn.addEventListener('click', formData);
});
