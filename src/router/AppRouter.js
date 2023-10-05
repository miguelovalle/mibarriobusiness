import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginCommerce } from "../components/auth/LoginCommerce";
import Gmap from "../components/GoogleMap/Gmap";

import { Pag1RegNeg } from "../components/register/Pag1RegNeg";
import { Pag2RegNeg } from "../components/register/Pag2RegNeg";
import { Pag3RegNeg } from "../components/register/Pag3RegNeg";
import { Pag4RegNeg } from "../components/register/Pag4RegNeg";
import { Pag5RegNeg } from "../components/register/Pag5RegNeg";
import { Dashboard } from "../components/commerce/Dashboard";
import { Ds } from "../components/commerce/Ds";
import { NewProduct } from "../components/product/NewProduct";
import { ProductContainer } from "../components/product/ProductContainer";
import { FeaturesProduct } from "../components/product/FeaturesProduct";
import { AggregatesProduct } from "../components/product/AggregatesProduct";
import { UpFile } from "../components/register/UpFile";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCommerce />} />
        <Route path="/map" element={<Gmap />} />
        <Route path="/auth/pag1" element={<Pag1RegNeg />} />
        <Route path="/auth/pag2" element={<Pag2RegNeg />} />
        <Route path="/auth/pag3" element={<Pag3RegNeg />} />
        <Route path="/auth/pag4" element={<Pag4RegNeg />} />
        <Route path="/auth/pag5" element={<Pag5RegNeg />} />
      </Routes>

      <Routes>
        <Route path="/ds" element={<Ds />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="productnew" element={<NewProduct />} />
          <Route path="upfile" element={<UpFile />} />
          <Route path="features" element={<FeaturesProduct />} />
          <Route path="aggregates" element={<AggregatesProduct />} />
          <Route path="products" element={<ProductContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
