import mongoose from 'mongoose';
const { Schema, model } = mongoose;

export const userSchema = new Schema({
	googleId: String,
	displayName: String,
	firstName: String,
	lastName: String,
	email: String,
	profilePicture: String,
});

export const User = model('User', userSchema);
