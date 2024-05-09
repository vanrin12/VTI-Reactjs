import React, { lazy } from 'react';
import { Route, Routes as RouteList } from 'react-router';
const Account = lazy(() => import('../pages/admin/account'));
const Product = lazy(() => import('../pages/admin/product'));

const Routes = () => {
  return (
    <RouteList>
      <Route path="/admin/account" element={<Account />} />
      <Route path="/admin/product" element={<Product />} />
    </RouteList>
  );
};

export default Routes;
