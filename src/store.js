import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/slices/searchSlice";
import cardsReducer from "./features/slices/cardsSlice";

const store = configureStore({
    reducer: {
        search: searchReducer,
        cards: cardsReducer
    }
})

export default store;