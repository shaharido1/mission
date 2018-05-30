import { routes } from './routes/routesFunction';

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const morgan = require('morgan');
import { appConfig } from './config/appConfig';


app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


app.set('port', appConfig.port);
routes(app);

server.listen(appConfig.port, () => {

  console.log(`running on localhost:${appConfig.port}`);

});

export default app;