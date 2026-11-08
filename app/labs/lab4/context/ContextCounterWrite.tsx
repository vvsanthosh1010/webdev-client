import { useCounterContext } from "./CounterContext";

export default function ContextCounterWrite() {
  const { count, setCount } = useCounterContext();
  return (
    <div id="wd-context-counter-write">
      <h3>Writer</h3>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        id="wd-context-up-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm text-white"
      >
        Up
      </button>
      <button
        type="button"
        onClick={() => setCount(count - 1)}
        id="wd-context-down-click"
        className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
      >
        Down
      </button>
      <button
        type="button"
        onClick={() => setCount(7)}
        id="wd-context-my-reset-click"
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Reset
      </button>
      <button
        type="button"
        onClick={() => setCount(7)}
        id="wd-context-reset-click"
        className="ms-2 rounded bg-neutral-600 px-3 py-1.5 text-sm text-white"
      >
        Sample Reset
      </button>
    </div>
  );
}
