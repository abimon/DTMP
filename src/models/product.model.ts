import { color } from 'styled-system';
import { SubTitle } from './../page-sections/health-beauty/section-4/styles';
import Shop from "./shop.model";
import Review from "./Review.model";

interface Product {
  unit?: any;
  slug: string;
  price: number;
  title: string;
  subTitle: string;
  color?: string;
  bg?: string;
  btnText?: string;
  rating: number;
  discount: number;
  thumbnail: string;
  id: string;
  spec: string;
  shop?: Shop;
  brand?: string;
  size?: string[];
  status?: string;
  colors?: string[];
  images?: string[];
  categories: any[];
  reviews?: Review[];
  published?: boolean;
}

export default Product;
