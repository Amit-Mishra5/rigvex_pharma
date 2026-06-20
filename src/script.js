// Rigvex Pharma — site interactions

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggleBtn = document.querySelector('.nav-toggle');
  var navList = document.getElementById('navList');
  if (toggleBtn && navList) {
    toggleBtn.addEventListener('click', function () {
      navList.classList.toggle('open');
    });
  }

  // Dummy contact form submit handler
  var form = document.querySelector('#contact form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('This is a dummy form — connect it to an email service or backend to receive real messages.');
    });
  }
});