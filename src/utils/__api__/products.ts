import axios from "@lib/axios";
import Product from "@models/product.model";
import Shop from "@models/shop.model";

// get all product slug
const getSlugs = async (): Promise<{ slug: string }[]> => {
  const response = await axios.get("/api/products/slug-list");
  return response.data;
};

// get product based on slug
const getProductBySlug = async (slug: string): Promise<Product> => {
  const response = await axios.get("/api/products/slug", { params: { slug } });
  return response.data;
};
const getProduct = async (): Promise<Product> => {
  const response = await axios.get("/api/products/slug");
  return response.data;
};
const getFrequentlyBought = async (): Promise<Product[]> => {
  const response = await axios.get("/api/frequently-bought-products");
  return response.data;
};

const getRelatedProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/related-products");
  return response.data;
};

const getAvailableShop = async (): Promise<Shop[]> => {
  const response = await axios.get("/api/product/shops");
  return response.data;
};

export default { getSlugs, getProduct, getFrequentlyBought, getRelatedProducts, getAvailableShop };
