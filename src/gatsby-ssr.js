/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from 'react'

function buildInformationMessage() {
  if (process.env.GATSBY_APPOINTLET_URL !== undefined) {
    return (
      <script
        key="appointlet_message"
        dangerouslySetInnerHTML={{
          __html: `
        console.log("Appointlet scheduling page URL → ${process.env.GATSBY_APPOINTLET_URL}")
      `,
        }}
      />
    )
  } else {
    return (
      <script
        key="appointlet_message"
        dangerouslySetInnerHTML={{
          __html: `
        console.error("Appointlet scheduling page URL (GATSBY_APPOINTLET_URL) not set !")
      `,
        }}
      />
    )
  }
}

// <script defer src="https://js.appointlet.com/"></script>
const scriptAppointlet = React.createElement(`script`, {
  key: 'scriptAppointlet',
  id: 'scriptAppointlet',
  type: 'text/javascript',
  src: '//js.appointlet.com/',
  defer: true,
})

// <link href="https://js.appointlet.com/styles.css" rel="stylesheet" />
const styleAppointlet = React.createElement(`link`, {
  key: 'styleAppointlet',
  id: 'styleAppointlet',
  rel: 'stylesheet',
  href: '//js.appointlet.com/styles.css',
})

// Lighthouse recommends pre-connecting
const preconnectStyleAppointlet =
  ((
    <link
      rel="preconnect"
      key="preconnect-style-appointlet"
      href="//js.appointlet.com/styles.css"
    />
  ),
  (
    <link
      rel="dns-prefetch"
      key="dns-prefetch-style-appointlet"
      href="//js.appointlet.com/styles.css"
    />
  ))
const preconnectScriptAppointlet =
  ((
    <link
      rel="preconnect"
      key="preconnect-script-appointlet"
      href="//js.appointlet.com"
    />
  ),
  (
    <link
      rel="dns-prefetch"
      key="dns-prefetch-script-appointlet"
      href="//js.appointlet.com"
    />
  ))

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setHeadComponents([
    preconnectStyleAppointlet,
    preconnectScriptAppointlet,
    scriptAppointlet,
    styleAppointlet,
  ])
  setPostBodyComponents([buildInformationMessage()])
}
