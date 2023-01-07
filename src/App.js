import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Herosection from "./component/Herosection";
import { Container } from "@mui/material";
import CakesSection from "./component/CakesSection";
import ContactUs from "./component/ContactUs";
import Tables from "./component/Tables";
import Footer from "./component/Footer";
import Charts from "./component/Charts";
import Ecommerce from "./component/Ecommerce";
import Financial from "./component/Financial";
import Service from "./component/Service";
import Healthcare from "./component/Healthcare";
import Socialmedia from "./component/Socialmedia";

const theme = createTheme({
  palette: {
    primary: {
      main: "#864313",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider
        theme={theme}
        height={"100%"}
        width={"100%"}
        sx={{ maxWidth: "100vw" }}
      >
        <Navbar />
        <Container>
          <Herosection />
          <CakesSection />
          <Charts />
          <Ecommerce />
          {/* <Financial/> */}
          <Service />
          <Healthcare />
          <Socialmedia />
          <ContactUs />
          {/* <Tables/> */}
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
