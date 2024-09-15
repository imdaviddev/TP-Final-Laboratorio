import createError from 'http-errors';
import app from '../index';

app.use((req, res, next) => {
  next(createError(404));
});
