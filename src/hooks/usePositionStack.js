import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const usePositionStack = (address) => {
  const [map, setMap] = useState({});
  const api = `http://api.positionstack.com/v1/forward?access_key=d578dfcc4e6eeec8d7d4d56bd99ddd40&query=${address}`;

  useEffect(async () => {
    console.log(api);
    const response = await axios(api);
    console.log(response);
    setMap(response.data.data[0]);
  }
    , []);

  return map;
};


export default usePositionStack;
