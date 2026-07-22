const menuCheckbox = document.querySelector('#menu-checkbox');

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (menuCheckbox) menuCheckbox.checked = false;
  });
});

const form = document.querySelector('#contact-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('Website project inquiry');
  const body = encodeURIComponent(
`Name: ${data.get('name')}
Phone: ${data.get('phone')}
Email: ${data.get('email') || ''}
Project location: ${data.get('location') || ''}

Project details:
${data.get('message')}`
  );
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
 else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
