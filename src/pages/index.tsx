import * as React from "react";
import Layout from "../components/Layout";
import testimonies from "../data/testimonies";
import SpriteIcon from "../components/SpriteIcon";

const Home = () => {
  const data = testimonies[0];
  return (
    <Layout>
      <div className="home-container">
        <div className="photo-container">
          <div className="photo-background">
            <img className="photo" src={data.photoUrl} alt={data.firstName} />
            <div className="action-buttons-container">
              <SpriteIcon className="button-icon -prev" symbolId="icon-prev" />
              <SpriteIcon className="button-icon -next" symbolId="icon-next" />
            </div>
          </div>
        </div>
        <div className="testimony-container">
          <div className="quotes-icon-container">
            <SpriteIcon className="quotes-icon" symbolId="pattern-quotes" />
          </div>
          <p className="testimony">&#8220;{data.testimony}&#8221;</p>
          <div className="person-details-container">
            <span className="full-name">
              {data.firstName} {data.lastName}
            </span>
            <span className="occupation">{data.occupation}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
