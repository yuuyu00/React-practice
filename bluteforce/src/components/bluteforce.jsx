import React from "react";

export const Bluteforce = () => {
  const char = [
    "",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  const start = () => {
    for (let i = 0; i < 37; i++) {
      for (let j = 0; j < 37; j++) {
        for (let k = 0; k < 37; k++) {
          for (let l = 0; l < 37; l++) {
            const str = char[i] + char[j] + char[k] + char[l];
          }
        }
      }
    }
  };
  return <button onClick={start} />;
};
