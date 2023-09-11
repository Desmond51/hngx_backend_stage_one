const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const corsOptions = {
    origin: [
        "*",
    ],
    credentials: true,
    optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());

//use session to enable passing cookies between different domains
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: "session",
        cookie: {
            maxAge: 1000 * 60 * 60,
            sameSite: "none", //set to true if F.E. is on production
            secure: false,
        },
    })
);
app.use(express.json({ limit: "10kb" }));

const mainRouter = require('./route/mainRoute')


app.use('/', mainRouter)


module.exports = app;
