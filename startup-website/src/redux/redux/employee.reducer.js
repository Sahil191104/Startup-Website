import * as ActionType from "../ActionTypes"

const initState = {
    employee: [],
    loading: false,
    error: null
}

export const employeereducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.ERROR_TYPE:
            return {
                employee: [],
                loading: false,
                error: action.payload
            }
        case ActionType.LOADING_TYPE:
            return {
                employee: [],
                loading: action.payload,
                error: null
            }
        case ActionType.FETCH_TYPE:
            return { ...state, employee: action.payload, loading: false }
        case ActionType.ADD_TYPE:
            return { ...state, employee: state.employee.concat(action.payload) }
        case ActionType.DELETE_TYPE:
            return { ...state, employee: state.employee.filter((v) => v.id != action.payload) }
        case ActionType.UPDATE_TYPE:
            return {
                ...state, employee: state.employee.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return v;
                    }
                })
            }
        default:
            return state
    }
}