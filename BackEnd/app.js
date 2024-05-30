const express = require('express');
const morgan = require('morgan');
const app=express();
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const bookRouter =require("./routes/bookRoute")
const userRouter =require("./routes/userRoute")
const globalErrorHandler = require('./controllers/errorController');
const AppError = require("./utils/appError");
const cors = require("cors");
// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use(cors());
  //Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

  app.use(express.json());

  app.use((req, res, next) => {
    // eslint-disable-next-line no-console
    console.log('Hello from the middleware 👋');
    next();
  });
   
  //Routes 
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/user", userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports =app; 