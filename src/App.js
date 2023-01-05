import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Herosection from "./component/Herosection";
import {Container} from '@mui/material'
import CakesSection from "./component/CakesSection";
import ContactUs from "./component/ContactUs";
import Tables from "./component/Tables";

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
      <ThemeProvider theme={theme}>
        <Container>
        <Navbar />
        <Herosection/>  
        <CakesSection/> 
        <ContactUs/>
        <Tables/>
        </Container>
        
      </ThemeProvider>
    </>
  );
}

export default App;
