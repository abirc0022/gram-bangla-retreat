(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  menuToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('visible'));

  document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item === button));
      const filter = button.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter);
      });
    });
  });

  const lightbox = document.querySelector('#lightbox');
  const lightboxImage = lightbox?.querySelector('img');
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = item.dataset.full || item.querySelector('img').src;
      lightboxImage.alt = item.querySelector('img').alt;
      if (typeof lightbox.showModal === 'function') lightbox.showModal();
    });
  });
  lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
  lightbox?.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });

  const openWhatsApp = details => {
    const message = [
      'Hello Gram Bangla Retreat, I would like to enquire.',
      '',
      ...details.filter(Boolean)
    ].join('\n');
    window.open('https://wa.me/919836310106?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
  };
  document.querySelector('#quickEnquiry')?.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    openWhatsApp(['Plan: ' + data.get('interest'), 'Guests: ' + data.get('guests')]);
  });
  document.querySelector('#contactForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    openWhatsApp([
      'Name: ' + data.get('name'),
      'Email: ' + data.get('email'),
      'Phone: ' + (data.get('phone') || 'Not provided'),
      'Enquiry: ' + data.get('plan'),
      'Details: ' + (data.get('message') || 'Not provided')
    ]);
  });
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();