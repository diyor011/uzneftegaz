// src/redux/languageSlice.js
const initialState = {
    lang: localStorage.getItem("lang") || "uz",
};

export default function languageReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_LANGUAGE":
            return { ...state, lang: action.payload };
        default:
            return state;
    }
}
