import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import {Container} from "inversify";

require('require-all')(__dirname);

const server = express();
// server.set('port', (process.env.PORT || 3000));

server.use('/', express.static(path.join(__dirname, '../public')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));



const container = new Container();
const inversifyServer = new InversifyExpressServer(container, null, null, server);
const app = inversifyServer.build();
app.listen(3000);
// const app = server;
export { app };
