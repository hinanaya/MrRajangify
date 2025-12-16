(new MutationObserver(() =>
	document.querySelectorAll('ytd-thumbnail yt-image, .ytp-videowall-still-image')
		.forEach(e => {
			if (e.classList.contains('rajangify')) {
				return;
			}

			let img = document.createElement('img');

			img.src = browser.runtime.getURL(`img/monster${Math.floor(Math.random()*8)+1}.png`);
			img.style.position = 'absolute';
			img.style.width = '100%';
			img.style.left = 0;
			img.style.bottom = 0;
			img.style.objectFit = 'cover';

			e.append(img);
			e.classList.add('rajangify');
		})
)).observe(document.querySelector('ytd-page-manager'), {subtree: true, childList: true});