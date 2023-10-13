import style from "./style.module.scss";

export default function Footer() {
  const cl = "none";
  return (
    <div>
      <button className={style[cl]}>SEND</button>
    </div>
  );
}
