import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEditEntryPage from "./AddEditEntryPage";
import CategoriesPage from "./CategoriesPage";
import MainPage from "./MainPage";

import "./styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<AddEditEntryPage isEdit={false} />} />
        <Route path="/edit/:id" element={<AddEditEntryPage isEdit={true} />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
