import "./main.scss";

export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="inspection">Inspection</div>
        <div className="mainImg">
          <img src="/images/Image01.png"></img>
        </div>
        <div className="insptext">
          Plugins that support inspection are used to provide context associated
          with the selected layer in the Plugins Panel in Dev Mode. In the above
          example, the GitHub plugin is being used in Dev Mode to pull in the
          code from a GitHub repository associated with the selected component
          in Figma.
        </div>
        <div className="codeGen">Code generation</div>
        <div className="codeImg">
          <img src="/images/Image02.svg"></img>
        </div>
        <div className="insptext supcode">
          Plugins that support code generation run in the code section of the
          Inspect Panel, in the same place you’d fine Figma’s native code
          snippets. These types of plugins generate code for any layer that you
          have selected. In the above example, the Anima plugin is being used to
          generate React code for the “Add to basket” button.
        </div>
      </div>
    </main>
  );
}
