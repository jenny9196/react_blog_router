import { Laptop, Smartphone, Tablet } from "@mui/icons-material";
import useWindowSize from "./hooks/useWindowSize";

const Header = ({ title }) => {
  const { width } = useWindowSize();

  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? <Smartphone /> : width < 992 ? <Tablet /> : <Laptop />}
    </header>
  );
};

export default Header;
