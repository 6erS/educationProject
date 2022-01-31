import style from './Dialog.module.css'
import SeparetedMassage from './SeparetedMassage/SeparetedMassage';
import massages from "../../../../data/massageState";

let massagesList = massages.MassagesPage.massages
    .map(m => <SeparetedMassage ava={m.avaSRC} massage={`${m.text}`}/>);

const Dialog = (props) => {
    return (
        <div className={style.container}>
            {massagesList}
            <div className={style.massageInput} >
                <textarea value="type your massage..." ></textarea>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Dialog; 