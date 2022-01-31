import DialogItem from './DialogItem/DialogItem';
import style from './DialogList.module.css'

let dialogListDATA = [
    { id: 1, name: 'Mark' },
    { id: 2, name: 'Alex' },
    { id: 3, name: 'Morgan' },
    { id: 4, name: 'Julie' },
    { id: 5, name: 'Jhon' },
    { id: 6, name: 'NN' }
];

let dialogList = dialogListDATA
    .map(dialog => <DialogItem id={`${dialog.id}`} author={dialog.name} />);

const DialogList = () => {
    return (
        <div className={style.dialog_list}>
            {dialogList}
        </div>
    );
}

export default DialogList;