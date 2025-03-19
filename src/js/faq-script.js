const faqItems = document.querySelectorAll('.item-faq');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    faqItems.forEach(i => {
      i.classList.remove('active');
    });

    if (!isActive) {
      item.classList.add('active');
    }
  });
});
