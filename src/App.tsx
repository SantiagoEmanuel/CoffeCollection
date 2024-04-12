import { useState } from "react";
import { AvailableProducts } from "./components/AvailableProducts";
import { AllProducts } from "./components/AllProducts";

export function App(): JSX.Element {
  const [filter, setFilter] = useState(Boolean);

  return (
    <div className="bg-[#1B1D1F] max-[1220px]:m-[100px] max-[1220px]:mt-40 rounded-xl m-auto mt-40 max-w-screen-lg flex flex-col mb-32 max-lg:mt-[15%] pb-32">
      <header className=" background-image flex flex-col gap-6 py-24 mx-auto">
        <div className="flex flex-col justify-center items-center w-full max-md:w-[300px] m-auto text-center gap-4">
          <h1 className="max-md:text-2xl text-3xl font-bold">Our Collection</h1>
          <p className="opacity-40  w-[490px] max-md:w-full">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>
        <div className="flex items-center justify-center gap-6">
          {filter ? (
            <>
              <button
                className="text-sm"
                onClick={() => {
                  setFilter(false);
                }}
              >
                All Products
              </button>
              <button className="px-5 py-2 font-bold text-sm bg-[#6F757C] rounded-lg">
                Available Now
              </button>
            </>
          ) : (
            <>
              <button className="px-5 py-2 font-bold text-sm bg-[#6F757C] rounded-lg">
                All Products
              </button>
              <button
                className="text-sm"
                onClick={() => {
                  setFilter(true);
                }}
              >
                Available Now
              </button>
            </>
          )}
        </div>
      </header>
      <section className="place-items-center gap-x-8 gap-y-24 max-lg:grid-cols-2 max-sm:grid-cols-1 grid items-center max-w-screen-lg grid-cols-3 m-auto">
        {filter ? <AvailableProducts /> : <AllProducts />}
      </section>
    </div>
  );
}
