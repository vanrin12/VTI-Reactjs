import React, { lazy } from "react";
import { Route, Routes as RouteList } from "react-router";
import Admin from "../pages/admin";

interface RoutesProps {
  children?: React.ReactNode;
}

const Routes = (props: RoutesProps) => {
  return (
    <RouteList>
      <Route path="/admin" element={<Admin />} />
    </RouteList>
  );
};

export default Routes
