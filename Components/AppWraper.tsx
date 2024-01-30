import React, { ReactNode } from "react";
import { Header } from "@/Components";
import Footer from "./UI/Footer";

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppWrapper;
