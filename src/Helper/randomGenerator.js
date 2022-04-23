import React from "react";

export const RandomGenerator = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQUIfdshjiiouerikblksjuiohedvjkiubvhkFSHNJKKFLNDDVINLUKFVNadadsdasdasdasd";
  const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
  return randomChar;
};
