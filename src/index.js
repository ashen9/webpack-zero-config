// index
const hello = require('./hello');
const world = require('./world');
const fn = () => {
	console.log('a');
};
fn();
console.log(`${hello} ${world}`);
