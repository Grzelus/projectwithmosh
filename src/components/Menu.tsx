import { ReactNode } from "react";

interface Props {
  text: string;
  children: ReactNode;
}
const Menu = ({ text, children }: Props) => {
  return (
    <>
      <h1>{text}</h1>
      {children}
    </>
  );
};

export default Menu;
