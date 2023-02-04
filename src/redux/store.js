import {applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk";
import axios from "axios";

const setupStore = (initialState, action) => {
    console.log(action)
    if (action.type == 'students') {
        return action.data
    }
    return {
        name: 'hello'
    }
}

export const getUser = () => {
    return async dispatch => {
        const response = await axios.get("http://localhost:3001/students");
        dispatch({
            type: 'students', data: response.data
        });
    };
};


const store = createStore(setupStore, applyMiddleware(thunk))

export default store
