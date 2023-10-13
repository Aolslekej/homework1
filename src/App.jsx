import "./style/App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import User from "./Components/Users/Users";

const users = [
  {
    name: "Безлимитный 300",
    gig: "300 руб/мес",
    speed: "до 10 Мбит/сек",
    color: "blue",
    text: "white",
    textpos: "center",
    colornew: "darker0",
    back: "back",
    speedcl:"speedcl",
    limit:"Объём включённого трафика не ограничен",
    limitcl:"limitcl",
    margbot:"margbot",
    marglef:"marglef",
  },
  {
    name: "Безлимитный 420",
    gig: "450 руб/мес",
    speed: "до 50 Мбит/сек",
    color: "green",
    colornew: "darker1",
  },
  {
    name: "Безлимитный 550",
    gig: "550 руб/мес",
    speed: "до 100 Мбит/сек",
    color: "pink",
    colornew: "darker2",
  },
  {
    name: "Безлимитный 1000",
    gig: "1000 руб/мес",
    speed: "до 200 Мбит/сек",
    color: "grey",
    colornew: "darker3",
  },
];

export default function App() {
  const arr = [1, 12, 13, 15];
  return (
    <div className="App">
      <User
        name={users[0].name}
        gig={users[0].gig}
        city={users[0].city}
        color={users[0].color}
        text={users[0].text}
        textpos={users[0].textpos}
        colornew={users[0].colornew}
        speed={users[0].speed}
        back={users[0].back}
        speedcl={users[0].speedcl}
        limit={users[0].limit}
        limitcl={users[0].limitcl}
        margbot={users[0].margbot}
        marglef={users[0].marglef}
      />
      <User
        name={users[1].name}
        gig={users[1].gig}
        city={users[1].city}
        color={users[1].color}
        text={users[0].text}
        textpos={users[0].textpos}
        colornew={users[1].colornew}
        speed={users[1].speed}
        back={users[0].back}
        speedcl={users[0].speedcl}
        limit={users[0].limit}
        limitcl={users[0].limitcl}
        margbot={users[0].margbot}
        marglef={users[0].marglef}
      />
      <User
        name={users[2].name}
        gig={users[2].gig}
        city={users[2].city}
        color={users[2].color}
        text={users[0].text}
        textpos={users[0].textpos}
        colornew={users[2].colornew}
        speed={users[2].speed}
        back={users[0].back}
        speedcl={users[0].speedcl}
        limit={users[0].limit}
        limitcl={users[0].limitcl}
        margbot={users[0].margbot}
        marglef={users[0].marglef}
      />
      <User
        name={users[3].name}
        gig={users[3].gig}
        city={users[3].city}
        color={users[3].color}
        text={users[0].text}
        textpos={users[0].textpos}
        colornew={users[3].colornew}
        speed={users[3].speed}
        back={users[0].back}
        speedcl={users[0].speedcl}
        limit={users[0].limit}
        limitcl={users[0].limitcl}
        margbot={users[0].margbot}
        marglef={users[0].marglef}
      />
    </div>
  );
}
