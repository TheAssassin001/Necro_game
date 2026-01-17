// main.js - Necrowarp site JavaScript
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

	// --- Gallery Carousel Logic ---
	// Video carousel
	var videoMedia = document.getElementById('video-media');
	var videoPrev = document.getElementById('video-prev');
	var videoNext = document.getElementById('video-next');
	if (videoMedia && videoPrev && videoNext) {
		var videos = Array.from(videoMedia.children);
		var videoIndex = 0;
		function showVideo(idx) {
			videos.forEach(function(v, i) {
				v.style.display = (i === idx) ? '' : 'none';
			});
		}
		showVideo(videoIndex);
		videoPrev.addEventListener('click', function() {
			videoIndex = (videoIndex - 1 + videos.length) % videos.length;
			showVideo(videoIndex);
		});
		videoNext.addEventListener('click', function() {
			videoIndex = (videoIndex + 1) % videos.length;
			showVideo(videoIndex);
		});
	}

	// Image carousel with thumbnails
	var imgMedia = document.getElementById('img-media');
	var imgPrev = document.getElementById('img-prev');
	var imgNext = document.getElementById('img-next');
	var imgThumbs = document.getElementById('img-thumbnails');
	if (imgMedia && imgPrev && imgNext) {
		var imgs = Array.from(imgMedia.children);
		var imgIndex = 0;
		function showImg(idx) {
			imgs.forEach(function(img, i) {
				img.style.display = (i === idx) ? '' : 'none';
			});
			// Highlight thumbnail if present
			if (imgThumbs) {
				Array.from(imgThumbs.children).forEach(function(thumb, i) {
					if (i === idx) {
						thumb.classList.add('selected');
					} else {
						thumb.classList.remove('selected');
					}
				});
			}
		}
		showImg(imgIndex);
		imgPrev.addEventListener('click', function() {
			imgIndex = (imgIndex - 1 + imgs.length) % imgs.length;
			showImg(imgIndex);
		});
		imgNext.addEventListener('click', function() {
			imgIndex = (imgIndex + 1) % imgs.length;
			showImg(imgIndex);
		});
		// Thumbnail click selection
		if (imgThumbs) {
			Array.from(imgThumbs.children).forEach(function(thumb, i) {
				thumb.addEventListener('click', function() {
					imgIndex = i;
					showImg(imgIndex);
				});
			});
		}
	}
});
