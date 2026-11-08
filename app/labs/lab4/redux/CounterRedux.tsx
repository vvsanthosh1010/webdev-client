import { useDispatch, useSelector } from "react-redux";
import { down, reset, up } from "./counterReducer";
import type { RootState } from "./store";

export default function CounterRedux() {
  const { count } = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-redux-counter">
      <h3>Redux Counter: {count}</h3>
      <button
        type="button"
        onClick={() => dispatch(up())}
        id="wd-redux-up-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm text-white"
      >
        Up
      </button>
      <button
        type="button"
        onClick={() => dispatch(down())}
        id="wd-redux-down-click"
        className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
      >
        Down
      </button>
      <button
        type="button"
        onClick={() => dispatch(reset())}
        id="wd-redux-my-reset-click"
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Reset
      </button>
      <button
        type="button"
        onClick={() => dispatch(reset())}
        id="wd-redux-reset-click"
        className="ms-2 rounded bg-neutral-600 px-3 py-1.5 text-sm text-white"
      >
        Sample Reset
      </button>
    </div>
  );
}
