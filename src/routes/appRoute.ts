import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ShopPage from "../pages/ShopPage/ShopPage";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/shop", component: ShopPage },
  { path: "/product", component: ProductPage },
];
