import Minilog from "minilog";


var log = Minilog("router");

const loggingInterceptor = (request, response, next) => {
    log.debug(`${request.method} ${request.path}`);
    next();
};


export default loggingInterceptor;