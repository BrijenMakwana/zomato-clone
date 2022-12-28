import React, { useState } from "react";

const useForceUpdate = () => {
  const [value, setValue] = useState(0);

  return () => setValue(value + 1);
};

export default useForceUpdate;
