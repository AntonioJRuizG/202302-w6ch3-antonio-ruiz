import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../core/store/store";
import { addCreator, deleteCreator } from "../../reducer/phone.action.creator";

export function Keyboard() {
  const dispatch = useDispatch<AppDispatch>();

  // Refactoring of the code below please
  return (
    <>
      <li>
        <button className="key" onClick={() => dispatch(addCreator("1"))}>
          1
        </button>
      </li>
      <li>
        <button className="key" onClick={() => dispatch(addCreator("2"))}>
          2
        </button>
      </li>
      <li>
        <button className="key" onClick={() => dispatch(addCreator("3"))}>
          3
        </button>
      </li>
      <li>
        <button className="key" onClick={() => dispatch(addCreator("4"))}>
          4
        </button>
      </li>
      <li>
        <button className="key" onClick={() => dispatch(addCreator("5"))}>
          5
        </button>
      </li>
      <li>
        <button className="key" onClick={() => dispatch(addCreator("6"))}>
          6
        </button>
      </li>
      <li>
        <button className="key" onClick={() => dispatch(addCreator("7"))}>
          7
        </button>
      </li>
      <li>
        <button className="key" onClick={() => dispatch(addCreator("8"))}>
          8
        </button>
      </li>
      <li>
        <button className="key" onClick={() => dispatch(addCreator("9"))}>
          9
        </button>
      </li>
      <li>
        <button className="key" onClick={() => dispatch(addCreator("0"))}>
          0
        </button>
      </li>
      <li>
        <button className="key big" onClick={() => dispatch(deleteCreator())}>
          delete
        </button>
      </li>
    </>
  );
}
