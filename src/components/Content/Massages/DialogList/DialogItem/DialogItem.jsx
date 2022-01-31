import style from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={style.dialog_head}>
            <NavLink className={NavData => NavData.isActive ? style.active : style.link} to={props.id}>{props.author}</NavLink>
        </div>
    );
}

export default DialogItem;