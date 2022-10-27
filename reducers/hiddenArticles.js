import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hiddenArticlesSlice = createSlice({
	name: 'hiddenArticles',
	initialState,
	reducers: {
        saveArticles: (state, action) => {
            console.log(state.value)
			state.value.push(action.payload);
		},
        displayArticles: (state) => {
            state.value = []
        }
    }}) 

export const { saveArticles, displayArticles } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;