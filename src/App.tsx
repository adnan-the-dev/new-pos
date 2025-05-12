import React from "react";
// import { useEffect } from 'react'
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import { Analytics } from "@vercel/analytics/react";

import "react-toastify/dist/ReactToastify.css";
import Testing from "./components/testing/Testing";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer
        // position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Analytics />
      <Footer></Footer>
      {/* <Testing/> */}
      <ToastContainer />
    </>
  );
}

export default App;
