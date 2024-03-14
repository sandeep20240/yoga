const tilt = document.querySelectorAll(".tilt");

VanillaTilt.init(tilt, {
	reverse: true,
	max: 15,
	speed: 300,
	scale: 1,
	glare: true,
	reset: true,
	perspective: 500,
	transition: true,
	"max-glare": 0.45,
	"glare-prerender": false,
	gyroscope: true,
	gyroscopeMinAngleX: -30,
	gyroscopeMaxAngleX: 30,
	gyroscopeMinAngleY: -30,
	gyroscopeMaxAngleY: 30
});
