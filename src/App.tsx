import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/transactions";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
