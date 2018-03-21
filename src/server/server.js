"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_express_utils_1 = require("inversify-express-utils");
const bodyParser = require("body-parser");
require("./api/hello-world");
const ServiceLocator_1 = require("./ServiceLocator");
const port = 1111;
const server = new inversify_express_utils_1.InversifyExpressServer(ServiceLocator_1.ServiceLocator.getInstance().container);
server.setConfig(function (app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});
let serverInstance = server.build();
serverInstance.listen(port);
console.log(`Server started on port ${port} :)`);
//
// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname, './index.html'));
// });
// app.get('/api',function(req,res){
//     res.send('<p>This is a api Data</p>');
// });
// app.listen(port,function(error){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("Application running on port: "+port);
//     }
// })
//# sourceMappingURL=server.js.map