import { createContext, useReducer } from "react";
import { IntroReducer } from "./reducer/intro.reducer";
import { INTRODUCTION } from "./Actiontypes";

export const IntroContext = createContext();

const initialval = {
    intro: "yes"
}

export const IntroProvider = ({ children }) => {
    const [state, dispatch] = useReducer(IntroReducer, initialval);

    const introdata = (intro) => {
        const introduction = intro === 'yes' ? 'no' : 'yes';

        dispatch({ type: INTRODUCTION, payload: introduction })
    }

    return (
        <IntroContext.Provider
            value={{
                ...state,
                introdata
            }}
        >
            {children}
        </IntroContext.Provider>
    )
}