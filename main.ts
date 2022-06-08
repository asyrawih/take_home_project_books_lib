import express, { Express } from 'express';
import { book, orderBook } from './routes/book.route';
import { main } from './routes/main.route';

import morgan from 'morgan';

const app: Express = express();

app.use(express.json());
app.use(morgan('dev'));
app.get('/', main);
app.get('/books', book);
app.post('/books', orderBook);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
