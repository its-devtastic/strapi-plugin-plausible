import { prefixPluginTranslations } from "@strapi/helper-plugin";

import pluginPkg from "../../package.json";
import pluginId from "./utils/pluginId";
import PluginIcon from "./components/PluginIcon";
import Initializer from "./components/Initializer";

const pluginDescription = pluginPkg.strapi.description || pluginPkg.description;
const { name } = pluginPkg.strapi;

export default {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: "Analytics",
      },
      Component: async () => {
        const component = await import(
          /* webpackChunkName: "plausible-dashboard" */ "./pages/App"
        );

        return component;
      },
      permissions: [],
    });

    app.registerPlugin({
      id: pluginId,
      isReady: true,
      description: pluginDescription,
      name,
      initializer: Initializer,
    });
  },

  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
