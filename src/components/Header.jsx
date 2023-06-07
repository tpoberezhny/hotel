import React, { useState, useEffect } from "react";

function Header() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-3 lg:flex-row lg:justify-between lg:gap-y-0">
        <a href="/">
          {header ? (
            <img className="lg:w-[70px] w-[40px]" src="../../image/logo1.svg" />
          ) : (
            <img className="lg:w-[70px] w-[40px]" src="../../image/logo2.svg" />
          )}
        </a>
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-2 font-tertiary lg:tracking-[3px] items-center text-[15px] lg:text-[17px] uppercase lg:gap-x-10`}
        >
          <a href="/" className="hover:text-accent transition ">
            Home
          </a>
          <a href="/" className="hover:text-accent transition ">
            Rooms
          </a>
          <a href="/" className="hover:text-accent transition ">
            Restaurant
          </a>
          <a href="/" className="hover:text-accent transition ">
            Spa
          </a>
          <a href="/" className="hover:text-accent transition ">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
