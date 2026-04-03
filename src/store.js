import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/slices/categorySlice";
import cardsReducer from "./features/slices/cardsSlice";

const store = configureStore({
    reducer: {
        category: categoryReducer,
        cards: cardsReducer
    }
})

export default store;