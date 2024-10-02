import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useSet } from "react-use";
import useWindowSize from "react-use/lib/useWindowSize";

const Hom = () => {
  const { width, height } = useWindowSize();
  const [add, setAdd] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAdd(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {add && <Confetti width={width} height={height} />}
      {add && <h1>Tabriklaymiz Muvaffaqiyatli Ro'yxatdan O'tdingiz</h1>}
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, nulla.
    </div>
  );
};

export default Hom;
