# gatsby-plugin-appointlet

Gatsby plugin Appointlet Button for adding your booking page to your website.

![License](https://img.shields.io/github/license/NovaGaia/gatsby-plugin-appointlet?style=flat-square)
![Version](https://img.shields.io/npm/v/gatsby-plugin-appointlet?style=flat-square)
![Gatsby Version](https://img.shields.io/npm/dependency-version/NovaGaia/gatsby-plugin-appointlet/peer/gatsby?style=flat-square)
![React Version](https://img.shields.io/github/package-json/dependency-version/NovaGaia/gatsby-plugin-appointlet/peer/react?style=flat-square)

### Changelog

**More informations in [`CHANGELOG.md`](https://github.com/NovaGaia/gatsby-plugin-appointlet/blob/main/CHANGELOG.md)**

## Installation

Use this commmand `npm i --save gatsby-plugin-appointlet` or `yarn install gatsby-plugin-appointlet`

## Configuration

Add an env var named `GATSBY_APPOINTLET_URL` = e.g. https://appointlet.link/your-scheduling-page

## Usage

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    ... other plugins
    `gatsby-plugin-appointlet`,
    ... other plugins
  ],
}
```

Add import to your file :

`import { AppointletButton } from 'gatsby-plugin-appointlet'`

Add component to your file :

```javascript
<AppointletButton tag="div" className="btn btn-primary gap-2">
  <FaCalendarCheck />
  <span>Prenez rendez-vous</span>
</AppointletButton>
```

You can set the type of component when you set the `tag` attribute. By default, the component is a `button`.

Every attributes set will be add to `AppointletButton`|`button`.
