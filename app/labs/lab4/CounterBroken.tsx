"use client";

export default function CounterBroken() {
  let count = 7;
  return (
    <div id="wd-counter-broken">
      <h2>Broken Counter: {count}</h2>
      <button
        type="button"
        onClick={() => {
          count++;
          console.log(count);
        }}
        id="wd-counter-broken-up-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm text-white"
      >
        Up
      </button>
      <button
        type="button"
        onClick={() => {
          count--;
          console.log(count);
        }}
        id="wd-counter-broken-down-click"
        className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
      >
        Down
      </button>
      <hr />
    </div>
  );
}
