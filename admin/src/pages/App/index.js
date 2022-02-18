/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Suspense, lazy } from "react";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";

const Dashboard = lazy(() => import("../../components/Dashboard"));

const App = () => {
  return (
    <Suspense fallback={<LoadingIndicatorPage />}>
      <Dashboard />
    </Suspense>
  );
};

export default App;
