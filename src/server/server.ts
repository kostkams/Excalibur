import 'reflect-metadata'

import {InversifyExpressServer} from 'inversify-express-utils'
import * as bodyParser from 'body-parser'
import './api/hello-world/hello-world'
import {ServiceLocator} from './ServiceLocator'


const port = 1111;

const server = new InversifyExpressServer(ServiceLocator.getInstance().container);

server.setConfig(function(app) {
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