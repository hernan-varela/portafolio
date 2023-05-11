import React, { useState } from "react";

import style from "./Icon.module.css";

const Icon = ({image}) => {
  return (
    <div>
      <img src={image} alt="image not found" className={style.icon} />
    </div>
  );
};

export default Icon;
