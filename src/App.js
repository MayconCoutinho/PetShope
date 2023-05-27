import React from "react";
import { AuthProvider } from "./context/Auth/index.jsx";
import { Router } from "./routes/Routes";
import "./styles/globals.css";
import { ApiProvider } from "./context/Api/index.jsx";
import { DataProvider } from "./context/Data/index.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <ApiProvider>
          <DataProvider>
            <Router />
          </DataProvider>
        </ApiProvider>
      </AuthProvider>
    </>
  );
}
export default App;
