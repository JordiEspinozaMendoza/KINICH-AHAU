import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
export const themed = {
  style: {
    borderRadius: "0",
    boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
  },
};
export default function ToastAlert() {
  const [position, setPosition] = useState("top-right");
  return <Toaster position={position} reverseOrder={false} />;
}
