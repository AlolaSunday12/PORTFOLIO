import React, { useState } from 'react';
import BounceLoader from "react-spinners/BounceLoader";

function Loader() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#000");

  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={loaderStyle}>
      <div className="sweet-loading text-center">
        <BounceLoader
          color={color}
          loading={loading}
          css=''
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Loader;