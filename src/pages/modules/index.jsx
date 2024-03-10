import { Link } from "react-router-dom";
import Video from "../../components/moleculs/video/video";

import style from "./index.module.css";
import Button from "../../components/atoms/button";

const Home = () => {
  return (
    <>
      <div className="container" style={{ flexGrow: 1 }}>
        <div className={style.initModule}>
          <Video link="https://youtu.be/8mbjQ0H7Q5U" />
          <Link
            to={
              "https://docs.google.com/forms/d/e/1FAIpQLSeifCxZg3TOYUceGHvoYSTDsk3ItvOZG5Ll-TJWFEEQynBu-w/viewform?usp=sharing"
            }
            className={style.button}
            target="_blank"
          >
            <Button text="Запись на бесплатный разбор" variant={"red"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
