import React from "react";

function Footer() {
  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto text-white flex justify-between items-center tracking-[2px] lg:text-[18px] text-[14px]">
        <img src="../../image/logo2.svg" className="lg:w-[70px] w-[40px]" />
        <h2 className="ml-5">Copyright &copy; Tymofii Poberezhnyi 2023. All rights reserved</h2>
      </div>
    </footer>
  );
}

export default Footer;
