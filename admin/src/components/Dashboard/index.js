/*
 *
 * Plausible analytics dashboard.
 *
 */

import React, { memo, useEffect, useState } from "react";
import { request } from "@strapi/helper-plugin";

import pluginId from "../../utils/pluginId";

const Dashboard = () => {
  const [sharedLink, setSharedLink] = useState(null);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    (async () => {
      const config = await request(`/${pluginId}/config`, {
        method: "GET",
      });

      setSharedLink(config.sharedLink);
    })();
  }, []);

  useEffect(() => {
    setTheme(localStorage.getItem("STRAPI_THEME") || "light");
  }, []);

  return sharedLink && theme ? (
    <>
      <iframe
        data-plausible-embed=""
        src={`${sharedLink}&embed=true&theme=${theme}`}
        loading="lazy"
        style={{ height: "calc(100vh - 2px)", width: "100%" }}
      />
      <script async src="https://plausible.io/js/embed.host.js" />
    </>
  ) : null;
};

export default memo(Dashboard);
