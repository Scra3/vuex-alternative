import { inventory } from "@/data/inventory";

const fetchProducts = async () => {
  await sleep(1000);
  return inventory;
};

const sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export default {
  fetchProducts
};
