import VueRouter from "vue-router";
import Inventory from "@/components/Inventory";
import ShoppingCart from "@/components/ShoppingCart";

const routes = [
  { path: "/", component: Inventory },
  { path: "/shoppingCart", component: ShoppingCart }
];

export default new VueRouter({
  routes
});
