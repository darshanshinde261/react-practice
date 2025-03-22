import { useState } from "react";
import { motion } from "framer-motion";

export default function MatrixGame() {
  const [matrix, setMatrix] = useState(Array(9).fill("white"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (matrix[index] === "white") {
      const newMatrix = [...matrix];
      newMatrix[index] = "green";
      setMatrix(newMatrix);
      setClickOrder([...clickOrder, index]);
    }

    if (clickOrder.length === 8) {
      changeToOrangeSequentially([...clickOrder, index]);
    }
  };

  const changeToOrangeSequentially = (order) => {
    order.forEach((idx, i) => {
      setTimeout(() => {
        setMatrix((prev) => {
          const newMatrix = [...prev];
          newMatrix[idx] = "orange";
          return newMatrix;
        });
      }, i * 500);
    });
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-80 mx-auto mt-10">
      {matrix.map((color, index) => (
        <motion.div
          key={index}
          className="w-20 h-20 border border-black cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </div>
  );
}