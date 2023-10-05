import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/reducers/noteReducer";
import { noteSelector } from "../../redux/reducers/noteReducer";
import styles from "./NoteList.module.css";

function NoteList() {
  const notes = useSelector(noteSelector);
  const dispatch = useDispatch();
  console.log(notes);

  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li className={styles.item}>
            <p>{note.createdOn}</p>
            <p className={styles.notecontent}>{note.text}</p>
            <button
              className={"btn btn-danger " + styles.button}
              onClick={() => dispatch(actions.delete(index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
