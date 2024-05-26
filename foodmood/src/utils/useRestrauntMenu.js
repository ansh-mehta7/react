import React, { useState } from "react";
import { useState, useEffect } from "react";
import { MENU_DATA } from "../utils/constants.js";
const useRestrauntMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_DATA + resid + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    setResInfo(json.data);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return resInfo;
};

export default useRestrauntMenu;
