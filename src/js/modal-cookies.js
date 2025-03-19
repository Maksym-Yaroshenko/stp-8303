document.addEventListener('DOMContentLoaded', () => {
  const modalCookies = document.querySelector('.modal-cookies');
  const acceptButton = document.querySelector('.accept-button');
  const declineButton = document.querySelector('.decline-button');

  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => modalCookies.classList.add('is-open'), 3000);
  }

  const closeModal = () => {
    modalCookies.classList.remove('is-open');
  };

  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    closeModal();
  });

  declineButton.addEventListener('click', closeModal);
});
