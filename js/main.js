/* ============================================================
   AOS INIT
   ============================================================ */
AOS.init({
  duration:  700,
  easing:    'ease-out-cubic',
  once:      true,
  offset:    60,
  delay:     0,
});

/* ============================================================
   NAVBAR: shrink on scroll + active link highlighting
   ============================================================ */
const mainNav  = document.getElementById('mainNav');
const sections = Array.from(document.querySelectorAll('section[id]'));
const navLinks = Array.from(document.querySelectorAll('#navMenu .nav-link'));

function onScroll() {
  // Shrink navbar
  if (window.scrollY > 40) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }

  // Highlight active nav link based on scroll position
  const scrollMid = window.scrollY + window.innerHeight / 3;
  let current = sections[0].id;

  sections.forEach(function(sec) {
    if (sec.offsetTop <= scrollMid) {
      current = sec.id;
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // Run once on load to set initial state

/* ============================================================
   MOBILE NAV: collapse on anchor link click
   ============================================================ */
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    var bsCollapse = document.getElementById('navMenu');
    if (bsCollapse.classList.contains('show')) {
      var toggler = document.querySelector('.navbar-toggler');
      toggler.click();
    }
  });
});

/* ============================================================
   CONTACT FORM: Formspree AJAX submission
   ============================================================ */
var contactForm = document.getElementById('contactForm');
var formStatus  = document.getElementById('formStatus');
var submitBtn   = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    formStatus.style.display = 'none';

    var formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method:  'POST',
      body:    formData,
      headers: { 'Accept': 'application/json' },
    })
    .then(function(response) {
      if (response.ok) {
        formStatus.style.display = 'block';
        formStatus.innerHTML = '<div class="form-status-ok"><i class="fas fa-check-circle me-2"></i>Message sent. I will get back to you soon.</div>';
        contactForm.reset();
      } else {
        return response.json().then(function(data) {
          throw new Error(data.errors ? data.errors.map(function(e){ return e.message; }).join(', ') : 'Submission failed');
        });
      }
    })
    .catch(function() {
      formStatus.style.display = 'block';
      formStatus.innerHTML = '<div class="form-status-err"><i class="fas fa-exclamation-circle me-2"></i>Something went wrong. Please email me directly.</div>';
    })
    .finally(function() {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Send Message';
      formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}

/* ============================================================
   SMOOTH SCROLL OFFSET: account for fixed navbar height
   Intercept anchor clicks and scroll with offset so headings
   are not hidden behind the fixed navbar.
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var targetId = this.getAttribute('href').slice(1);
    if (!targetId) return;
    var target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    var navHeight = mainNav.offsetHeight;
    var top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });
});
