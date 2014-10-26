var mongoose = require('../libs/mongoose');

// Выставляем modelName
var modelName = 'entities';
// Подгружаем стандартные метода для CRUD документов
var handlers = require('../libs/crudHandlers')(modelName);

module.exports = handlers;