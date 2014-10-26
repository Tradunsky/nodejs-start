//3 типа модулей: js, node(нативный модуль, копилить с С), json
var user = require('./user');

var slavik = new user.User("Славик");
var lesha = new user.User("Леша"); 

slavik.hello(lesha);