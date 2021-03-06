import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NotFound } from "../components/NotFound";
import { Films } from "../containers/Films";
import { Detail } from "../containers/Detail";

export const MainRoute = () => (
    <BrowserRouter>
    <React.Fragment>
        <Header />
        <main className="container">
            <Routes>
                <Route path="/" element={<Films />} />
                <Route path="/film/:imdbID" element={<Detail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
    </React.Fragment>
    </BrowserRouter>
);


