"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
function buildInformationMessage() {
  if (process.env.GATSBY_APPOINTLET_URL !== undefined) {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: "appointlet_message",
      dangerouslySetInnerHTML: {
        __html: "\n        console.log(\"Appointlet scheduling page URL \u2192 " + process.env.GATSBY_APPOINTLET_URL + "\")\n      "
      }
    });
  } else {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: "appointlet_message",
      dangerouslySetInnerHTML: {
        __html: "\n        console.error(\"Appointlet scheduling page URL (GATSBY_APPOINTLET_URL) not set !\")\n      "
      }
    });
  }
} // <script defer src="https://js.appointlet.com/"></script>


var scriptAppointlet = /*#__PURE__*/_react.default.createElement("script", {
  key: 'scriptAppointlet',
  id: 'scriptAppointlet',
  type: 'text/javascript',
  src: '//js.appointlet.com/',
  defer: true
}); // <link href="https://js.appointlet.com/styles.css" rel="stylesheet" />


var styleAppointlet = /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("link", {
  key: 'styleAppointlet',
  id: 'styleAppointlet',
  rel: 'stylesheet',
  href: '//js.appointlet.com/styles.css'
})); // Lighthouse recommends pre-connecting


var preconnectStyleAppointlet = ( /*#__PURE__*/_react.default.createElement("link", {
  rel: "preconnect",
  key: "preconnect-style-appointlet",
  href: "//js.appointlet.com/styles.css"
}), /*#__PURE__*/_react.default.createElement("link", {
  rel: "dns-prefetch",
  key: "dns-prefetch-style-appointlet",
  href: "//js.appointlet.com/styles.css"
}), /*#__PURE__*/_react.default.createElement("link", {
  rel: "preload",
  as: "style",
  onLoad: "this.onload=null;this.rel='stylesheet'",
  key: "preload-style-appointlet",
  href: "//js.appointlet.com/styles.css"
}));
var preconnectScriptAppointlet = ( /*#__PURE__*/_react.default.createElement("link", {
  rel: "preconnect",
  key: "preconnect-script-appointlet",
  href: "//js.appointlet.com"
}), /*#__PURE__*/_react.default.createElement("link", {
  rel: "dns-prefetch",
  key: "dns-prefetch-script-appointlet",
  href: "//js.appointlet.com"
}));

var onRenderBody = function onRenderBody(_ref) {
  var setPostBodyComponents = _ref.setPostBodyComponents,
      setHeadComponents = _ref.setHeadComponents;
  setHeadComponents([preconnectStyleAppointlet, preconnectScriptAppointlet, scriptAppointlet, styleAppointlet]);
  setPostBodyComponents([buildInformationMessage()]);
};

exports.onRenderBody = onRenderBody;