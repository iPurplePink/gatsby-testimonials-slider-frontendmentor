import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import testimonies from "../../data/testimonies";
import SpriteIcon from "../../components/SpriteIcon";
import { navigate } from "@reach/router";

const Home = ({ testimonyId, location, ...props }) => {
  const currentIndex =
    testimonies.findIndex((testimony) => testimony.id == testimonyId) ?? 0;

  const data = testimonies[currentIndex];

  useEffect(() => {
    if (data.id != testimonyId) {
      navigate(`/${testimonies[0].id}`);
    }
  }, []);

  const handleNextClick = () => {
    const nextIndex =
      testimonies.length - 1 == currentIndex ? 0 : currentIndex + 1;
    navigate(`/testimony/${testimonies[nextIndex].id}`);
  };

  const handlePrevClick = () => {
    const prevIndex =
      0 == currentIndex ? testimonies.length - 1 : currentIndex - 1;
    navigate(`/testimony/${testimonies[prevIndex].id}`);
  };

  return (
    <Layout>
      <div className="home-container">
        <div className="photo-container">
          <div className="photo-background">
            <img className="photo" src={data.photoUrl} alt={data.firstName} />
            <div className="action-buttons-container">
              <SpriteIcon
                onClick={handlePrevClick}
                className="button-icon -prev"
                symbolId="icon-prev"
              />
              <SpriteIcon
                onClick={handleNextClick}
                className="button-icon -next"
                symbolId="icon-next"
              />
            </div>
          </div>
        </div>
        <div className="testimony-container">
          <div className="testimony-details-container">
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
      </div>
    </Layout>
  );
};

export default Home;
