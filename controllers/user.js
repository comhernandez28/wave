// const passport = require('passport');
// const express = require('express');
// const router = express.Router();

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
	//UserService.getUserById(req.user.id);
	!req.user ? res.send('no user') : res.send(req.user);

	//return req.user;
});

router.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

router.get('logout', (req, res) => {
	req.logout();
});

router.get('/auth/google/callback', passport.authenticate('google'));

export default router;

// module.exports = (app) => {
// 	app.get(
// 		'/auth/google',
// 		passport.authenticate('google', {
// 			scope: ['profile', 'email'],
// 		})
// 	);

// 	app.get('/api/self', (req, res) => {
// 		UserService.getUserById(req.user.id);
// 		return req.user;
// 	});

// 	app.get('api/logout', (req, res) => {
// 		req.logout();
// 	});

// 	app.get('/auth/google/callback', passport.authenticate('google'));
// };
