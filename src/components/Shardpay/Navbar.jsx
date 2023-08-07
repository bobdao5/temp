import React, { useContext } from "react";

import { TransactionContext } from "../../context/TransactionContext";
import logo from "../../../images/bobdaofull.png";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-0 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const { currentAccount, formData } = useContext(TransactionContext);
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div>
      <div className="h-[2px] w-full bg-gray-500 my-0" />
      <nav className="w-full flex flex-[0.2] justify-between flow-root items-center mt-0 pt-0">
        <div className="buttonsdiv mt-4 ">
          <button className="buton">
            <a href="/">Home</a>
          </button>
          <button className="buton">
            <a href="/Buttons">get commune</a>
          </button>
          <button className="buton">
            <a href="/ShardPay">bitpay</a>
          </button>

          <button className="buton">
            <a href="/forms">profile signup</a>
          </button>
        </div>
        <div className="md:flex flex-initial flex-row justify- float-left items-center px-5">
          <span className="text-white flex flex-row  justify-center items-center p-2">
            <img
              src={logo}
              alt="logo"
              className="w-32 mx-0 rounded-full p-0s  my-0 cursor-pointer"
            />
          </span>
        </div>
        <div className="md:flex flex-initial flex-row justify- float-right items-center mt-7 px-0">
          <p className=" text-white bg-gradient-to-r from-violet-600 via-red-500 to-green-400 inline-block text-transparent bg-clip-text py-1 mb-4 mt-2">
            Account: {currentAccount}
          </p>
        </div>
      </nav>
      <div className="h-[1px] w-full bg-gray-500 my-0" />
    </div>
  );
};

export default Navbar;
