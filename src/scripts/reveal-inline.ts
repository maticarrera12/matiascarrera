/** Contenido para script is:inline en Layout — sin imports */
export const REVEAL_BOOT_SCRIPT = `
(function () {
	function replayReveal(root, stagger) {
		if (!root) return;
		var items = root.querySelectorAll(".reveal");
		for (var i = 0; i < items.length; i++) items[i].classList.remove("is-revealed");
		void root.offsetHeight;
		requestAnimationFrame(function () {
			for (var j = 0; j < items.length; j++) {
				(function (el, idx) {
					setTimeout(function () {
						el.classList.add("is-revealed");
					}, idx * stagger);
				})(items[j], j);
			}
		});
	}

	function revealInView() {
		var items = document.querySelectorAll(".reveal");
		for (var i = 0; i < items.length; i++) {
			var el = items[i];
			var r = el.getBoundingClientRect();
			if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
				el.classList.add("is-revealed");
			}
		}
	}

	function setupObserver() {
		if (!window.__revealIO) {
			window.__revealIO = new IntersectionObserver(
				function (entries) {
					for (var i = 0; i < entries.length; i++) {
						if (entries[i].isIntersecting) {
							entries[i].target.classList.add("is-revealed");
						}
					}
				},
				{ threshold: 0.12 },
			);
		}
		document.querySelectorAll(".reveal").forEach(function (el) {
			if (el.dataset.revealObserved) return;
			el.dataset.revealObserved = "1";
			window.__revealIO.observe(el);
		});
	}

	window.goHome = function () {
		replayReveal(document.querySelector(".hero"), 60);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	window.goAbout = function () {
		var section = document.getElementById("sobre-mi");
		if (!section) return;
		replayReveal(section, 80);
		section.scrollIntoView({ behavior: "smooth" });
	};

	function boot() {
		document.documentElement.classList.add("reveal-ready");
		setupObserver();
		revealInView();
	}

	boot();
	document.addEventListener("astro:page-load", function () {
		document.documentElement.classList.add("reveal-ready");
		setupObserver();
		revealInView();
	});
})();
`;
