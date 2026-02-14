import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen ">
        <Header />

        <main className="container mx-auto px-4 py-6">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
