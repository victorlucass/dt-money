import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>hello world</h1>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
