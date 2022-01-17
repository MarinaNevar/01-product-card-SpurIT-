var collapsFlag = false;

const anim = document
	.querySelector(".collapsible__content")
	.animate(
		{height: ["0px", "60px"]},
		{duration: 250, fill: "both", easing: "ease-out"}
	);

anim.pause();

document.querySelector(".collapsible__action--visible").style.display = "none";

document.querySelector(".collapsible__button").addEventListener("click", () => {
	if (anim.playState === "paused") {
		anim.play();
	} else {
		anim.reverse();
	}
	changeButtonLabel();
	collapsFlag = !collapsFlag;
});

window.onload = function () {
	var collapsibleElement = document.querySelector(".collapsible__content");
	collapsibleElement.style.overflow = "hidden";
	collapsibleElement.style.background = "#f6efef";
	collapsibleElement.style.width = "600px";
}

function changeButtonLabel() {
	document.querySelector(".collapsible__action--visible").style.display = collapsFlag ? "none" : "initial";
	document.querySelector(".collapsible__action--hidden").style.display = collapsFlag ? "initial" : "none";
}
