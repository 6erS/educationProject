import style from './NavbarFriendsItem.module.css'
import {NavLink} from "react-router-dom";

const NavbarFriendsItem = (props) => {
    return (
        <div className={style.container}>
            <NavLink to={props.userName} className={NavData => NavData.isActive ? style.active : style.link}>
                <img src={props.userAva}/>
                <div>{props.userName}</div>
            </NavLink>
        </div>
    );
}

export default NavbarFriendsItem;