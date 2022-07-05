let data = [], majorRadius = 100;

function updateData() {
	data = [
		Math.random() * 2 * Math.PI, 
		Math.random() * 2 * Math.PI, 
		Math.random() * 2 * Math.PI];
}

function getCurrentAngle(el) {
	let x = d3.select(el).attr('cx');
	let y = d3.select(el).attr('cy');
	return Math.atan2(y, x);
}

function update() {
	d3.select('svg g')
		.selectAll('circle')
		.data(data)
		.join('circle')
		.attr('r', 7)
 		.transition()
		.duration(1000)
		.tween('circumference', function(d) {
			let currentAngle = getCurrentAngle(this);
			let targetAngle = d;

			// Ensure shortest path is taken
			if (targetAngle - currentAngle > Math.PI) {
				targetAngle -= 2 * Math.PI;
			}
			else if (targetAngle - currentAngle < -Math.PI) {
				targetAngle += 2 * Math.PI;
			}

			let i = d3.interpolate(currentAngle, targetAngle);

			return function(t) {
				let angle = i(t);

				d3.select(this)
					.attr('cx', majorRadius * Math.cos(angle))
					.attr('cy', majorRadius * Math.sin(angle));
			}
		});
}

function updateAll() {
	updateData();
	update();
}

updateAll();
	
