import { ReactNode } from "react";

interface Props {
  text: string;
  children: ReactNode;
}
const Menu = ({ text, children }: Props) => {
  return (
    <div className="card text-bg-primary mb-3">
      <div className="card-body">
        <h5 className="card-title">{text}</h5>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
};

export default Menu;
