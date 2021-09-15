const escapeHtml = require('escape-html');

const sayHello = (requestQueryName, requestBodyName) =>
  `Hello, ${escapeHtml(requestQueryName || requestBodyName || 'world')}!`;

module.exports = { sayHello };
