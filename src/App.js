
import './App.css';
import Header from './Components/header/Header';

 import Home from './Components/home/Home';
  
  import DataProvider from './context/DataProvider';

  import { BrowserRouter ,Routes , Route } from 'react-router-dom';
  
    import DetailView from './Components/details/DetailView';


     import Cart from './Components/cart/Cart'

   import { Box } from '@mui/material';

function App() {
  return (

/* <TemplateProvider>
      <ContextProvider> */
        <DataProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route path= '/' element={<Home />} />
   
              <Route path= '/product/:id' element={<DetailView />} />
              <Route path='/cart' element={ <Cart  />}    />
            </Routes>
          </Box>
        </BrowserRouter>
        </DataProvider>
    //   </ContextProvider>
    // </TemplateProvider>

  );
}

export default App;
