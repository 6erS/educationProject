import style from './NavbarFriens.module.css'
import NavbarFriendsList from "./NavFriendsList/NavbarFriendsList";

const NavbarFriends = () => {
    return (
        <div className={style.friendsBlock}>
            <NavbarFriendsList/>
        </div>
    );
}

export default NavbarFriends;