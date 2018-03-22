import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import 'reflect-metadata';
import setRoutes from './routes';
import { InversifyExpressServer } from 'inversify-express-utils';
import {Container} from "inversify";

import './controllers/home'

const server = express();
dotenv.load({ path: '.env' });
// server.set('port', (process.env.PORT || 3000));

server.use('/', express.static(path.join(__dirname, '../public')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

let mongodbURI;
if (process.env.NODE_ENV === 'test') {
  mongodbURI = process.env.MONGODB_TEST_URI;
} else {
  mongodbURI = process.env.MONGODB_URI;
  server.use(morgan('dev'));
}

mongoose.Promise = global.Promise;
const mongodb = mongoose.connect(mongodbURI);

mongodb
  .then((db) => {
    console.log('Connected to MongoDB');

    setRoutes(server);


    if (!module.parent) {
      server.listen(server.get('port'), () => {
        console.log('Angular Full Stack listening on port ' + server.get('port'));
      });
    }

  })
  .catch((err) => {
    console.error(err);
});


const container = new Container();
const inversifyServer = new InversifyExpressServer(container, null, null, server);
const app = inversifyServer.build();
app.listen(3000)
// const app = server;
export { app };
