import React, { useEffect, useState } from "react";
import Desktop from "./components/Menu/Desktop";
import CssBaseline from "@mui/material/CssBaseline";
import RTL from "./components/RTL/index";
import ThemeProvider from "./components/ThemeProvider";
import MasterLayout from "./components/MasterLayout";
import CartContextProvider from "./contexts/CartContext";
import { ContextProvider } from "./contexts/GlobalContext";
import Adminpanel from "./components/Adminpanel/Adminpanel";
function App() {
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 3000));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".center-body");
      if (loaderElement) {
        loaderElement.remove();
        return setLoading(!isLoading);
      }
    });
  }, [isLoading]);
  if (isLoading) {
    return <></>;
  } else {
    return (
      <ThemeProvider>
        <RTL>
          <CartContextProvider>
            <ContextProvider>
              <CssBaseline />

              <MasterLayout />
            </ContextProvider>
          </CartContextProvider>
        </RTL>
      </ThemeProvider>
    );
  }
}
export default App;
