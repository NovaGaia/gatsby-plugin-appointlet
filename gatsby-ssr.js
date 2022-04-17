"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

require("@appointlet/appointlet.js/dist/appointlet.min.css");

var _react = _interopRequireDefault(require("react"));

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
// Check if window is defined (so if in the browser or in node.js).
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


var styleAppointlet = /*#__PURE__*/_react.default.createElement("style", {
  key: 'styleAppointlet',
  id: 'styleAppointlet',
  rel: 'stylesheet',
  href: '//js.appointlet.com/styles.css'
});

var onRenderBody = function onRenderBody(_ref) {
  var setPostBodyComponents = _ref.setPostBodyComponents,
      setHeadComponents = _ref.setHeadComponents;
  setHeadComponents([scriptAppointlet, styleAppointlet]);
  setPostBodyComponents([buildInformationMessage()]);
};

exports.onRenderBody = onRenderBody;