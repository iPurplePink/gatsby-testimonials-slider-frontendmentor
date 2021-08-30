import React, { FC } from "react";
import "../styles/index.scss";
import SpriteSheet from "./SpriteIcon/SpriteSheet";

const Layout: FC = ({ children }) => {
  return (
    <main className="main-container">
      <SpriteSheet />
      {children}
    </main>
  );
};

export default Layout;
