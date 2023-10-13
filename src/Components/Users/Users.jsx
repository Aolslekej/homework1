import st from "./user.module.scss";

export default function Users(props) {
  const cl = props.color;
  const txt = props.text;
  const pos = props.textpos;
  const gig = props.gig;
  const clnew = props.colornew;
  const speed = props.speed;
  const back = props.back;
  const speedcl = props.speedcl;
  const limit = props.limit;
  const limcl = props.limitcl;
  const marg = props.margbot;
  return (
    <div>
      <div className={`${st[txt]} ${st[pos]} ${st[cl]} ${st[marg]}`}>
        <p>{props.name}</p>
      </div>
      <div className={`${st[txt]} ${st[pos]} ${st[clnew]}`}>
        <h1>{props.gig}</h1>
      </div>
      <div className={`${st[txt]} ${st[pos]} ${st[back]} ${st[speedcl]}`}>
        <p>{props.speed}</p>
      </div>
      <div className={`${st[speedcl]} ${st[limcl]} ${st[pos]}`}>
          <p>{props.limit}</p>
      </div>
    </div>
  );
}
