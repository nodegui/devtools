# React NodeGui devtools

React NodeGui's devtools support module.

# Installation

```
npm install --save-dev @nodegui/devtools
```

# Usage

```js
import { Renderer } from "@nodegui/react-nodegui";
import React from "react";
import App from "./app";

process.title = "My NodeGui App";

Renderer.render(<App />, {
  onInit: (reconciler: any) => {
    if (process.env.NODE_ENV === "development") {
      require("@nodegui/devtools").connectReactDevtools(reconciler);
    }
  }
});
```
