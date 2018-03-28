import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import {ServiceLocator} from './service-locator/service-locator';
import {DatabaseManager} from './database/database-manager';
import TYPES from './database/types';

require('require-all')(__dirname);

const server = express();
// server.set('port', (process.env.PORT || 3000));

server.use('/', express.static(path.join(__dirname, '../public')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));


const inversifyServer = new InversifyExpressServer(ServiceLocator.Instance.Container, null, null, server);
const app = inversifyServer.build();
app.listen(3000);
// const app = server;

const initDb = () => {
  ServiceLocator.Instance.Container.get<DatabaseManager>(TYPES.DatabaseManager).createDatabase('_user');
}

initDb()

export { app };
