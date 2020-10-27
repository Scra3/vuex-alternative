import { products } from "@/data/products";

const fetchProducts = async () => {
  await sleep(1000);
  return products;
};

const sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export default {
  fetchProducts
};
