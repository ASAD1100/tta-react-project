import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Body from './components/body/body.jsx'
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
