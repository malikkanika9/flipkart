import { Header, Home, NavBar } from "./components";
import { Box } from "@mui/material";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
