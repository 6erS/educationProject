import style from './SeparetedMassage.module.css'

const SeparetedMassage = (props) => {
    return (
        <div className={style.massage}>
            <img className={style.ava} src={props.ava} />
            <span className={style.massage_text}>
                {props.massage}
            </span>
        </div>
    );
}

export default SeparetedMassage;