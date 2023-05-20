import { useState, useEffect } from "react";
import "./index.css";
import {
  ZERO1,
  ZERO2,
  ZERO3,
  ZERO4,
  ZERO5,
  ZERO6,
  ZERO7,
  ZERO8,
  ZERO9,
  ZERO10,
  ZERO11,
  ZERO12,
  ZERO13,
  ZERO14,
  ZERO15,
  ZERO16,
} from "../../assets/images";

const Worldcup = () => {
  const candidate = [
    { name: "옆태 째로", src: ZERO1 },
    { name: "눈 오는 날 째로", src: ZERO2 },
    { name: "보라색 패딩 어떤데", src: ZERO3 },
    { name: "청초 째로", src: ZERO4 },
    { name: "곰", src: ZERO5 },
    { name: "차에서 째로", src: ZERO6 },
    { name: "미용한 째로", src: ZERO7 },
    { name: "인스타 감성", src: ZERO8 },
    { name: "벚꽃과 째로", src: ZERO9 },
    { name: "안경 째로", src: ZERO10 },
    { name: "치명 그 자체", src: ZERO11 },
    { name: "내 뒤태를 봐라", src: ZERO12 },
    { name: "가오리", src: ZERO13 },
    { name: "한옥과 째로", src: ZERO14 },
    { name: "게슴츠레", src: ZERO15 },
    { name: "꼬물이", src: ZERO16 },
  ];

  const [game, setGame] = useState([]);
  const [round, setRound] = useState(0);
  const [nextGame, setNextGame] = useState([]);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [leftStyle, setLeftStyle] = useState("imgWrapper");
  const [rightStyle, setRightStyle] = useState("imgWrapper");
  const [stat, setStat] = useState({
    "옆태 째로": 0,
    "눈 오는 날 째로": 0,
    "보라색 패딩 어떤데": 0,
    "청초 째로": 0,
    곰: 0,
    "차에서 째로": 0,
    "미용한 째로": 0,
    "인스타 감성": 0,
    "벚꽃과 째로": 0,
    "안경 째로": 0,
    "치명 그 자체": 0,
    "내 뒤태를 봐라": 0,
    가오리: 0,
    "한옥과 째로": 0,
    게슴츠레: 0,
    꼬물이: 0,
  });

  useEffect(() => {
    const string = localStorage.getItem("2020112548");
    if (string != null) {
      setStat(JSON.parse(string));
    }
    setGame(
      candidate
        .map((c) => {
          return { name: c.name, src: c.src, order: Math.random() };
        })
        .sort((l, r) => {
          return l.order - r.order;
        })
    );
  }, []);

  useEffect(() => {
    if (left === true) {
      setRightStyle("select");
      setTimeout(() => {
        setLeft(false);
        setRound((round) => round + 1);
        setRightStyle("imgWrapper");
      }, 3000);
    }
  }, [left]);

  useEffect(() => {
    if (right === true) {
      setLeftStyle("select");
      setTimeout(() => {
        setRight(false);
        setRound((round) => round + 1);
        setLeftStyle("imgWrapper");
      }, 3000);
    }
  }, [right]);

  useEffect(() => {
    if (game.length > 1 && round + 1 > game.length / 2) {
      setGame(nextGame);
      setNextGame([]);
      setRound(0);
    }
  }, [round]);

  if (game.length === 1) {
    localStorage.setItem("2020112548", JSON.stringify(stat));
    return (
      <>
        <div className="container">
          <div className="title">이상형 월드컵 우승</div>
          <div className="imgWrapper">
            <img src={game[0].src} />
            <div>{game[0].name}</div>
          </div>
        </div>
        <div className="statistics">
          <p>{stat[game[0].name]}번 승리</p>
          {Object.keys(stat).map((name) => {
            return (
              <div className="backgroundBar" key={name}>
                <div
                  className="barText"
                  style={{ width: `${stat[name] * 10 + 50}px` }}
                >
                  {name}
                  <div className="barValue">{stat[name]}</div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  if (game.length === 0 || round + 1 > game.length / 2)
    return <p>로딩중입니다</p>;
  console.log(stat);

  const leftFunction = () => {
    setStat({
      ...stat,
      [game[round * 2].name]: stat[game[round * 2].name] + 1,
    });
    setNextGame((prev) => prev.concat(game[round * 2]));
    setLeft(true);
  };
  const rightFunction = () => {
    setStat({
      ...stat,
      [game[round * 2 + 1].name]: stat[game[round * 2 + 1].name] + 1,
    });
    setNextGame((prev) => prev.concat(game[round * 2 + 1]));
    setRight(true);
  };

  return (
    <>
      <div className="container">
        <div className="title">
          이상형 월드컵 {round + 1} / {game.length / 2}{" "}
          <b>{game.length === 2 ? "결승" : game.length + "강"}</b>
        </div>
        <div className={leftStyle}>
          <img src={game[round * 2].src} onClick={leftFunction} />
          <div>{game[round * 2].name}</div>
        </div>
        <div className={rightStyle}>
          <img src={game[round * 2 + 1].src} onClick={rightFunction} />
          <div>{game[round * 2 + 1].name}</div>
        </div>
      </div>
    </>
  );
};

export default Worldcup;
