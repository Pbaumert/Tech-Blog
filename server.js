const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Set up your sequelize connection (from config)
const sequelize = require('./config/connection');

// Import routes and helpers

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js as template engine
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Session configuration
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Routes
app.use(require('./controllers/'));

// Start server and sync sequelize
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});
