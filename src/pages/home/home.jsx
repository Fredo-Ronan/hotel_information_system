import { useEffect, useState } from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { HomeDefaultPage } from "./HomeDefault";
import { FooterComp } from "../../components/FooterComp";
import { UserLayout } from "../../layouts/UserLayout";
import "./Home.css";

export const HomePage = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      setIsLogin(true);
    }
  });

  return (
    <>
      {isLogin ? (
        <>
          <UserLayout />
        </>
      ) : (
        <>
          {/* Navbar ketika tidak ada user yang login */}
          <MainLayout />
        </>
      )}
      <HomeDefaultPage />
      <FooterComp />
    </>
  );
};
