/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
// Check if window is defined (so if in the browser or in node.js).
import '@appointlet/appointlet.js/dist/appointlet.min.css'

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
const styleAppointlet = React.createElement(`style`, {
  key: 'styleAppointlet',
  id: 'styleAppointlet',
  rel: 'stylesheet',
  href: '//js.appointlet.com/styles.css',
})

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setHeadComponents([scriptAppointlet, styleAppointlet])
  setPostBodyComponents([buildInformationMessage()])
}
