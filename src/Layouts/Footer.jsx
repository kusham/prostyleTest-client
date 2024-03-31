import React from "react";
import { CustomFooter } from "./Layout-style";

const Footer = () => {
  return (
    <CustomFooter>
      Copyright © {new Date().getFullYear()} Created ABC Collage
    </CustomFooter>
  );
};

export default Footer;
