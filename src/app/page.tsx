"use client";
import React, { useEffect } from "react";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";
import CategoryList from "./components/CategoryList";
import { MyWixClientContextProvider, useWixClient } from "@/context/wixContext";

const Page = () => {
  const wixContext = useWixClient();

  useEffect(() => {
    const getProducts = async () => {
      if (wixContext) {
        // Ensure wixContext is properly typed to include products
        const res = await wixContext.products.queryProducts().find();
        console.log(res);
      }
    };

    getProducts();
  }, [wixContext]);

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Feature Product</h1>
        <ProductList />
      </div>
      <div className="mt-24 px-4">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <MyWixClientContextProvider>
      <Page />
    </MyWixClientContextProvider>
  );
}
