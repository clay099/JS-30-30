const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegs = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegs}deg)`;

	const minutes = now.getMinutes();
	const minDegs = (minutes / 60) * 360 + 90;
	minHand.style.transform = `rotate(${minDegs}deg)`;

	const hours = now.getHours();
	const hourDegs = (hours / 60) * 360 + 90;
	hourHand.style.transform = `rotate(${hourDegs}deg)`;
}

setInterval(setDate, 1000);
