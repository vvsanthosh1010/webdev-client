export default function ImpliedReturn() {
  const multiply = (a: number, b: number) => a * b;
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);
  // On your own
  const square = (n: number) => n * n;
  // With AI
  const divide = (a: number, b: number) => a / b;
  return (
    <div id="wd-implied-return">
      <h4>Implied return</h4>
      fourTimesFive = {fourTimesFive} <br />
      multiply(4, 5) = {multiply(4, 5)} <br />
      square(9) = {square(9)} <br />
      <span id="wd-ai-divide">divide(20, 4) = {divide(20, 4)}</span> <br />
      <hr />
    </div>
  );
}
