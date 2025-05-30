import axios from "@lib/axios";
import Product from "models/product.model";
import Service from "models/service.model";
import Blog from "models/blog.model"; // Import the Blog type

const getGrocery1Navigation = async () => {
  const response = await axios.get("/api/grocery-1/navigation");
  return response.data;
};

const getPopularProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-1/products?tag=popular");
  return response.data;  
};

const getTrendingProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-1/products?tag=trending");
  return response.data;
};

const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-1/products");
  return response.data;
};

const getServices = async (): Promise<Service[]> => {
  const response = await axios.get("/api/grocery-1/services");
  return response.data;
};

const getBlogLists = async (): Promise<Blog[]> => {
  const response = await axios.get("/api/gadget-store/blog-lists");
  return response.data;
};

export default {
  getServices,
  getProducts,
  getPopularProducts,
  getTrendingProducts,
  getGrocery1Navigation,
  getBlogLists
};
