import React, { lazy } from "react";
import { Route, Routes as RouteList } from "react-router";
const Admin = lazy(() => import('../pages/admin'));

const Routes = () => {
  return (
    <RouteList>
      <Route path="/admin" element={<Admin />} />
    </RouteList>
  );
};

export default Routes
