import React, { useEffect, useState } from "react";
import { customAlphabet } from "nanoid";
import { PropagateLoader } from "react-spinners";

const nanoid = customAlphabet("1234567890", 15);

const Success = () => {
  console.log("Suuceess")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center">
            Order Successful!
          </h2>
          <p className="text-2xl font-semibold text-center">
            Your order has been placed successfully
          </p>
          <p className="text-center"> Your order number is {nanoid()}</p>
        </div>
      )}
    </div>
  );
};

export default Success;
