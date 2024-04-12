import { useEffect, useState } from "react";
import { product } from "../types";
// import { getData } from "../api/getProducts";
import { DATA } from "../api/data";

export const useProducts = () => {
  const [products, setProducts] = useState(Array<product>);

	useEffect(()=>{
		data();
		async function data() {
			// setProducts(await getData())
			setProducts(DATA)
		}
	},[])

  return {
    products,
  };
};
