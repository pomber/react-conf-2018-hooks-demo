import React from "react";

import { useThemeUI } from "theme-ui";

export function full(t) {
  const { code } = t.styles.CodeSurfer;
  return {
    ...t,
    colors: {
      ...t.colors,
      text: code.color,
      background: code.backgroundColor,
    },
  };
}

const load = require.context("./", true, /greeting\..*js$/);

export default function GreetingLoader({
  version = "1.1",
  theme,
}) {
  const Greeting = load("./greeting." + version + ".js")
    .default;

  const { themeUi } = useThemeUI();

  const t = theme || themeUi;

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
