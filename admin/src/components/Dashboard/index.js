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

  useEffect(() => {
    (async () => {
      const config = await request(`/${pluginId}/config`, {
        method: "GET",
      });

      setSharedLink(config.sharedLink);
    })();
  }, []);

  return (
    sharedLink && (
      <div>
        <iframe
          data-plausible-embed=""
          src={sharedLink}
          scrolling="no"
          frameBorder="0"
          loading="lazy"
          style={{ height: 1600, width: "100%" }}
        />
        <div style={{ fontSize: 14, paddingBottom: 16 }}>
          Stats powered by{" "}
          <a
            target="_blank"
            style={{ color: "#4F46E5", textDecoration: "underline" }}
            href="https://plausible.io"
          >
            Plausible Analytics
          </a>
        </div>
        <script async src="https://plausible.io/js/embed.host.js" />
      </div>
    )
  );
};

export default memo(Dashboard);
