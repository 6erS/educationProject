import DialogList from './DialogList/DialogList';
import style from './Massages.module.css';
import Dialog from './Dialog/Dialog';


const Massages = (props) => {
    return (
        <div className={style.massages}>
            <div>
                <DialogList />
            </div>
            <div>
                <Dialog />
            </div>
        </div >
    );
}

export default Massages;