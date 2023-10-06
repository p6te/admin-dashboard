import TopBox from "components/topBox";
import "./home.scss";
import ChartBox from "components/chartBox";

import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">{/* <ChartBox /> */}4</div>
      <div className="box box5">{/* <ChartBox /> */}5</div>
      <div className="box box6">6</div>
      <div className="box box7">7</div>
      <div className="box box8">8</div>
      <div className="box box9">9</div>
    </div>
  );
};

export default Home;
