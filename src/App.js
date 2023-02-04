import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser} from "./redux/store";

function App() {
    const dispatch = useDispatch();
    const data = useSelector(state => {
        console.log(state)
        return state
    })
    useEffect(() => {
        console.log('render')
    }, [])
    useEffect(() => {
        console.log('re-render')
    })
    return (
        <>
            <h1>Demo</h1>
            <button onClick={
                () => {
                    dispatch(getUser())
                }
            }>Check
            </button>
        </>
    );
}

export default App;
