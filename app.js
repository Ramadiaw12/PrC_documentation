const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


(function() {
  var navItems = document.querySelectorAll('.docs-nav-item');
  var pages = document.querySelectorAll('.docs-page');
  navItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      var sectionId = this.dataset.section;
      navItems.forEach(function(n) { n.classList.remove('active'); });
      this.classList.add('active');
      pages.forEach(function(p) { p.classList.remove('active'); });
      var target = document.getElementById('page-' + sectionId);
      if (target) target.classList.add('active');
    });
  });
})();