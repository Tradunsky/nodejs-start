var phrases = require('./ru');

function User (name) {
	this.name = name;
}

User.prototype.hello = function(who) {
	console.log(phrases.Hello+', '+who.name);
};

// console.log('users.js is required!');
// global.User = User; //глобальная переменная, на практике практически не используется. Лучше так не делать. 
exports.User = User;