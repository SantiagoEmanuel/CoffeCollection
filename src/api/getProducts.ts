import { product } from "../types";

export async function getData() {
     const f = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
     const data:product = await f.json();
     return data;
}