import { product } from "../types";

export function ProductCard(
  { name, image, rating, votes, available, price, popular }: product,
  key: number
) {
  return (
    <article className="flex flex-col gap-4" key={key}>
      <header className="rounded-2xl relative overflow-hidden">
        <img src={image} alt={name} />
        {popular ? (
          <p className="absolute top-2 left-2 bg-[#F6C768] rounded-full px-4 py-1 text-[10px] text-black font-bold shadow-md">
            Popular
          </p>
        ) : (
          ""
        )}
      </header>
      <aside className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p>{name}</p>
          {rating != null ? (
            <div className="flex gap-[5px] items-center">
              <img src="/images/icons/Star_fill.svg" alt="Star icon fill" />
              <p className="text-sm">{rating}</p>{" "}
              <p className="opacity-40 text-sm">({votes} votes)</p>
            </div>
          ) : (
            <div className="flex gap-[5px]">
              <img src="/images/icons/Star.svg" alt="Star icon" />
              <p className="opacity-40">No rating</p>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-between gap-2">
          <p className="bg-[#BEE3CC] dark:text-black rounded-md px-3 font-bold text-xs py-1">
            {price}
          </p>
          {available ? (
            ""
          ) : (
            <p className="text-[#ED735D] font-bold">Sold out</p>
          )}
        </div>
      </aside>
    </article>
  );
}
