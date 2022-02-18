/**
 *
 * Settings page.
 *
 */

import React from "react";
import { CheckPagePermissions } from "@strapi/helper-plugin";
import pluginPermissions from "../../permissions";

import Dashboard from "../../components/Dashboard";

const Settings = () => {
  return (
    <CheckPagePermissions permissions={pluginPermissions.view}>
      Settings
    </CheckPagePermissions>
  );
};

export default Settings;
