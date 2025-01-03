import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section
      //   style={{ boxShadow: "0px 0px 4px -2px gray" }}
      className="shadow bg-white h-16 flex items-center"
    >
      <div className="flex items-center justify-between px-2 md:px-4 lg:px-8">
        <div className="flex items-center gap-1">
          <Image src={"/image.png"} width={22} height={20} alt="icon" />
          <h1 className="text-[#213f7d] font-semibold text-lg md:text-xl lg:text-2xl">
            LoanTech
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
