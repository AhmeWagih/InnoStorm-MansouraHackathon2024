import { hamburger } from "../assets/icons";
import { Logo } from "../assets/images";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <header className="padding-x pb-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={Logo} alt="logo" width={100} height={29} />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="font-montserrat leading-normal text-lg text-slate-gray">
            <Link to="/provider">Provider</Link>
          </li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray">
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
