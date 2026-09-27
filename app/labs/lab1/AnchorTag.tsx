export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
      <br />
      <a href="https://www.food.com" id="wd-your-link">
      Hobby Site
      </a>
      <br />
      <a href="https://github.com/vvsanthosh1010" id="wd-your-github">
      Own Github
      </a>
    </>
  );
}