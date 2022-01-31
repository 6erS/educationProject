import style from './Like.module.css'
import {useState} from "react";

const LikeCount = (props) => {
    const [likes, setLikes] = useState((Number)(props.count))

    function increment() {
        setLikes(likes+1);
    }

    return (
        <div className={style.item}>
            <button onClick={increment}>{`Like: ${likes}`}</button>
        </div>
    );
}

export default LikeCount;