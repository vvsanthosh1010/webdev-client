export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  // On your own
  const myCourse = { course: "CS4550", credits: 4 };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)} <br />
      myCourse = {JSON.stringify(myCourse)} <br />
      {/* With AI */}
      <span id="wd-ai-sample-course">
        sampleCourse = {JSON.stringify({ course: "RS102", modules: 3 })}
      </span>
      <hr />
    </div>
  );
}
