import * as ActionType from "../ActionTypes"

export const fetchdata = () => (dispatch) => {
    try {
        dispatch(loading(true))
        setTimeout(() => {
            fetch("http://localhost:3005/Movie")
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Something went wrong');
                })
                .then(data => {
                    dispatch({ type: ActionType.FETCH_TYPE, payload: data })
                })
                .catch(error => {
                    dispatch(errordata(error))
                })
        }, 3000)
    } catch (error) {
        console.log(error);
    }
}

export const adddata = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3005/Movie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong');
            })
            .then(data => {
                dispatch({ type: ActionType.ADD_TYPE, payload: data })
            })
            .catch(error => {
                dispatch(errordata(error))
            })
    } catch (error) {
        console.log(error);
    }
}

export const deleteemployee = (id) => (dispatch) => {
    try {
        fetch("http://localhost:3005/Movie/" + id, {
            method: "DELETE",
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong');
            })
            .then(() => {
                dispatch({ type: ActionType.DELETE_TYPE, payload: id })
            })
            .catch(error => {
                dispatch(errordata(error))
            })
    } catch (error) {
        console.log(error);
    }
}

export const updateemployee = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3005/Movie/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong');
            })
            .then(
                dispatch({ type: ActionType.UPDATE_TYPE, payload: data })
            )
            .catch(error => {
                dispatch(errordata(error))
            })
    } catch (error) {
        console.log(error);
    }
}

export const loading = (status) => (dispatch) => {
    dispatch({ type: ActionType.LOADING_TYPE, payload: status })
}

export const errordata = (errormaesage) => (dispatch) => {
    console.log(errormaesage);
    dispatch({ type: ActionType.ERROR_TYPE, payload: errormaesage })
}