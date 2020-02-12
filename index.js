var canvas = document.getElementById('canvas');
canvas.width = 1280;
canvas.height = 720;
var ctx = canvas.getContext('2d');


var	vertixCount = 20
var colourPallete = [
	'#f26100',
	'#c25004',
	'#943c01',
]

main();

function main() {
	ctx.clearRect(0,0,canvas.width, canvas.height)
	createMainMountain(300, colourPallete[2]);
	createMountian(200, colourPallete[1]);
	createMountian(100, colourPallete[0]);

}

function createMountian(yOffset,colour) {
	ctx.fillStyle = colour;
	ctx.beginPath();
	ctx.moveTo(0, canvas.height-((Math.random())*100)-yOffset);
	for (var i = 0;i < vertixCount;i++) {
		ctx.lineTo((canvas.width/vertixCount)*(i+1), canvas.height-((Math.random())*100)-yOffset);
	}
	ctx.lineTo(canvas.width,canvas.height);
	ctx.lineTo(0,canvas.height)
	ctx.fill();
}

function createMainMountain(yOffset,colour) {
	ctx.fillStyle = colour;
	ctx.beginPath();
	ctx.moveTo(0, canvas.height-((Math.random())*100)-yOffset);
	for (var i = 0;i < vertixCount;i++) {
		ctx.lineTo((canvas.width/vertixCount)*(i+1), canvas.height-((Math.random())*100)-yOffset);
	}
	ctx.lineTo(canvas.width,canvas.height);
	ctx.lineTo(0,canvas.height)
	ctx.fill();
}