import classNames from "classnames";
import Icon from "./photo.png";
import style from "./index.module.css";
import Logo from "../../../atoms/logo";

const MainBanner = ({ className }) => {
  return (
    <div className={classNames(style.wrapper, className)}>
      <div className="container">
        <header>
          <Logo />
        </header>
        <div className={style.textBlock}>
          <h1 className={classNames(style.growthGroup, "t-inter-bold")}>
            5 ПРИЧИН
          </h1>
          <h3 className="t-inter-semi-bold">
            Которые не дают вам начать<br />
            зарабатывать
          </h3>
          <p>И как это изменить</p>
          <img src={Icon} alt="" className={style.photo} />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
