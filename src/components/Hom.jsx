import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import useWindowSize from "react-use/lib/useWindowSize";

const Hom = () => {
  const { width, height } = useWindowSize();
  const [add, setAdd] = useState(true);
  const refreshPage = () => {
    window.location.reload();
  };
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
      <div className="heder">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, nulla.
        </p>
        <Link to="/">
          <Button onClick={refreshPage}  variant="outlined" component="span">
            Chiqish
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hom;
