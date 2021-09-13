import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const escapeHtml = require('escape-html');

const sayHello = (requestQueryName, requestBodyName) =>
  `Hello, ${escapeHtml(requestQueryName || requestBodyName || 'world')}!`;

export { sayHello };
