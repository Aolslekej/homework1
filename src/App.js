import "./style/App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="plug">Plugins for Dev Mode</div>
          <div className="plugtext">
            Plugins for Dev Mode help ensure that developers have all of the
            relevant information that they need to implement a design in one
            place. Plugins for Dev Mode can be used for inspection and code
            generation.
          </div>
          <div className="dotted">
            <li>
              Inspection: Plugins can take over the Inspect Panel and pull in
              context and information from other tools that’s needed for design
              implementation, such as Jira or GitHub
            </li>
            <li>
              Code generation: Plugins can customize code generation using
              languages and frontend frameworks that Figma doesn’t support
              natively
            </li>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="inspection">Inspection</div>
          <div className="mainImg">
            <img src="/images/Image01.png"></img>
          </div>
          <div className="insptext">
            Plugins that support inspection are used to provide context
            associated with the selected layer in the Plugins Panel in Dev Mode.
            In the above example, the GitHub plugin is being used in Dev Mode to
            pull in the code from a GitHub repository associated with the
            selected component in Figma.
          </div>
          <div className="codeGen">Code generation</div>
          <div className="codeImg">
            <img src="/images/Image02.svg"></img>
          </div>
          <div className="insptext supcode">
            Plugins that support code generation run in the code section of the
            Inspect Panel, in the same place you’d fine Figma’s native code
            snippets. These types of plugins generate code for any layer that
            you have selected. In the above example, the Anima plugin is being
            used to generate React code for the “Add to basket” button.
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          <div className="lastImg">
            <img src="/images/Image03.svg"></img>
          </div>
          <div className="lasttext">
            You can click on the language dropdown in the Inspect Panel to
            switch between Figma’s native code snippets, and plugins for code
            generation.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
