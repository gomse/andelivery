import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs-locals';
import morgan from 'morgan';
import routes from './routes';

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('ejs', ejs);

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended':'true'}));
app.use(express.static(`${__dirname}/public`));
app.use('', routes);

app.listen(process.env.PORT, () => console.log('Server listening on port ' + process.env.PORT));

export default app;
