import style from './News.module.css';
import {useCallback, useState} from "react";

const News = (props) => {

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1);
    }

    return (
        <div>
            <button onClick={increment}>{count}</button>
            <button onClick={decrement}>{count}</button>
        </div>
    );
}

export default News;