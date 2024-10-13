import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState(0);
  function handleClick(e) {
    let innerTxt = e.target.innerText;
    if (value == 0) {
      setValue(innerTxt);
      return;
    }
    setValue(value + innerTxt);
  }

  function calculateValue() {
    let ans = eval(value);
    setValue(ans);
  }

  function delLastValue() {
    let lastValue = Math.floor(value / 10);
    setValue(lastValue);
  }

  return (
    <div className="border border-black w-fit mx-auto mt-8 bg-amber-950 rounded-3xl p-3">
      <div className="border w-[310px] h-20 text-right p-4 text-4xl text-white  bg-yellow-900 border-yellow-900 rounded-2xl">
        {value}
      </div>
      <div className="grid grid-cols-4 max-w-fit gap-3 m-2 text-xl font-bold">
        <button
          onClick={() => {
            setValue(0);
          }}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          C
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          **
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          %
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          /
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          7
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          8
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          9
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          *
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          4
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          5
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          6
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          -
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          1
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          2
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          3
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          +
        </button>
        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white  text-2xl"
        >
          0
        </button>

        <button
          onClick={handleClick}
          className="border h-16 w-16 rounded-full bg-black text-white text-2xl"
        >
          .
        </button>
        <button
          onClick={calculateValue}
          className="border h-16 w-16 rounded-full bg-black text-white"
        >
          =
        </button>
        <button
          onClick={delLastValue}
          className="border h-16 w-16 rounded-full bg-black text-white"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Calculator;
