import Router from "./router/Router";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <Router />
    </ChakraProvider>
  );
}

export default App;
