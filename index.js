const details = require("./package.json");

const defaultOptions = {
  host: "localhost",
  port: 8097,
  websocket: undefined
};

function connectReactDevtools(reconciler, options) {
  global.window = global.window || global;
  global.WebSocket = global.WebSocket || require("ws");
  const { connectToDevTools } = require("react-devtools-core");
  const mergedOptions = { ...defaultOptions, ...options };

  connectToDevTools(mergedOptions);
  reconciler.injectIntoDevTools({
    bundleType: 1,
    version: details.version,
    rendererPackageName: "react-nodegui-renderer",
    findHostInstanceByFiber: reconciler.findHostInstance
  });
}

module.exports = {
  connectReactDevtools
};
