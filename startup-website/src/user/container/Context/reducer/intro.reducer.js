import { INTRODUCTION, TOGGLE_THEME } from "../Actiontypes";

export const IntroReducer = (state, action) => {
    switch (action.type) {
        case INTRODUCTION:
            return {
                intro: action.payload
            }
        default:
            return state;
    }
}