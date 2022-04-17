# gatsby-plugin-appointlet

Gatsby plugin Appointlet Button for adding your booking page to your website.

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

Add import to yout file :

`import AppointletButton from 'gatsby-plugin-appointlet'`
