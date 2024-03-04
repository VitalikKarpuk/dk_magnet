import { Link } from "react-router-dom";
import SubHeader from "../../components/atoms/subheader/inde";
import Video from "../../components/moleculs/video/video";

import style from "./index.module.css";
import Button from "../../components/atoms/button";

const Home = () => {
  return (
    <>
      <div className="container" style={{flexGrow: 1}}>
        <div className={style.initModule}>
          <Video link="https://youtu.be/wM7QK1v7iqk" />
          <Link
            to={
              "https://pay.raschet.by/?param=23695-3-133#00020101021132460010by.raschet01074440631101123695-3-13312021233440014by.epos.artpay0305236950401305011060313353039335402495802BY5918IP%20Kushnerova%20D.V.6008Luninets6304CBC9"
            }
            className={style.button}
            target="_blank"
          >
            <Button text="Оплата интенсива ФОРМУЛА УСПЕХА" variant={'red'}/>
          </Link>
          <Link
            to={
              "https://www.instagram.com/daria_kushnerova.psy?igsh=ZWdtM2M3Zjc0MnBs"
            }
            className={style.button}
            target="_blank"
          >
            <Button text={"Написать мне в инстаграмм"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
