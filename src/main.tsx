import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ColorModeProvider>
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </ColorModeProvider>
  </StrictMode>
);
