import VueRouter from "vue-router";
import Products from "@/components/Products";
import ShoppingCart from "@/components/ShoppingCart";

const routes = [
  { path: "/", component: Products },
  { path: "/shoppingCart", component: ShoppingCart }
];

export default new VueRouter({
  routes
});
