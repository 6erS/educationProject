import style from './NavbarFriendsList.module.css'
import NavbarFriends from "../../../../data/Navbar/Friends";
import NavbarFriendsItem from "./NavbarFriendsItem/NavbarFriendsItem";

const NavbarFriendsList = () => {

    let list= NavbarFriends
        .map( user => <NavbarFriendsItem userName={user.name} userAva={user.avaSRC} />);

  return(
      <div className={style.conteiner}>
          {list}
      </div>
  );
}

export default NavbarFriendsList;