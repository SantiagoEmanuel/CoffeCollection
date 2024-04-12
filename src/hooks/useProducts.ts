import {  useState } from "react";
import { DATA } from "../api/data";

export const useProducts = () => {
  const [products] = useState(DATA);


  return {
    products,
  };
};
