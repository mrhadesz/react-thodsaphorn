const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//bring routes
const indexRoutes = require('./routes/index');
//const productRoutes = require('./routes/product');
//const blogRoutes = require('./routes/blog');
//const authRoutes = require('./routes/auth');
//const userRoutes = require('./routes/user');
//const categoryRoutes = require('./routes/category');
//const tagRoutes = require('./routes/tag');
//const formRoutes = require('./routes/form');

//app
const app = express();

//db
mongoose
.connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
.then(() => console.log('DB Connected'))
.catch(err => {
console.log(err);
});

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if (process.env.NODE_ENV === 'development') {
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//routes midlleware
app.use('/api', indexRoutes);
//app.use('/api', productRoutes);
//app.use('/api', blogRoutes);
//app.use('/api', authRoutes);
//app.use('/api', userRoutes);
//app.use('/api', categoryRoutes);
//app.use('/api', tagRoutes);
//app.use('/api', formRoutes);

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
console.log(`Server runing on http://localhost:${port}`);
});