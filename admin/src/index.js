import { prefixPluginTranslations } from "@strapi/helper-plugin";

import pluginPkg from "../../package.json";
import pluginId from "./utils/pluginId";
import PluginIcon from "./components/PluginIcon";
import pluginPermissions from "./permissions";

const pluginDescription = pluginPkg.strapi.description || pluginPkg.description;
const { name } = pluginPkg.strapi;

export default {
  register(app) {
    app.registerPlugin({
      id: pluginId,
      isReady: true,
      description: pluginDescription,
      name,
    });
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
      permissions: pluginPermissions.view,
    });
    app.createSettingSection(
      {
        id: pluginId,
        intlLabel: {
          id: `${pluginId}.plugin.name`,
          defaultMessage: "Plausible",
        },
      },
      [
        {
          intlLabel: {
            id: `${pluginId}.plugin.name`,
            defaultMessage: "Settings",
          },
          id: `${pluginId}.settings`,
          to: "/admin/settings/plausible",
          Component: async () => {
            const component = await import(
              /* webpackChunkName: "plausible-settings" */ "./pages/Settings"
            );

            return component;
          },
          permissions: [],
        },
      ]
    );
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
