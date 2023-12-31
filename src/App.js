import Navbar from './navbar/navbar.jsx'
import Footer from './footer/footer.jsx'
import Body from './body/body.jsx'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
   
    <BrowserRouter>
      <Navbar/>
      <Body/>
      <Footer/>
    </BrowserRouter>
      


    </>
  );
}

export default App;
