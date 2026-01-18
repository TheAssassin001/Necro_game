// main.js - Placeholder for Necrowarp site JavaScript
// Responsive navigation toggle
document.addEventListener('DOMContentLoaded', function () {
	var navToggle = document.getElementById('nav-toggle');
	var navMenu = document.getElementById('nav-menu');
	if (navToggle && navMenu) {
		navToggle.addEventListener('click', function () {
			var expanded = navToggle.getAttribute('aria-expanded') === 'true';
			navToggle.setAttribute('aria-expanded', !expanded);
			navMenu.classList.toggle('open');
		});
		// Keyboard accessibility: close menu with Escape
		navToggle.addEventListener('keydown', function (e) {
			if (e.key === 'Escape') {
				navToggle.setAttribute('aria-expanded', 'false');
				navMenu.classList.remove('open');
				navToggle.focus();
			}
		});
	}
});
