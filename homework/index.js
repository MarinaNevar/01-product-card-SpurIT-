const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
	accordion.onclick = function () {
		this.classList.toggle("is-open");
		let content = this.nextElementSibling;
		content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
	};
});
