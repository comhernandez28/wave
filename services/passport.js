import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import { keys } from '../config/keys.js';
import { User } from '../models/User.js';

export default class PassportService {
	serializeUser = passport.serializeUser((user, next) => {
		next(null, user.id);
	});

	deserializeUser = passport.deserializeUser(async (id, next) => {
		const user = await User.findById(id);
		next(null, user);
	});

	useGoogleStrategy = passport.use(
		new GoogleStrategy(
			{
				clientID: keys.googleClientID,
				clientSecret: keys.googleClientSecret,
				callbackURL: '/api/users/auth/google/callback',
			},
			async (accessToken, refreshToken, profile, next) => {
				//profile
				// id: '101915116557091285283',
				// [0]   displayName: 'Omar Hernandez',
				// [0]   name: { familyName: 'Hernandez', givenName: 'Omar' },
				// [0]   emails: [ { value: 'comhernandez28@gmail.com', verified: true } ],
				// [0]   photos: [
				// [0]     {
				// [0]       value: 'https://lh3.googleusercontent.com/a-/AOh14GisFPAZdQX2Lqh2BFPJ06P-r6c7QtCVW1Z-TK4H=s96-c'
				// [0]     }
				// [0]   ],
				const existingUser = await User.findOne({ googleId: profile.id });
				if (existingUser) {
					//login2
					next(null, existingUser);
				} else {
					const newUser = await new User({
						googleId: profile.id,
						displayName: profile.displayName,
						firstName: profile.givenName,
						lastName: profile.familyName,
						email: profile.emails[0].value,
						profilePicture: profile.photos[0].value,
					}).save();

					next(null, newUser);
				}
			}
		)
	);
}
