const helloService = require('./service/hello.js');

/**
 * HTTP Cloud Function.
 *
 * @param {Object} request Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} response Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.helloHttp = (request, response) => {
  response.send(helloService.sayHello(request.query.name, request.body.name));
};
