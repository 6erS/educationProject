import style from "./ProfileInfo.module.css";
import profileInfoState from "../../../../../data/Profile/profileInfoState";

const ProfileInfo = () => {
    return (
        <div className={style.info}>
            <img src={profileInfoState.avaSRC} alt='' />
            <span>{profileInfoState.description}</span>
        </div>
    );
}

export default ProfileInfo;