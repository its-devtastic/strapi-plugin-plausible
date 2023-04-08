<div align="center" width="150px">
  <img style="width: 150px; height: auto;" src="public/assets/logo.png" alt="Logo - Strapi Plausible plugin" />
</div>
<div align="center">
  <h1>Strapi v4 - Plausible plugin</h1>
  <p>Add your Plausible analytics dashboard to Strapi</p>
  <a href="https://www.npmjs.org/package/strapi-plugin-plausible">
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/its-devtastic/strapi-plugin-plausible?label=npm&logo=npm">
  </a>
  <a href="https://www.npmjs.org/package/strapi-plugin-plausible">
    <img src="https://img.shields.io/npm/dm/strapi-plugin-plausible.svg" alt="Monthly download on NPM" />
  </a>
</div>

---

A plugin for [Strapi](https://github.com/strapi/strapi) that embeds [Plausible](https://plausible.io) analytics dashboards.

## Supported Strapi version

Currently only Strapi v4 is supported.

## Installation

With `npm`
```bash
npm install strapi-plugin-plausible
```

With `yarn`
```bash
yarn add strapi-plugin-plausible
```

In the `config/plugins.js` file add:

```js
module.exports = ({ env }) => ({
  // ...other plugins
  plausible: {
    config: {
      sharedLink: env("PLAUSIBLE_SHARED_LINK")
    }
  }
})
```

You can create a shared link in Plausible by going to _Site settings › Visibility_.
It looks something like this:

```text
https://plausible.io/share/example.com?auth=abc123
```

☝️ Make sure not to enable password protection for this link

☝️ If you're using the `strapi::security` middleware with CSP enabled, make sure
to allow `plausible.io` as a `frame-src`. Your `config/middlewares.js` should look something like:

```js
 {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-src": ["https://plausible.io"],
        ...
```

## Support

For Strapi documentation, please go to [the official Strapi documentation](https://strapi.io/documentation/).

For questions and issues with this plugin use one of the following channels:

- [GitHub](https://github.com/its-devtastic/strapi-plugin-plausible/issues) (Bug reports, Contributions, Questions and Discussions)
- [E-mail](mailto:hi@devtastic.co) - We'll respond as soon as possible

## 📝 License

[MIT License](LICENSE.md) 

Made in Utrecht by [Devtastic](https://devtastic.build/) 👨‍💻🌱🇪🇺.
