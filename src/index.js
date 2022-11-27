import React,{StrictMode} from "react";
import {createRoot} from "react-dom/client";

import Header from "./components/header";
import Footer from "./components/footer";
import Article from "./components/article";
import Section from "./components/section";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <header>
            <p>Navigation bar</p>
            <Header/>
        </header>
        <Section/>
        <Footer/>
    </StrictMode>
);