import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import userController from './controllers/user.js';

mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [process.env.COOKIE_KEY],
	})
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/api/users', userController);

const PORT = process.env.PORT || 8000;
app.listen(PORT);
