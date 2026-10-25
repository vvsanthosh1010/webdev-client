const subtract = (a: number, b: number) => {
  return a - b;
};
// On your own
const add = (a: number, b: number) => {
  return a + b;
};
// With AI
const multiply = (a: number, b: number) => {
  return a * b;
};
export default function ArrowFunctions() {
  const threeMinusOne = subtract(3, 1);
  console.log(threeMinusOne);
  return (
    <div id="wd-arrow-functions">
      <h4>New ES6 arrow functions</h4>
      threeMinusOne = {threeMinusOne} <br />
      subtract(3, 1) = {subtract(3, 1)} <br />
      add(2, 4) = {add(2, 4)} <br />
      <span id="wd-ai-arrow-multiply">multiply(3, 4) = {multiply(3, 4)}</span> <br />
      <hr />
    </div>
  );
}
