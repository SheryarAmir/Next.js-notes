"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("placing the order successfully");
    router.push("/");
    // router.forword("/");
    // router.back("/");
    // router.for("/");
  };

  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default Page;
