// import register from 'ignore-styles';
import express from 'express';
import proxy from 'express-http-proxy';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import ssr from './ssr';

const app = express();

app.use(cors());
app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', proxy('http://localhost:3004'));

/**
 * Cache static File
 */
app.use(
  express.static(path.resolve(__dirname, '..', 'build'), {
    index: false,
    etag: false,
    // maxAge: '30d'
  }),
);

app.use(ssr);

console.log('path', path.resolve(__dirname, '..', 'build'));

const port = process.env.PORT || 3030;
app.listen(port, function listenHandler() {
  console.info(`Running on port ${port} ...`);
});
