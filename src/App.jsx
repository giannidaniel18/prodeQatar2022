import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <div>welcome</div>
    </ChakraProvider>
  );
}

export default App;
