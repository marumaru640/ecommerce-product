import axios from "axios";
import { useEffect, useState } from "react";

import productImage from "../../images/image-product-1.jpg";
import thumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../images/image-product-4-thumbnail.jpg";

const frontendMentorProduct = {
  id: 0,
  title: "Fall Limited Edition Sneakers",
  price: 125.0,
  brand: "Sneaker Company",
  description:
    "These low-profile sneakers are your perfect casual wear companion.",
  discountPercentage: 50,
  thumbnail: productImage,
  images: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
};

export type Product = {
  id: number;
  title: string;
  price: number;
  brand: string;
  description: string;
  thumbnail: string;
  thumbnails: string[];
};

export default function ProductPage() {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");

        const apiData = response.data.products;

        const combinedData = [frontendMentorProduct, ...apiData];

        setProductData(combinedData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <div>
      <h1>All Product</h1>
      {productData.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p> - <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
