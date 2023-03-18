import React from "react";
import Header from "../components/navbar/Header";
import { useLocation } from "react-router";

export default function Layout({ children }) {
  const location = useLocation();
  const hideHeader = location.pathname === "/login";
  return (
    <div>
      {!hideHeader && <Header />}
      {children}
      {/* add footer here if you want to add */}
    </div>
  );
}
