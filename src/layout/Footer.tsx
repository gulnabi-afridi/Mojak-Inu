import React from "react";
import ComponentWrapper from "@/components/shared/ComponentWrapper/ComponentWrapper";

function Footer() {
  return (
    <div className="w-full mt-14 footerShadow">
      <ComponentWrapper style="">
        <div className="w-full h-[80px] flex justify-center items-center">
          <p className="text-[12px] md:text-[18px] text-white-main">
            © 2023 by PEPE. All rights reserved!
          </p>
        </div>
      </ComponentWrapper>
    </div>
  );
}

export default Footer;
