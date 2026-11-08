"use client";

const hello = () => {
  alert("Hello World!");
};

const lifeIs = (good: string) => {
  alert(good);
};

export default function PassingDataOnEvent() {
  return (
    <div id="wd-passing-data-on-event">
      <h2>Passing Data on Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-pass-data-click"
        className="me-2 rounded bg-yellow-400 px-3 py-1.5 text-sm"
      >
        Pass Data
      </button>
      <button
        type="button"
        onClick={() => lifeIs("Life is Good!")}
        id="wd-pass-data-parameter-click"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Pass Data Parameter
      </button>
      <button
        type="button"
        onClick={() => lifeIs("Build it, break it, fix it.")}
        id="wd-pass-data-motto-click"
        className="ms-2 rounded bg-green-600 px-3 py-1.5 text-sm text-white"
      >
        Pass My Motto
      </button>
      <button
        type="button"
        onClick={() => lifeIs("Web Development")}
        id="wd-pass-data-course-click"
        className="ms-2 rounded bg-neutral-600 px-3 py-1.5 text-sm text-white"
      >
        Pass Course
      </button>
      <hr />
    </div>
  );
}
