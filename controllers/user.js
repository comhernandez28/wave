import passport from 'passport';
import express from 'express';
const router = express.Router();
import { User } from '../models/User.js';
import PassportService from '../services/passport.js';

const initStrategy = new PassportService();

router.get('/', async (req, res) => {
	const users = await User.find();
	res.send(users);
});

router.get('/self', (req, res) => {
	//!req.user ? res.send({ data: 'no user' }) : res.send(req.user);
	if (!req.user) {
		throw new Error('No user');
	} else {
		res.send(req.user);
	}
});

router.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

router.get(
	'/auth/google/callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/',
	})
);

router.get('/logout', (req, res) => {
	req.logout();
	delete req.session;
	res.redirect('/');
});

export default router;
