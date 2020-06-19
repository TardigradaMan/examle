const authRoutes = require('./routes/auth.routes');
const applicationsRoutes = require('./routes/applications.routes');
const contentRoutes = require('./routes/content.routes');

const keys = require('./keys');
const passportStrategy = require('./middleware/passport-strategy');
const passport = require('passport');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose
  .connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB local connected.....'))
  .catch((error) => console.error(error));

app.use(passport.initialize());

passport.use(passportStrategy);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/applications', applicationsRoutes);
app.use('/api/content', contentRoutes);

module.exports = app;
