import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		updateUser: (state = initialState, action) => {
			if (action.type === 'user/updateUser') {
				return {
					...state,
					user: action.payload,
				};
			} else {
				return state.user;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;

export default userSlice.reducer;

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
//state.user = user;
//return state.user;
