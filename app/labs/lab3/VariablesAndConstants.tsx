export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  // On your own
  let myName = "Santhosh";
  const greeting = "Hello, " + myName + "!";
  // With AI
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped} <br />
      constant1 = {constant1} <br />
      myName = {myName} <br />
      greeting = {greeting} <br />
      <span id="wd-ai-sample-sum">sampleSum = {sampleSum}</span> <br />
      <hr />
    </div>
  );
}
