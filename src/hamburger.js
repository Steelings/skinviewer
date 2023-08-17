
  const mobileMenuButton = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');
  const mobileMenu = document.getElementById('mobile-menu-2');


  mobileMenuButton.addEventListener('click', () => {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
  });


  const menuItems = mobileMenu.querySelectorAll('a');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.add('hidden');
    });
  });