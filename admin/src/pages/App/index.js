/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import { CheckPagePermissions } from "@strapi/helper-plugin";
import pluginPermissions from "../../permissions";

import Dashboard from "../../components/Dashboard";

const App = () => {
  return (
    <CheckPagePermissions permissions={pluginPermissions.view}>
      <Dashboard />
    </CheckPagePermissions>
  );
};

export default App;