export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  // On your own
  let taglineVariable = "Build it, break it, fix it.";
  let yearVariable = 2026;
  let isTagline = typeof taglineVariable;
  let isYear = typeof yearVariable;
  // With AI
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable} <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable} <br />
      booleanVariable = {booleanVariable + ""} <br />
      isNumber = {isNumber} <br />
      isString = {isString} <br />
      isBoolean = {isBoolean} <br />
      taglineVariable = {taglineVariable} <br />
      isTagline = {isTagline} <br />
      yearVariable = {yearVariable} <br />
      isYear = {isYear} <br />
      <span id="wd-ai-variable-types">
        sampleCount = {sampleCount} <br />
        isSampleCount = {isSampleCount} <br />
        sampleLabel = {sampleLabel} <br />
        isSampleLabel = {isSampleLabel} <br />
      </span>
      <hr />
    </div>
  );
}
