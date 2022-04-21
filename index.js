import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import { keys } from './config/keys.js';
import userController from './controllers/user.js';

mongoose.connect(keys.mongoURI || process.env.mongoURI);

const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey || process.env.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/api/users', userController);

const PORT = process.env.PORT || 8000;
app.listen(PORT);
