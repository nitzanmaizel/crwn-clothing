import React, { useState, useEffect } from "react";
import ListMenuItems from "./ListMenuItems";

const Directory = () => {
  const [section, setSection] = useState([]);

  useEffect(() => {
    setSection(ListMenuItems);
  }, []);

  return <div>Directory</div>;
};

export default Directory;
