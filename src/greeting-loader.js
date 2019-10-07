import React from "react";

import { useThemeUI } from "theme-ui";

const load = require.context("./", true, /greeting\..*js$/);

export default function GreetingLoader({
  version = "1.1",
  theme,
}) {
  const Greeting = load("./greeting." + version + ".js")
    .default;

  const { themeUi } = useThemeUI();

  const t = theme || themeUi;

  if (typeof window == `undefined`) {
    return null;
  }

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          t && t.styles.CodeSurfer.code.backgroundColor,
      }}
    >
      <Greeting name="Mary" />
    </div>
  );
}
