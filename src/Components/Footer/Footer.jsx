import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="lastImg">
          <img src="/images/Image03.svg"></img>
        </div>
        <div className="lasttext">
          You can click on the language dropdown in the Inspect Panel to switch
          between Figma’s native code snippets, and plugins for code generation.
        </div>
      </div>
    </footer>
  );
}
