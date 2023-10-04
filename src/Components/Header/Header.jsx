import './header.scss';

export default function Header() {
  return (
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
  )
}
