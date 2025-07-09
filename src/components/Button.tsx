import { MouseEvent, useState } from "react";

interface Props {
  children: string;
  onClick: (prompt: string, counter: number) => void;
}

const Button = ({ children, onClick }: Props) => {
  let [counter, setCounter] = useState(0);
  return (
    <button
      onClick={() => {
        onClick(children, counter);
        setCounter((counter) => counter + 1);
      }}
    >
      {`${children} ${counter}`}
    </button>
  );
};

export default Button;
